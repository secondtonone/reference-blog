import { NextPage } from 'next';
import getConfig from 'next/config';
import * as Sentry from '@sentry/node';
import { useRouter } from 'next/router';

import { MainDefault } from '~/components/templates/main-default';
import { Errors } from '~/components/organisms';
import { useSubdomainContext } from '~/hooks';

import {
  getCanonicalSubdomain,
  getDeviceType,
  getLocale,
  getNumsFromString,
  calculateValueByPage
} from '~/utils';

import useApi, { PagesResponse } from '~/hooks/use-api';
import {
  ArticlesViewModel,
  ArticleViewModel,
  BreakpointViewModel,
  CanonicalSubdomainViewModel,
  CategoriesTreeViewModel,
  CategoryViewModel,
  EbookViewModel,
  PodcastViewModel,
  PageContextViewModel,
} from '~/view-model';

import categoriesTreeDataLayerMaker from '~/data-layer/categories-tree';
import dataLayerService, { checkCacheReady } from '~/data-layer/service';
import getRedisKey from '~/data-layer/get-redis-key';

import fixtureEbook from '~/__fixtures__/ebook';
import Layout from '~/layout/layout';
import PageMainArticles from '~/constants/page-main-articles';
import PageLimit from '~/constants/page-limit';
import MainDefaultViewModel from '~/components/templates/main-default/main-default.view-model';
import MetaTagsMain from '~/components/templates/main-default/meta-tags-main';
import CacheTTL from '~/data-layer/redis-ttl';

interface Props extends MainDefaultViewModel {
  categoriesTree: CategoriesTreeViewModel,
  canonicalSubdomain: CanonicalSubdomainViewModel,
  currentPage: number,
  errorCode: number,
}

const PageIndex: NextPage<Props> = (props) => {
  const {
    errorCode,
    categoriesTree,
    canonicalSubdomain,
    previewCard = null,
    bigCards = null,
    currentPage,
    isBot,
    isUser
  } = props;

  if (errorCode) {
    return <Errors.WentWrong />;
  }

  const { hideSubscribe } = useSubdomainContext();
  const {
    query: {
      page = 1,
    }
  } = useRouter();

  return (
    <Layout
      categoriesTree={categoriesTree}
      isBot={isBot}
      isUser={isUser}
    >
      <MetaTagsMain
        previewCard={previewCard}
        bigCards={bigCards}
        canonicalSubdomain={canonicalSubdomain}
        currentPage={currentPage !== +page ? +page : currentPage}
      />
      <MainDefault
        {...props}
        isBot={isBot}
        hideSubscribe={hideSubscribe}
      />
    </Layout>
  );
};

