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
  getMetaDescriptionFromCategory,
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
  PodcastViewModel,
  SubcategoriesViewModel,
} from '~/view-model';

import CategoryPage from '~/components/templates/category/parent';
import SubcategoryPage from '~/components/templates/category/child';
import { MainCategory } from '~/components/templates/main-category';
import Layout from '~/layout/layout';
import CategoryPageViewModel from '~/components/templates/category/category-page.view-model';
import SubcategoryGroupsNoPaged from '~/components/templates/subcategory-groups-no-paged';

import categoriesTreeDataLayerMaker from '~/data-layer/categories-tree';

import dataLayerService from '~/data-layer/service';
import getRedisKey from '~/data-layer/get-redis-key';
import CacheTTL from '~/data-layer/redis-ttl';
import { CategoryTemplateNames } from '~/enums/category-template';

const categoryTemplates = {
  [CategoryTemplateNames.CATEGORY_DEFAULT]:
  // eslint-disable-next-line react/destructuring-assignment
    (props: CategoryPageViewModel) => (!props.categoryFields?.parent
      ? <CategoryPage {...props} hideSubscribe hidePromo />
      : <SubcategoryPage {...props} hideSubscribe hidePromo />),
  [CategoryTemplateNames.CATEGORY_GROUPS]: ({
    breakpoint,
    categoryFields,
    subcategories
  }: CategoryPageViewModel) => (
    <MainCategory
      breakpoint={breakpoint}
      categoryFields={categoryFields}
      groups={subcategories}
    />
  ),
  [CategoryTemplateNames.SUBCATEGORY_GROUPS]: ({
    articlesTop,
    categoryFields,
    articles,
    subcategories
  }: CategoryPageViewModel) => (
    <SubcategoryGroupsNoPaged
      {...categoryFields}
      pages={articlesTop}
      articles={articles}
      categories={subcategories}
    />
  )
};

type PageCategoryProps = CategoryPageViewModel & BotsDetectionViewModel;

const PageCategory: NextPage<PageCategoryProps> = ({
  breakpoint,
  canonicalSubdomain,
  subdomain,
  categoryFields,
  categoriesTree,
  articlesTop,
  articles,
  subcategories,
  podcast = null,
  isBot,
  isUser,
  articlesCount,
  template
}) => {
  const counted = articlesCount - Number(articlesTop?.length);
  const pagedLimit = !Number.isNaN(counted) ? counted : 0;
  const { hideSubscribe } = useSubdomainContext();

  const props = {
    breakpoint,
    categoryFields,
    articlesTop,
    articles,
    pagedLimit,
    podcast,
    subdomain,
    hideSubscribe,
    subcategories
  };

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
    deps: [checkedPage, categoryFields.metaTitle]
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

  return (
    <Layout
      categoriesTree={categoriesTree}
      renderTop={renderTop}
      isBot={isBot}
      isUser={isUser}
    >
      <MetaBlock.Main
        title={metaTitle.toString()}
        description={metaDescription}
        canonical={`blog/category/${categoryFields.slug}/${checkedPage > 1 ? `?page=${checkedPage}` : ''}`}
        subdomain={canonicalSubdomain}
      />
      {categoryTemplates[template]
        ? categoryTemplates[template](props)
        : categoryTemplates[CategoryTemplateNames.CATEGORY_DEFAULT](props)}
    </Layout>
  );
};

