import { NextPage } from 'next';
import getConfig from 'next/config';

import { getCookies } from 'cookies-next';
import useApi from '~/hooks/use-api';
import Layout from '~/layout/layout';
import { getCanonicalSubdomain, getLocale } from '~/utils';
import {
  CanonicalSubdomainViewModel, CategoriesTreeViewModel, PageViewModel, PageContextViewModel
} from '~/view-model';
import PageContext from '~/contexts/page-context';
import MetaTagsArticle from '~/components/templates/article-base/meta-tags-article';
import { BlogTopDomains } from '~/components/templates/blog-top-domains';

import { CacheIncomingMessage } from '~/data-layer/types';
import categoriesTreeDataLayerMaker from '~/data-layer/categories-tree';
import dataLayerService from '~/data-layer/service';
import getRedisKey from '~/data-layer/get-redis-key';
import CacheTTL from '~/data-layer/redis-ttl';
import BotsDetectionViewModel from '~/view-model/bots-detection.view-model';

interface Props extends BotsDetectionViewModel {
  categoriesTree: CategoriesTreeViewModel,
  canonicalSubdomain: CanonicalSubdomainViewModel,
  page: PageViewModel,
}

const Fortune500: NextPage<Props> = ({
  categoriesTree,
  page,
  isBot,
  isUser
}) => (
  <PageContext.Provider value={{ page }}>
    <Layout isBot={isBot} isUser={isUser} categoriesTree={categoriesTree}>
      {page && (
        <MetaTagsArticle
          page={page}
          canonicalSubdomain="www"
        />
      )}
      <BlogTopDomains />
    </Layout>
  </PageContext.Provider>
);

export async function getServerSideProps(ctx) {
  const { req }: PageContextViewModel = ctx;
  const {
    publicRuntimeConfig: { apiPublic, cookieName },
    serverRuntimeConfig: { apiInternal }
  } = getConfig();

  const { isBot = false, isUser = true } = req;
  const host = req?.headers?.host || '';
  const canonicalSubdomain = getCanonicalSubdomain(host);
  const subdomain = getLocale(host);

  const authToken = getCookies(ctx, cookieName) || '';

  const api = useApi(apiInternal || apiPublic, authToken);
  const cache = (req as CacheIncomingMessage)?.cache;

  const categoriesTreeDataLayer = categoriesTreeDataLayerMaker(
    cache,
    api
  );

  let page = null;
  const slug = 'fortune-500';

  try {
    page = await dataLayerService({
      cache: (req as CacheIncomingMessage)?.cache,
      key: getRedisKey({
        subdomain,
        slug: 'fortune-500'
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
      page: page?.data ?? null,
      isBot,
      isUser,
    },
  };
}

export default Fortune500;
