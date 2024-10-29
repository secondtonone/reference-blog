import Link from 'next/link';
import { nanoid } from 'nanoid';
import { NextPage, NextPageContext } from 'next';

import { useEffect, useState } from 'react';
import getConfig from 'next/config';

import {
  BreakpointViewModel,
  CategoryViewModel,
  ArticleViewModel,
  CategoriesViewModel,
  ArticlesViewModel,
  CategoriesTreeViewModel,
  CanonicalSubdomainViewModel
} from '~/view-model';

import Layout from '~/layout/layout';
import { Container } from '~/components/atoms';

import getDeviceType from '~/utils/get-device-type';
import { useApi, useSubdomainContext } from '~/hooks';
import { getCanonicalSubdomain } from '~/utils';

const pages = [
  '/blog/',
  '/blog/category/seo/',
  '/blog/category/advanced-seo/',
  '/blog/category/example-news/',
  '/blog/category/ecommerce/',
  '/blog/category/social-media/',
  '/blog/category/seo-reality-show/',
  '',
  '/blog/improve-seo/',
  '/blog/subdomain-vs-subdirectory/',
  '/blog/seo-techniques/',
  '',
  '/blog/most-visited-websites/',
  '/blog/sp-500/',
  '/blog/fortune-500/',
  '',
  '/blog/404/',
  '',
  '/_dev/search/',
  '',
];

interface Props {
  categories: CategoriesViewModel,
  articles: ArticlesViewModel,
  categoriesTree: CategoriesTreeViewModel,
  canonicalSubdomain: CanonicalSubdomainViewModel
}

const PageIndex: NextPage<Props> = ({
  categories,
  articles,
  canonicalSubdomain,
  categoriesTree,
}) => {
  const [clientCategories, setClientCategories] = useState<CategoryViewModel[] | []>([]);
  const [clientArticles, setClientArticles] = useState<ArticleViewModel[] | []>([]);

  const { publicRuntimeConfig } = getConfig();
  const { apiPublic } = publicRuntimeConfig;

  const api = useApi(apiPublic);
  const { language } = useSubdomainContext();

  useEffect(() => {
    (async () => {
      const { data: dataCategories } = await api.categories();
      const { data: dataArticles } = await api.pages({ subdomain: 'en' });

      if (dataCategories && dataArticles) {
        setClientCategories(dataCategories);
        setClientArticles(dataArticles);
      }
    })();
  }, []);

  return (
    <Layout isBot={false} isUser categoriesTree={categoriesTree}>
      <Container>
        <br />
        <br />
        <strong>
          pages locale:
          {' '}
          {language}
        </strong>
        <br />
        <strong>
          canonicalSubdomain:
          {' '}
          {canonicalSubdomain}
        </strong>
        <br />
        <br />
        {pages.map(page => (
          <p key={nanoid()}>
            <Link href={page}>
              <a>
                {page}
              </a>
            </Link>
            <br />
            <br />
          </p>
        ))}
        <p>
          <Link href="/blog/sitemap">
            <a>/blog/sitemap</a>
          </Link>
        </p>
        <div>
          <br />
          <p>
            api categories:&nbsp;
            <b>server:</b>
            &nbsp;
            {' '}
            {categories?.length}
            ,&nbsp;
            <b>client:</b>
            &nbsp;
            {clientCategories?.length || ' loading categories...'}
          </p>
        </div>
        <div>
          <p>
            api articles:&nbsp;
            <b>server:</b>
            {' '}
            {articles?.length}
            ,&nbsp;
            <b>client:</b>
            &nbsp;
            {clientArticles?.length || ' loading articles...'}
          </p>
        </div>
        <br />
        <button
          type="button"
          onClick={() => {
            throw new Error('Hey front dude');
          }}
        >
          Throw error
        </button>
        <br />
      </Container>
    </Layout>
  );
};

export async function getServerSideProps({ req }: NextPageContext) {
  const breakpoint: BreakpointViewModel = getDeviceType(req);
  const {
    publicRuntimeConfig: { apiPublic },
    serverRuntimeConfig: { apiInternal }
  } = getConfig();

  const host = req?.headers?.host || window?.location?.host || '';
  const canonicalSubdomain = getCanonicalSubdomain(host);

  const api = useApi(apiInternal || apiPublic);

  const [
    { data: categories },
    { data: articles },
    { data: categoriesTree }
  ] = await Promise.all([
    api.categories(),
    api.pages({ subdomain: 'en' }),
    api.categoriesTree({ subdomain: 'en' })
  ]);

  return {
    props: {
      breakpoint,
      categories,
      articles,
      categoriesTree,
      canonicalSubdomain
    }
  };
}

export default PageIndex;