export async function getServerSideProps({
  req, res, query: { category, page, cache: cacheStatus }
}: PageContextViewModel) {
  const breakpoint: BreakpointViewModel = getDeviceType(req);
  const {
    publicRuntimeConfig: { apiPublic },
    serverRuntimeConfig: { apiInternal, requestsTimingLogging }
  } = getConfig();

  const { isBot = false, isUser = true } = req;
  const host = req?.headers?.host || '';
  const canonicalSubdomain = getCanonicalSubdomain(host);

  const subdomain = getLocale(host);

  const api = useApi(apiInternal || apiPublic, '', requestsTimingLogging);

  const currentPage = Number.isInteger(Number(page)) ? Number(page) : 1;

  const cache = getCacheByStatus(req, cacheStatus);

  const categoriesTreeDataLayer = categoriesTreeDataLayerMaker(
    cache,
    api
  );

  const podcast = null as PodcastViewModel;
  let categoryFields = null as CategoryViewModel;
  let articlesTop = null as ArticleViewModel[];
  let articles = null as ArticleViewModel[];
  let articlesCount = 0;
  let subcategories:SubcategoriesViewModel = [];
  let template: CategoryTemplateNames = CategoryTemplateNames.CATEGORY_DEFAULT;
  const LIMIT_TOP = 4;

  try {
    const { data: dataCategory } = await dataLayerService({
      cache,
      expire: CacheTTL.CATEGORY,
      key: getRedisKey({
        subdomain,
        category,
      }).CATEGORY,
      request: () => api.category({
        slug: category,
        params: {
          subdomain
        }
      }),
    });

    if (dataCategory) {
      categoryFields = dataCategory;

      if (subdomain === 'en' && categoryFields?.parent?.slug) {
        const redirectLocation = `/blog/category/${categoryFields.parent.slug}/${categoryFields.slug}/`;

        res.setHeader('redirected-by', 'next');

        return {
          redirect: {
            permanent: false,
            destination: redirectLocation
          },
        };
      }
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
    ({ template } = categoryFields);

    if (subdomain === 'en' && template === CategoryTemplateNames.CATEGORY_GROUPS) {
      const { data: subcategoriesByCategory } = await dataLayerService({
        cache,
        expire: CacheTTL.CATEGORY,
        key: getRedisKey({
          subdomain,
          category
        }).SUBCATEGORIES,
        request: () => api.subcategories({ categorySlug: category, subdomain }),
      });

      subcategories = subcategoriesByCategory;
    } else if (subdomain === 'en' && template === CategoryTemplateNames.SUBCATEGORY_GROUPS) {
      const { pages, categories: categoryIds } = dataCategory;

      listTop = pages;

      if (categoryIds?.length > 0) {
        const { data: listCategories } = await api.subcategoryList({ ids: categoryIds });

        if (
          listCategories?.filter(
            (listCategory) => (listCategory?.pages?.length)
          )?.length > 0
        ) subcategories = listCategories;
      }

      ({ data: listPaged, total } = await dataLayerService({
        cache,
        key: getRedisKey({
          subdomain,
          currentPage,
          category: categoryFields?.parent?.id ? categoryFields?.parent?.slug : category,
          subcategory: categoryFields?.parent?.id ? category : '',
        })[categoryFields?.parent?.id ? 'SUBCATEGORY_ARTICLES_LIST' : 'CATEGORY_ARTICLES_LIST'],
        request: () => api.pages({
          limit: 25,
          categorySlug: `${category}`,
          parentSlug: categoryFields?.parent?.id ? categoryFields?.parent?.slug : null,
          subdomain
        })
      }) as ArticleTotalViewModel);
    } else {
      ({ data: listTop } = await dataLayerService({
        cache,
        key: getRedisKey({
          subdomain,
          category: categoryFields?.parent?.id ? categoryFields?.parent?.slug : category,
          subcategory: categoryFields?.parent?.id ? category : ''
        })[categoryFields?.parent?.id ? 'SUBCATEGORY_ARTICLES_TOP' : 'CATEGORY_ARTICLES_TOP'],
        request: () => api.pages({
          limit: LIMIT_TOP,
          categorySlug: `${category}`,
          parentSlug: categoryFields?.parent?.id ? categoryFields?.parent?.slug : null,
          subdomain
        })
      }));

      ({ data: listPaged, total } = await dataLayerService({
        cache,
        key: getRedisKey({
          subdomain,
          currentPage,
          category: categoryFields?.parent?.id ? categoryFields?.parent?.slug : category,
          subcategory: categoryFields?.parent?.id ? category : '',
        })[categoryFields?.parent?.id ? 'SUBCATEGORY_ARTICLES_LIST' : 'CATEGORY_ARTICLES_LIST'],
        request: () => api.pages({
          offset: LIMIT_TOP,
          limit: 6,
          categorySlug: `${category}`,
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
      articlesCount,
      isBot,
      isUser,
      subcategories,
      podcast,
      template
    }
  };
}

export default PageCategory;
