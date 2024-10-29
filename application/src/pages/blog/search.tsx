import { NextPage } from 'next';
import getConfig from 'next/config';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import createApi from '~/api-search';
import {
  BoxAdaptive,
  List,
  TextContent
} from '~/components/atoms';
import Container from '~/components/atoms/container/container';
import ArticlesList from '~/components/containers/articles-list';

import MetaBlock from '~/components/blocks/meta-block';

import { SearchPage } from '~/components/templates/search-page';
import Layout from '~/layout/layout';
import {
  ArticleViewModel,
  BreakpointViewModel,
  BotsDetectionViewModel,
} from '~/view-model';
import {
  getDeviceType,
  getCanonicalSubdomain,
  getLocale,
  transformHitToArticle,
} from '~/utils';
import useApi from '~/hooks/use-api';
import searchParams from '~/components/templates/search-page/search-params';
import { useResize } from '~/hooks';
import type SearchPageViewModel from '~/components/templates/search-page/search-page.view-model';

import categoriesTreeDataLayerMaker from '~/data-layer/categories-tree';

const TrialBlock = dynamic(import('~/components/containers/trial-block/block-default'), { ssr: false });

const suggestions = [
  'Ensure words are spelled correctly.',
  'Try rephrasing keywords or using synonyms.',
  'Try more general keywords.',
  'Make your queries as concise as possible.'
];

const Search: NextPage<SearchPageViewModel & BotsDetectionViewModel> = ({
  breakpoint,
  canonicalSubdomain,
  text,
  param,
  articles,
  categoriesTree,
  isBot,
  isUser
}) => {
  const [viewport, setViewport] = useState<BreakpointViewModel>(breakpoint);

  useResize(() => setViewport(getDeviceType()));

  const title = !text ? 'Find articles' : (articles.length === 0 ? 'No results found for' : 'Search result for: ');

  return (
    <Layout
      categoriesTree={categoriesTree}
      isBot={isBot}
      isUser={isUser}
    >
      <MetaBlock.Main
        title={`example Blog - ${title} ${text}`}
        canonical="blog/search/"
        subdomain={canonicalSubdomain}
      />
      <SearchPage
        text={text}
        param={param}
        title={title}
        content={
          text && articles.length === 0 ? (
            <BoxAdaptive
              pb={{ _: 240, x: 249, md: 318 }}
            >
              <Container>
                <TextContent
                  fontSize={{ _: 5, sm: 8 }}
                  fontWeight={{ _: 'accent' }}
                  accentFont
                  mt={{ _: 45, xm: 60, sm: 65 }}
                  mb={{ _: 16, xm: 24 }}
                  as="h2"
                >
                  Suggestions:
                </TextContent>
                <List data-test="suggestions-list" items={suggestions} />
              </Container>
            </BoxAdaptive>
          ) : (
            <BoxAdaptive pb={{ _: 90, x: 130, md: 120 }}>
              <ArticlesList
                articles={articles}
                breakpoint={breakpoint}
                horizontal={viewport.isDesktop}
                noShare
                largeCount={0}
              />
            </BoxAdaptive>
          )
        }
      />
      <TrialBlock />
    </Layout>
  );
};

export async function getServerSideProps({
  req,
  query: { text = '', param = searchParams[0].value }
}) {
  const breakpoint: BreakpointViewModel = getDeviceType(req);
  const {
    publicRuntimeConfig: { apiPublic },
    serverRuntimeConfig: { apiInternal, searchApi }
  } = getConfig();

  const api = useApi(apiInternal || apiPublic);

  const categoriesTreeDataLayer = categoriesTreeDataLayerMaker(
    req?.cache,
    api
  );

  const { isBot = false, isUser = true } = req;
  const host = req?.headers?.host || '';
  const canonicalSubdomain = getCanonicalSubdomain(host);
  const subdomain = getLocale(host);

  let articles: ArticleViewModel[] = [];
  let total = 0;

  const query = text?.trim() ?? '';

  if (query) {
    try {
      const { data: { result } } = await createApi(searchApi.URL, searchApi.TOKEN).search({
        query,
        language: subdomain,
        limit: 50,
      });
      const results = result?.hits ?? [];

      articles = results.map(transformHitToArticle);
      total = result?.total ?? 0;
    } catch {
      // eslint-disable-next-line no-console
      console.log('Something went wrong!');
    }
  }

  return {
    props: {
      canonicalSubdomain,
      breakpoint,
      categoriesTree: await categoriesTreeDataLayer.resolveCategoriesTree(subdomain),
      text: query,
      param,
      articles: articles || [],
      total: total || 0,
      isBot,
      isUser,
    },
  };
}

export default Search;
