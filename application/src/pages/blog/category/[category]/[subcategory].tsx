import { NextPage } from 'next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

import {
  useApi, useDataUpdate, usePagination, useSubdomainContext
} from '~/hooks';

import {
  composeMetaDescription,
  getCacheByStatus,
  getCanonicalSubdomain,
  getDeviceType,
  getLocale,
  getMetaDescriptionFromCategory
} from '~/utils';

import Container from '~/components/atoms/container/container';
import BlogBreadcrumbs from '~/components/containers/blog-breadcrumbs/blog-breadcrumbs';
import MetaBlock from '~/components/blocks/meta-block';
import {
  ArticleTotalViewModel,
  ArticleViewModel,
  BotsDetectionViewModel,
  BreakpointViewModel,
  CategoryViewModel,
  PageContextViewModel,
  SubdomainsViewModel,
  SubcategoriesViewModel
} from '~/view-model';

import SubcategoryPage from '~/components/templates/category/child';
import Layout from '~/layout/layout';
import CategoryPageViewModel from '~/components/templates/category/category-page.view-model';
import SubcategoryGroupsNoPaged from '~/components/templates/subcategory-groups-no-paged';

import categoriesTreeDataLayerMaker from '~/data-layer/categories-tree';

import dataLayerService from '~/data-layer/service';
import getRedisKey from '~/data-layer/get-redis-key';
import CacheTTL from '~/data-layer/redis-ttl';
import CategoryTemplate, { CategoryTemplateNames } from '~/enums/category-template';

const PageSubcategory: NextPage<CategoryPageViewModel
  & BotsDetectionViewModel
  & { categories?: SubcategoriesViewModel, template?: CategoryTemplate }> = ({
    breakpoint,
    canonicalSubdomain,
    subdomain,
    categoryFields,
    categoriesTree,
    articlesTop,
    articles,
    articlesCount,
    isBot,
    isUser,
    categories,
    template,
  }) => {
    const counted = articlesCount - Number(articlesTop?.length);
    const pagedLimit = !Number.isNaN(counted) ? counted : 0;
    const { hideSubscribe } = useSubdomainContext();

    const {
      maxPage
    } = usePagination(pagedLimit, 6);

    const {
      query: {
        page = 1,
      }
    } = useRouter();

    const checkedPage = page <= maxPage ? page : maxPage;

    const [metaTitle] = useDataUpdate({
      scheme: [
        ([pageNumber, title]) => `${pageNumber > 1 ? `Page ${pageNumber} - ` : ''}${title}`,
      ],
      deps: [checkedPage, categoryFields?.metaTitle || '']
    });

    const metaDescription = composeMetaDescription(
      getMetaDescriptionFromCategory(categoryFields),
      checkedPage
    );

    const renderTop = (
      <Container>
        <BlogBreadcrumbs
          muted
          links={categoryFields?.parent?.name && [
            {
              url: `/blog/category/${categoryFields.parent.slug}`,
              name: categoryFields.parent.name
            }
          ]}
        />
      </Container>
    );

    let subcategory;

    if (template === CategoryTemplateNames.SUBCATEGORY_DEFAULT) {
      const props = {
        breakpoint,
        categoryFields,
        articlesTop,
        articles,
        pagedLimit,
        subdomain,
        hideSubscribe
      };
      subcategory = <SubcategoryPage {...props} hideSubscribe hidePromo />;
    } else if (template === CategoryTemplateNames.SUBCATEGORY_GROUPS) {
      subcategory = (
        <SubcategoryGroupsNoPaged
          {...categoryFields}
          pages={articlesTop}
          articles={articles}
          categories={categories}
        />
      );
    }

    return (
      <Layout
        categoriesTree={categoriesTree}
        renderTop={renderTop}
        isBot={isBot}
        isUser={isUser}
      >
        <MetaBlock.Main
          title={`${metaTitle}`}
          description={metaDescription}
          canonical={`blog/category/${categoryFields?.parent?.slug}/${categoryFields.slug}/${checkedPage > 1
            ? `?page=${checkedPage}` : ''}`}
          subdomain={canonicalSubdomain}
        />
        {subcategory}
      </Layout>
    );
  };

