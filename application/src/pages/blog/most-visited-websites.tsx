import { NextPage } from 'next';
import getConfig from 'next/config';
import useApi from '~/hooks/use-api';
import Layout from '~/layout/layout';
import { getCanonicalSubdomain, getLocale } from '~/utils';
import {
  CanonicalSubdomainViewModel,
  CategoriesTreeViewModel,
  PageViewModel,
  PageContextViewModel,
  BotsDetectionViewModel,
} from '~/view-model';
import MetaTagsArticle from '~/components/templates/article-base/meta-tags-article';
import { MostVisitedWebsites } from '~/components/templates/most-visited-websites';

import categoriesTreeDataLayerMaker from '~/data-layer/categories-tree';
import dataLayerService from '~/data-layer/service';
import getRedisKey from '~/data-layer/get-redis-key';
import CacheTTL from '~/data-layer/redis-ttl';

const MostVisited: NextPage<{
  categoriesTree: CategoriesTreeViewModel,
  canonicalSubdomain: CanonicalSubdomainViewModel,
  page: PageViewModel,
} & BotsDetectionViewModel> = ({
  categoriesTree,
  page,
  isBot,
  isUser
}) => (
  <Layout isBot={isBot} isUser={isUser} categoriesTree={categoriesTree}>
    {page && (
    <MetaTagsArticle
      page={page}
      canonicalSubdomain="www"
    />
    )}
    <MostVisitedWebsites page={page} />
  </Layout>
);

export async function getServerSideProps({ req }: PageContextViewModel) {
  const {
    publicRuntimeConfig: { apiPublic },
    serverRuntimeConfig: { apiInternal }
  } = getConfig();

  const { isBot = false, isUser = true } = req;
  const host = req?.headers?.host || '';
  const canonicalSubdomain = getCanonicalSubdomain(host);
  const subdomain = getLocale(host);

  const api = useApi(apiInternal || apiPublic);
  const cache = req?.cache;

  const categoriesTreeDataLayer = categoriesTreeDataLayerMaker(
    cache,
    api
  );

  let page = null;
  const slug = 'most-visited-websites';

  try {
    page = await dataLayerService({
      cache: req?.cache,
      key: getRedisKey({
        subdomain,
        slug: 'most-visited-websites'
      }).ARTICLE,
      expire: CacheTTL.POWER_PAGES,
      request: () => api.page(slug, { subdomain: 'en' })
    });

    if (!(page?.data?.status === 'published')) {
      return {
        notFound: true
      };
    }
  } catch (error) {
    if ([error?.message, error?.data?.message].some(code => code === '404')) {
      return {
        notFound: true
      };
    }
    return error;
  }

  return {
    props: {
      categoriesTree: await categoriesTreeDataLayer.resolveCategoriesTree(subdomain),
      canonicalSubdomain,
      isBot,
      isUser,
      page: page?.data ?? null
    },
  };
}

export default MostVisited;