export async function getServerSideProps({
  req, res, query
}: PageContextViewModel) {
  const {
    publicRuntimeConfig: { apiPublic, isProd },
    serverRuntimeConfig: { apiInternal, requestsTimingLogging }
  } = getConfig();

  const breakpoint: BreakpointViewModel = getDeviceType(req);

  const host = req?.headers?.host || '';

  const { isBot = false, isUser = true } = req;

  const canonicalSubdomain = getCanonicalSubdomain(host);

  const subdomain = getLocale(host);

  const api = useApi(apiInternal || apiPublic, '', requestsTimingLogging);

  const validPage = !Number.isNaN(+query?.page);
  const pageNumber = validPage && +query?.page > 1 && +query?.page;

  const currentPage = pageNumber > 1 ? pageNumber : 1;

  const categoryLimit = breakpoint.isPhone ? 2 : 6;

  let articles: ArticlesViewModel;
  let articlesCount: number;
  let seo: ArticlesViewModel = [];
  let marketing: ArticlesViewModel = [];
  let content: ArticlesViewModel = [];
  let editors: ArticlesViewModel = [];
  let slides: ArticlesViewModel = [];
  const podcast = null as PodcastViewModel;
  const ebook = { ...fixtureEbook } as EbookViewModel;
  let tagsSeo: CategoryViewModel;
  let tagsMarketing: CategoryViewModel;
  let tagsContent: CategoryViewModel;

  let errorCode = '';

  let excludeIds = '';

  let redisCacheStatus = 'NOPE';
  const cache = req?.cache;

  try {
    const pageSettings = await dataLayerService({
      cache,
      key: getRedisKey({
        subdomain
      }).MAIN_PAGE_TOP,
      request: () => api.pageMainSettings(subdomain)
    });

    slides = pageSettings?.critical['top-articles'];

    if (slides.length === 0) throw new Error('top articles is empty');

    excludeIds = slides.map(({ id }) => id).join(',');
  } catch {
    Sentry.captureException(
      new Error('blog/index.js pageSettings corrupting request')
    );
  }

  const categoriesTreeDataLayer = categoriesTreeDataLayerMaker(
    cache,
    api
  );

  try {
    excludeIds = `${excludeIds ? `${excludeIds},` : ''}${getNumsFromString(PageMainArticles[subdomain].editors)}`;

    const isFirstPage = currentPage === 1;

    const mainResult: PagesResponse<ArticlesViewModel>[] = await Promise.all([
      dataLayerService({
        cache,
        key: getRedisKey({
          subdomain,
          currentPage
        }).MAIN_PAGE_LIST,
        request: () => api.pages({
          limit: isFirstPage ? PageLimit.TOP : PageLimit.TOP_AFTER_FIRST,
          subdomain,
          excludeIds,
          offset: calculateValueByPage({
            currentPage,
            lowerLimit: PageLimit.TOP,
            upperLimit: PageLimit.TOP_AFTER_FIRST,
            borderPage: PageLimit.PAGE_CHANGE_LIMIT
          }),
          page: 1
        })
      })
    ]);

    [
      { data: articles, total: articlesCount }
    ] = mainResult;

    const isMainResultEmpty = mainResult
      .reduce((total, { data }) => total || (!data || data?.length === 0), false);

    if (isMainResultEmpty) {
      throw new Error('404');
    }
  } catch (error) {
    if (error.message === '404' && res?.statusCode) {
      errorCode = error.message;

      return {
        redirect: {
          permanent: false,
          destination: '/blog/404'
        },
      };
    }
  }

  if (isBot) {
    try {
      const articlesEditorsChoice = dataLayerService({
        cache,
        expire: CacheTTL.CATEGORY,
        key: getRedisKey({
          subdomain
        }).MAIN_PAGE_EDITORS_CHOICE,
        request: () => api.pagesList(PageMainArticles[subdomain].editors)
      });

      const articlesCategorySeo = dataLayerService({
        cache,
        expire: CacheTTL.CATEGORY,
        key: getRedisKey({
          subdomain,
          category: 'seo'
        }).MAIN_PAGE_CATEGORY_ARTICLES,
        request: () => api.pages(
          { limit: categoryLimit, categoryId: PageMainArticles[subdomain].seo, subdomain }
        )
      });

      const articlesCategoryMarketing = dataLayerService({
        cache,
        expire: CacheTTL.CATEGORY,
        key: getRedisKey({
          subdomain,
          category: 'marketing'
        }).MAIN_PAGE_CATEGORY_ARTICLES,
        request: () => api.pages(
          {
            limit: categoryLimit,
            categoryId: PageMainArticles[subdomain].marketing,
            subdomain
          }
        ),
      });

      const articlesCategoryContent = dataLayerService({
        cache,
        expire: CacheTTL.CATEGORY,
        key: getRedisKey({
          subdomain,
          category: 'content'
        }).MAIN_PAGE_CATEGORY_ARTICLES,
        request: () => api.pages(
          {
            limit: categoryLimit,
            categoryId: PageMainArticles[subdomain].content,
            subdomain
          }
        ),
      });

      const articlesByCategory = await Promise.all([
        articlesCategorySeo,
        articlesCategoryMarketing,
        articlesCategoryContent,
        isProd ? articlesEditorsChoice : api.pages({ limit: 4, subdomain })
      ]) as PagesResponse<ArticlesViewModel>[];

      const isResultEmpty = articlesByCategory
        .reduce((total, { data }) => total || (!data || data?.length === 0), false);

      if (isResultEmpty) {
        Sentry.captureException(
          new Error('blog/index.js getInitialProps missing data in additional categories')
        );
      }

      [
        { data: seo },
        { data: marketing },
        { data: content },
        { data: editors },
      ] = articlesByCategory;
    } catch {
      Sentry.captureException(
        new Error('blog/index.js getInitialProps corrupting request with additional categories')
      );
    }

    try {
      const categoryParams = {
        subdomain
      };

      const tagsByCategorySeo = dataLayerService({
        cache,
        expire: CacheTTL.CATEGORY,
        key: getRedisKey({
          subdomain,
          category: 'seo'
        }).CATEGORY,
        request: () => api.category({ slug: 'seo', params: categoryParams }),
      });

      const tagsByCategoryMarketing = dataLayerService({
        cache,
        expire: CacheTTL.CATEGORY,
        key: getRedisKey({
          subdomain,
          category: 'marketing'
        }).CATEGORY,
        request: () => api.category({ slug: 'marketing', params: categoryParams }),
      });

      const tagsByCategoryContent = dataLayerService({
        cache,
        expire: CacheTTL.CATEGORY,
        key: getRedisKey({
          subdomain,
          category: 'content'
        }).CATEGORY,
        request: () => api.category({ slug: 'content', params: categoryParams }),
      });

      const tagsGroups = await Promise.all([
        tagsByCategorySeo,
        tagsByCategoryMarketing,
        tagsByCategoryContent
      ]);

      [
        tagsSeo,
        tagsMarketing,
        tagsContent
      ] = tagsGroups;
    } catch {
      Sentry.captureException(
        new Error('blog/index.js getInitialProps corrupting request with tags categories')
      );
    }
  }

  const slideOrder = excludeIds?.split(',');

  const previewCard = slides?.find((slide: ArticleViewModel) => slide?.id === Number(slideOrder
    && slideOrder[0]));

  const bigCards = slides?.filter((slide: ArticleViewModel) => slide?.id !== Number(slideOrder
    && slideOrder[0]));

  if (checkCacheReady(cache)) {
    redisCacheStatus = 'OK';
  }

  res.setHeader('cache', redisCacheStatus);

  return {
    props: {
      errorCode,
      subdomain,
      canonicalSubdomain,
      isUser,
      isBot,
      currentPage,
      breakpoint,
      categoriesTree: await categoriesTreeDataLayer.resolveCategoriesTree(subdomain),
      previewCard: previewCard ?? null,
      bigCards: bigCards ?? null,
      articles,
      excludeIds,
      articlesCount,
      pagedLimit: PageLimit.TOP_AFTER_FIRST,
      editors,
      seo,
      tagsSeo: tagsSeo ?? null,
      tagsMarketing: tagsMarketing ?? null,
      tagsContent: tagsContent ?? null,
      marketing,
      content,
      podcast,
      ebook
    }
  };
}

export default PageIndex;
