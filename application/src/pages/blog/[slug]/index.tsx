import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import getConfig from 'next/config';
import Script from 'next/script';

import { getCookies } from 'cookies-next';
import redirect from 'nextjs-redirect';
import dynamic from 'next/dynamic';
import {
  useApi,
  useClickHandling,
  useResize,
  useSubdomainContext
} from '~/hooks';
import { sendAnalyticEvent } from '~/analytics';

import {
  ArticleViewModel,
  PageViewModel,
  BreakpointViewModel,
  RedirectViewModel,
  ArticleTotalViewModel,
  OembedViewModel,
  CategoryTreeViewModel,
  BotsDetectionViewModel,
  PageContextViewModel,
} from '~/view-model';

import { ArticleBase } from '~/components/templates/article-base';

import {
  getCanonicalSubdomain,
  getLocale,
  getDeviceType,
  getDate,
  getSubdomain,
  constructParams
} from '~/utils';
import Layout from '~/layout/layout';
import type ArticleBaseViewModel from '~/components/templates/article-base/article-base.view-model';
import MetaTagsArticle from '~/components/templates/article-base/meta-tags-article';
import categoriesTreeDataLayerMaker from '~/data-layer/categories-tree';
import dataLayerService from '~/data-layer/service';
import getRedisKey from '~/data-layer/get-redis-key';
import CacheTTL from '~/data-layer/redis-ttl';

const ArticleSummary = dynamic(
  import('~/components/organisms/article-summary-widget'),
  { ssr: false }
);

interface Props extends ArticleBaseViewModel, OembedViewModel, BotsDetectionViewModel {
  redirectTarget: RedirectViewModel
}

const PageArticle: NextPage<Props> = ({
  breakpoint,
  canonicalSubdomain,
  page,
  categoriesTree,
  articles,
  ebook,
  redirectTarget,
  isAuth,
  parseContent,
  isBot,
  isUser,
  oembed: {
    twitter = false
  }
}) => {
  if (redirectTarget?.to) {
    const Redirect = redirect(redirectTarget?.to, {
      statusCode: Number(redirectTarget.type)
    });

    return (
      <Redirect />
    );
  }

  const publishedAt = getDate(page.publishedAt, '');

  const [viewport, setViewport] = useState<BreakpointViewModel>(breakpoint);

  useEffect(() => {
    setViewport(getDeviceType());

    sendAnalyticEvent('article-page', {
      label: [
        page?.author?.name ?? '',
        page?.author?.id,
        `blog-post-id:example.com/${page?.url}`,
        publishedAt
      ].join(' | ')
    });
  }, []);

  useResize(() => setViewport(getDeviceType()));

  useClickHandling('article[data-test="article-body"]', (event) => {
    const target = event.target as HTMLAnchorElement;

    if (target.getAttribute('target') === '_blank') {
      sendAnalyticEvent('article-link-target-blank', {
        label: target.href
      });
    }
  });

  useClickHandling('div[data-test="articles-list-more-on-this"]', (event) => {
    const target = event.target as HTMLAnchorElement;

    if (target.dataset.test === 'title') {
      sendAnalyticEvent('blocks-more-on-this-click', {
        label: target.href
      });
    }
  });

  const { hideSubscribe, language: lang } = useSubdomainContext();

  const props: ArticleBaseViewModel = {
    breakpoint: viewport,
    subdomain: lang,
    page,
    articles,
    ebook,
    isAuth,
    hideSubscribe,
    isBot,
    isUser
  };

  const articleAlternates = [[lang, `${page.url}/`], ...(page
    ?.translated?.length ? page
      .translated
      .map(({ language, url }) => [language, url]) : [])];

  return (
    <Layout
      isBot={isBot}
      isUser={isUser}
      categoriesTree={categoriesTree}
      buttonUpShift={page.tableOfContent ? 60 : 0}
    >
      <MetaTagsArticle
        page={page}
        canonicalSubdomain={canonicalSubdomain}
        alternates={articleAlternates}
      />
      <ArticleBase
        {...props}
        parseContent={parseContent}
        renderSidebar={page?.metrics && (() => (
          <ArticleSummary metrics={page.metrics} />
        ))}
      />
      {twitter && (
        <Script strategy="lazyOnload" src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
      )}
    </Layout>
  );
};

export default PageArticle;

export async function getServerSideProps(ctx: PageContextViewModel) {
  const {
    req,
    res,
    query: { slug }
  } = ctx;

  const breakpoint: BreakpointViewModel = getDeviceType(req);
  const {
    publicRuntimeConfig: { apiPublic, cookieName },
    serverRuntimeConfig: {
      apiInternal,
      requestsTimingLogging,
    }
  } = getConfig();

  const { isBot = false, isUser = true } = req;

  const host = req?.headers?.host || '';
  const canonicalSubdomain = getCanonicalSubdomain(host);

  const subdomain = getLocale(host);
  const hostLocale = getSubdomain(host);

  const authToken = getCookies(ctx, cookieName) || '';

  const api = useApi(apiInternal || apiPublic, authToken, requestsTimingLogging);

  const redirectTarget = {
    to: null
  };

  if (redirectTarget?.to) {
    return {
      props: {
        redirectTarget
      }
    };
  }

  let page = {} as PageViewModel;
  let oembed = {} as OembedViewModel['oembed'];
  let parseContent = true;
  let articles = [] as ArticleViewModel[];
  let redisCacheStatus = 'NOPE';
  let categoriesTree: CategoryTreeViewModel[] = [];
  const cache = req?.cache;

  const categoriesTreeDataLayer = categoriesTreeDataLayerMaker(cache, api);

  try {
    categoriesTree = await categoriesTreeDataLayer.resolveCategoriesTree(subdomain);

    const getData = () => api.page(slug, { subdomain: hostLocale });

    const redisDataPage = await dataLayerService({
      cache,
      expire: CacheTTL.ARTICLE,
      key: getRedisKey({
        subdomain,
        slug: slug as string,
      }).ARTICLE,
      request: getData
    });

    const isDataCorrect = redisDataPage ? redisDataPage?.data : false;

    if (!isDataCorrect) {
      const pageData = await getData();

      page = pageData.data;
      oembed = pageData.oembed;
      parseContent = pageData.parseContent;
    } else {
      page = redisDataPage.data;
      oembed = redisDataPage.oembed;
      parseContent = redisDataPage.parseContent;
      redisCacheStatus = 'GET';
    }

    res.setHeader('cache', redisCacheStatus);

    if (!page) {
      throw new Error('404');
    }

    if (page?.related && isBot) {
      const { data: articlesList } = await dataLayerService({
        cache,
        key: getRedisKey({
          subdomain,
          slug: slug as string,
        }).RELATED,
        request: () => api.pagesList(constructParams('id[]', ...page.related))
      }) as ArticleTotalViewModel;

      articles = articlesList;
    }
  } catch (error) {
    if (error.message === '404') {
      return {
        notFound: true
      };
    }
  }

  let isAuth = false;

  if (page?.status === 'draft') {
    if (authToken) {
      const { data: AuthSession } = await api.auth();

      isAuth = Boolean(AuthSession?.code);

      if (!isAuth) {
        return {
          notFound: true
        };
      }
    }
  }

  return {
    props: {
      canonicalSubdomain,
      breakpoint,
      page,
      categoriesTree,
      oembed,
      articles,
      isBot,
      isUser,
      isAuth,
      parseContent,
    }
  };
}
