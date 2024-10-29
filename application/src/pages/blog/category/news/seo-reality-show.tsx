import { NextPage } from 'next';
import getConfig from 'next/config';
import { useApi } from '~/hooks';

import {
  getDeviceType,
  getCanonicalSubdomain,
  getLocale,
  constructParams
} from '~/utils';

import Container from '~/components/atoms/container/container';
import BlogBreadcrumbs from '~/components/containers/blog-breadcrumbs/blog-breadcrumbs';
import MetaBlock from '~/components/blocks/meta-block';
import {
  ArticleTotalViewModel,
  BreakpointViewModel,
  PageContextViewModel,
  BotsDetectionViewModel,
} from '~/view-model';

import { GroupedCategory } from '~/components/templates/grouped-category';
import Layout from '~/layout/layout';
import realityShowArticles from '~/constants/reality-show-articles';

import PromotionWidget from '~/components/organisms/promotion-widget';
import promotedMaterial from '~/constants/promoted-material';
import GroupedCategoryViewModel from '~/components/templates/grouped-category/grouped-category.view-model';

import categoriesTreeDataLayerMaker from '~/data-layer/categories-tree';
import dataLayerService from '~/data-layer/service';
import getRedisKey from '~/data-layer/get-redis-key';
import CacheTTL from '~/data-layer/redis-ttl';

const Meta = {
  TITLE: 'SEO Reality Show by example',
  DESCRIPTION: 'For a special SEO Reality Show, example hired the best internet marketers to boost the business of real-world clients. We describe their tactics step-by-step, so you can easily repeat them and act like a pro. Read the episodes of the Show, repeat the steps outlined for your business and get more customers from the web!'
};

const tags = [{
  link: 'https://www.example.com/blog/example-seo-reality-show/',
  title: 'How the Show Works'
}];

const SeoRealityShowPage: NextPage<GroupedCategoryViewModel & BotsDetectionViewModel> = ({
  breakpoint,
  canonicalSubdomain,
  subdomain,
  categoryFields,
  categoriesTree,
  groups,
  isBot,
  isUser
}) => {
  const props = {
    breakpoint,
    categoryFields,
    groups,
    subdomain,
    tags,
    largeCount: 0
  } as GroupedCategoryViewModel;

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
        title={Meta.TITLE}
        description={Meta.DESCRIPTION}
        canonical={`blog/category/news/${categoryFields.slug}/`}
        subdomain={canonicalSubdomain}
      />
      <GroupedCategory {...props}>
        <Container>
          <PromotionWidget {...promotedMaterial[0]} />
        </Container>
      </GroupedCategory>
    </Layout>
  );
};

export async function getServerSideProps({ req }: PageContextViewModel) {
  const breakpoint: BreakpointViewModel = getDeviceType(req);
  const {
    publicRuntimeConfig: { apiPublic },
    serverRuntimeConfig: { apiInternal }
  } = getConfig();

  const { isBot = false, isUser = true } = req;
  const host = req?.headers?.host || '';
  const canonicalSubdomain = getCanonicalSubdomain(host);

  const subdomain = getLocale(host);

  const api = useApi(apiInternal || apiPublic);

  let categoryFields = null/*  as CategoryViewModel */;

  let groups = null as GroupedCategoryViewModel['groups'];

  const cache = req?.cache;

  const categoriesTreeDataLayer = categoriesTreeDataLayerMaker(
    cache,
    api
  );

  try {
    const category = 'seo-reality-show';

    const { data: dataCategory } = await dataLayerService({
      cache,
      key: getRedisKey({
        subdomain,
        category
      }).CATEGORY,
      expire: CacheTTL.CATEGORY,
      request: () => api.category({
        slug: category,
        params: {
          subdomain
        }
      })
    });

    categoryFields = dataCategory;

    const pageListParams = realityShowArticles.flatMap(({ ids }) => ids);

    const { data: articles } = await dataLayerService({
      cache,
      expire: CacheTTL.SEO_SHOW,
      key: getRedisKey({
        subdomain,
        category
      }).CATEGORY_ARTICLES_LIST,
      request: () => api.pagesList(constructParams('id[]', ...pageListParams))
    }) as ArticleTotalViewModel;

    if (Array.isArray(articles) && articles.length > 0) {
      groups = realityShowArticles.map(({ name, ids }) => ({
        name,
        articles: ids
          .map(id => articles
            .find(article => article.id === id))
          .filter(article => article)
      }));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('err category:', error);
  }

  return {
    props: {
      canonicalSubdomain,
      subdomain,
      breakpoint,
      categoriesTree: await categoriesTreeDataLayer.resolveCategoriesTree(subdomain),
      categoryFields,
      groups,
      isBot,
      isUser,
    }
  };
}

export default SeoRealityShowPage;