export async function getServerSideProps({
  req, query: {
    category, subcategory, page, cache: cacheStatus
  }
}: PageContextViewModel) {
  const breakpoint: BreakpointViewModel = getDeviceType(req);
  const {
    publicRuntimeConfig: { apiPublic },
    serverRuntimeConfig: { apiInternal, requestsTimingLogging }
  } = getConfig();

  const { isBot = false, isUser = true } = req;
  const host = req?.headers?.host || '';
  const language = getCanonicalSubdomain(host);
  const canonicalSubdomain = language !== 'en' ? language : language.replace('en', 'www');

  const subdomain = getLocale(host);

  const api = useApi(apiInternal || apiPublic, '', requestsTimingLogging);

  const currentPage = Number.isInteger(Number(page)) ? Number(page) : 1;

  const cache = getCacheByStatus(req, cacheStatus);

  const categoriesTreeDataLayer = categoriesTreeDataLayerMaker(
    cache,
    api
  );

  let categoryFields = null as CategoryViewModel;
  let articlesTop = null as ArticleViewModel[];
  let articles = null as ArticleViewModel[];
  let articlesCount = 0;
  let categories: SubcategoriesViewModel = [];
  let template = CategoryTemplateNames.SUBCATEGORY_DEFAULT;
  const LIMIT_TOP = 4;

  const categoryParams = {
    subdomain,
    parentSlug: category,
  } as {
    subdomain: SubdomainsViewModel,
    parentSlug: string,
  };

  if (subdomain === 'en') {
    categoryParams.parentSlug = `${category}`;
  }

  try {
    const { data: dataCategory } = await dataLayerService({
      cache,
      expire: CacheTTL.CATEGORY,
      key: getRedisKey({
        subdomain,
        category,
        subcategory
      }).SUBCATEGORY,
      request: () => api.subcategory({
        slug: `${subcategory}`,
        params: categoryParams
      }),
    });

    const conditionToRender = dataCategory
      && dataCategory?.parent?.slug === category
      && subdomain === 'en';

    if (conditionToRender) {
      categoryFields = dataCategory;
    } else {
      return {
        redirect: {
          permanent: true,
          destination: '/blog/404'
        },
      };
    }
    let listTop;
    let listPaged;
    let total;

    ({ template } = dataCategory);

    if (subdomain === 'en' && template === CategoryTemplateNames.SUBCATEGORY_GROUPS) {
      const { pages, categories: categoryIds } = dataCategory;
      listTop = pages;

      if (categoryIds?.length > 0) {
        const { data: listCategories } = await api.subcategoryList({ ids: categoryIds });

        if (listCategories?.filter(
          (listCategory) => (listCategory?.pages?.length)
        )?.length > 0
        ) categories = listCategories;
      }

      ({ data: listPaged, total } = await dataLayerService({
        cache,
        key: getRedisKey({
          subdomain,
          currentPage,
          category: categoryFields?.parent?.id ? categoryFields?.parent?.slug : subcategory,
          subcategory
        }).SUBCATEGORY_ARTICLES_LIST,
        request: () => api.pages({
          limit: 25,
          categorySlug: `${subcategory}`,
          parentSlug: categoryFields?.parent?.id ? categoryFields?.parent?.slug : null,
          subdomain,
        })
      }) as ArticleTotalViewModel);
    } else {
      ({ data: listTop } = await dataLayerService({
        cache,
        key: getRedisKey({
          subdomain,
          category: categoryFields?.parent?.id ? categoryFields?.parent?.slug : subcategory,
          subcategory,
        }).SUBCATEGORY_ARTICLES_TOP,
        request: () => api.pages({
          limit: LIMIT_TOP,
          categorySlug: `${subcategory}`,
          parentSlug: categoryFields?.parent?.id ? categoryFields?.parent?.slug : null,
          subdomain
        })
      }));

      ({ data: listPaged, total } = await dataLayerService({
        cache,
        key: getRedisKey({
          subdomain,
          currentPage,
          category: categoryFields?.parent?.id ? categoryFields?.parent?.slug : subcategory,
          subcategory
        }).SUBCATEGORY_ARTICLES_LIST,
        request: () => api.pages({
          offset: LIMIT_TOP,
          limit: 6,
          categorySlug: `${subcategory}`,
          parentSlug: categoryFields?.parent?.id ? categoryFields?.parent?.slug : null,
          page: currentPage,
          subdomain
        })
      }) as ArticleTotalViewModel);
    }

    if (Array.isArray(listTop) && listTop.length > 0) {
      articlesTop = listTop;
    }

    if (Array.isArray(listPaged) && listPaged.length > 0) {
      articles = listPaged;
      articlesCount = total;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('err category:', error);
  }

  return {
    props: {
      canonicalSubdomain,
      currentPage,
      subdomain,
      breakpoint,
      categoriesTree: await categoriesTreeDataLayer.resolveCategoriesTree(subdomain),
      categoryFields,
      articlesTop,
      articles,
      isBot,
      isUser,
      articlesCount,
      template,
      categories,
    }
  };
}

export default PageSubcategory;
