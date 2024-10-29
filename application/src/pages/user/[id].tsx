import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import getConfig from 'next/config';

import dynamic from 'next/dynamic';
import redirect from 'nextjs-redirect';
import ArticlesList from '~/components/containers/articles-list';
import BoxAdaptive from '~/components/atoms/box-adaptive';
import Container from '~/components/atoms/container';
import PageSection from '~/components/atoms/page-section';

import { getDeviceType, getLocale, getCanonicalSubdomain } from '~/utils';

import {
  useResize, useApi, usePagination, useSubdomainContext
} from '~/hooks';

import Layout from '~/layout/layout';

import {
  ArticlesViewModel,
  BreakpointViewModel,
  AuthorViewModel,
  CategoriesTreeViewModel,
  CanonicalSubdomainViewModel,
  BotsDetectionViewModel,
  PageContextViewModel
} from '~/view-model';

import MetaBlock from '~/components/blocks/meta-block';

import categoriesTreeDataLayerMaker from '~/data-layer/categories-tree';
import dataLayerService, { checkCacheReady } from '~/data-layer/service';
import CacheTTL from '~/data-layer/redis-ttl';
import getRedisKey from '~/data-layer/get-redis-key';

const AuthorBio = dynamic(import('~/components/organisms/author-bio'));
const TrialBlock = dynamic(import('~/components/containers/trial-block/block-default'), { ssr: false });

const {
  publicRuntimeConfig: { apiPublic }
} = getConfig();

interface Props extends BotsDetectionViewModel {
  canonicalSubdomain: CanonicalSubdomainViewModel,
  breakpoint: BreakpointViewModel,
  articles: ArticlesViewModel,
  author?: AuthorViewModel,
  id: number,
  articlesCount: number,
  categoriesTree?: CategoriesTreeViewModel,
}

const limit = 4;

const PageUser: NextPage<Props> = ({
  canonicalSubdomain,
  breakpoint,
  articles,
  articlesCount,
  author,
  categoriesTree,
  isBot,
  isUser
}) => {
  const [viewport, setViewport] = useState<BreakpointViewModel>(breakpoint);
  const [pagedArticles, setPagedArticles] = useState(
    articles
  );

  useResize(() => setViewport(getDeviceType()));

  const {
    pageActive,
    onPageClick,
    perPage,
    nextPage,
    disabledLoad
  } = usePagination(articlesCount, limit);

  const api = useApi(apiPublic);
  const { language } = useSubdomainContext();

  const authorId = author?.id ?? -1;

  const getArticles = () => {
    (async () => {
      if (authorId) {
        try {
          const {
            data: loadedArticles
          } = await api.authorArticles(authorId, { limit, subdomain: language, page: pageActive });

          if (loadedArticles?.length > 0) {
            const filteredResult = loadedArticles
              ?.filter(item => !articles?.some((art: any) => art.id === item.id));

            if (filteredResult?.length) {
              setPagedArticles([...articles, ...filteredResult]);
            }
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('author loading error', error);
        }
      }
    })();
  };

  useEffect(getArticles, [pageActive]);

  const userLink = `user/${authorId}/`;

  if (!author?.id) {
    const Redirect = redirect('https://www.example.com/404/', {
      statusCode: 301
    });

    return (
      <Redirect />
    );
  }

  return (
    <Layout isBot={isBot} isUser={isUser} categoriesTree={categoriesTree}>
      <PageContentStyled pb={{ _: 30, lg: 20 }}>
        <MetaBlock.Main
          title={`${author?.name} – example profile`}
          description="example's digital marketing blog is an innovative resource for content strategy, content marketing, SEO, exmpl, PPC, social media and more."
          canonical={userLink}
          subdomain={canonicalSubdomain}
        />
        <BoxAdaptive
          pt={{ _: 60, xm: 80 }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Container>
            {author && (
              <AuthorBio
                {...author}
              />
            )}
            {/* <TextContent textAlign="center"> */}
            {/*  <Button */}
            {/*    use="primary" */}
            {/*    internal */}
            {/*    w={200} */}
            {/*  > */}
            {/*    Posts 10 */}
            {/*  </Button> */}
            {/*  <Button use="secondary" internal w={200} ml={4}> */}
            {/*    Webinars 10 */}
            {/*  </Button> */}
            {/* </TextContent> */}
          </Container>
        </BoxAdaptive>
        {articles && (
          <PageSection pt={20}>
            <ArticlesList
              articles={pagedArticles}
              breakpoint={viewport}
              buttonText={articlesCount > articles.length ? 'More articles' : ''}
              horizontal={viewport.isDesktop}
              largeCount={0}
              pageActive={pageActive}
              perPage={perPage}
              nextPage={nextPage}
              onLoadArticles={() => onPageClick(nextPage)}
              disabledLoad={disabledLoad}
            />
          </PageSection>
        )}
      </PageContentStyled>
      <TrialBlock />
    </Layout>
  );
};

const PageContentStyled = styled(BoxAdaptive)``;

export async function getServerSideProps({
  req,
  res,
  query: { id, page }
}: PageContextViewModel & {query: { id: number | string, page: number }}) {
  const breakpoint: BreakpointViewModel = getDeviceType(req);
  const currentPage = (+page > 0 ? +page : 1);
  const pagedLimit = limit * currentPage;
  const authorId: number | string = !Number.isNaN(+id) ? +id : id;
  let articles: ArticlesViewModel = [];
  let articlesCount = 0;
  let author: AuthorViewModel = null;

  const { isBot = false, isUser = true } = req;
  const host = req?.headers?.host || '';

  const subdomain = getLocale(host);
  const canonicalSubdomain = getCanonicalSubdomain(host);

  const {
    serverRuntimeConfig: { apiInternal, requestsTimingLogging }
  } = getConfig();

  const api = useApi(apiInternal || apiPublic, '', requestsTimingLogging);

  const cache = req?.cache;

  const categoriesTreeDataLayer = categoriesTreeDataLayerMaker(cache, api);

  try {
    if (authorId) {
      const authorPayload = await dataLayerService({
        cache,
        expire: CacheTTL.AUTHOR,
        key: getRedisKey({
          subdomain,
          authorId,
        }).AUTHOR,
        request: () => api.author(authorId),
      });

      if (authorPayload !== undefined) {
        author = authorPayload;
      }
    }

    if (!author?.id) {
      // eslint-disable-next-line no-console
      console.log('author not found');
    }

    const {
      data,
      total
    } = await dataLayerService({
      cache,
      expire: CacheTTL.AUTHOR_ARTICLES_LIST,
      key: getRedisKey({
        subdomain,
        authorId,
        currentPage,
      }).AUTHOR_ARTICLES_LIST,
      request: () => api.authorArticles(authorId, {
        limit: pagedLimit,
        subdomain,
        page: currentPage
      }),
    });

    if (Array.isArray(data) && data.length > 0) {
      articles = data;
      articlesCount = total;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('err author', error);
  }

  let redisCacheStatus = 'NOPE';

  if (checkCacheReady(cache)) {
    redisCacheStatus = 'OK';
  }

  res.setHeader('cache', redisCacheStatus);

  return {
    props: {
      canonicalSubdomain,
      breakpoint,
      categoriesTree: await categoriesTreeDataLayer.resolveCategoriesTree(subdomain),
      articles,
      articlesCount,
      limit,
      author,
      isBot,
      isUser
    }
  };
}

export default PageUser;
