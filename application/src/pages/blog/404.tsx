import styled from 'styled-components';
import { NextPage } from 'next';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';
import ArticlesList from '~/components/containers/articles-list';

import {
  Page,
  BoxAdaptive,
  PageSection,
  TextContent
} from '~/components/atoms';

import MetaBlock from '~/components/blocks/meta-block';

import { Errors } from '~/components/organisms';

import { getDeviceType, getCanonicalSubdomain, getLocale } from '~/utils';

import useApi from '~/hooks/use-api';

import {
  BreakpointViewModel,
  ArticleViewModel,
  CategoryTreeViewModel,
  CanonicalSubdomainViewModel,
  PageContextViewModel,
  BotsDetectionViewModel
} from '~/view-model';
import Layout from '~/layout/layout';
import categoriesTreeDataLayerMaker from '~/data-layer/categories-tree';

const TrialBlock = dynamic(import('~/components/containers/trial-block/block-default'), { ssr: false });

interface Props extends BotsDetectionViewModel {
  canonicalSubdomain: CanonicalSubdomainViewModel,
  breakpoint: BreakpointViewModel,
  articles: ArticleViewModel[],
  categoriesTree?: CategoryTreeViewModel
}

const PageNotFound: NextPage<Props> = ({
  articles,
  breakpoint,
  canonicalSubdomain,
  categoriesTree,
  isBot,
  isUser
}) => {
  const { isPhone, isTablet, isDesktop } = breakpoint;

  return (
    <Layout isBot={isBot} isUser={isUser} categoriesTree={categoriesTree}>
      <MetaBlock.Main
        title="example Blog - 404 Page Not Found"
        canonical="blog/404/"
        subdomain={canonicalSubdomain}
      />
      <Page>
        <BoxAdaptive
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          flex={1}
        >
          <PageContentStyled
            pt={{ _: 0, lg: 20 }}
            pb={{ _: 30, lg: 20 }}
          >
            <Errors.NotFound />
            <BoxAdaptive
              textAlign="center"
              pt={{ _: 80, sm: 120, lg: 0 }}
            >
              <ListHeadingStyled
                fontSize={{ _: 6, sm: 11 }}
                fontWeight={{ _: 'bold' }}
                maxWidth={{ _: 240, sm: '100%' }}
                margin="0 auto"
                level={0}
                accentFont
                data-test="error-caption"
              >
                These articles might be interesting for you
              </ListHeadingStyled>
            </BoxAdaptive>
            {articles && (
              <PageSection>
                <ArticlesList
                  largeCount={isDesktop ? 2 : 4}
                  articles={articles.length > 0
                    ? articles.slice(0, (isPhone || isTablet) ? 4 : 5) : []}
                  breakpoint={breakpoint}
                  data-test="articles-list-bottom-page"
                />
              </PageSection>
            )}
          </PageContentStyled>
          <TrialBlock />
        </BoxAdaptive>
      </Page>
    </Layout>
  );
};

const PageContentStyled = styled(BoxAdaptive)``;

const ListHeadingStyled = styled(TextContent)`
  color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.secondary5)};
`;

export async function getServerSideProps({ req, res }: PageContextViewModel) {
  const breakpoint: BreakpointViewModel = getDeviceType(req);
  const {
    publicRuntimeConfig: { apiPublic },
    serverRuntimeConfig: { apiInternal }
  } = getConfig();

  const api = useApi(apiInternal || apiPublic);

  const { isBot = false, isUser = true } = req;
  const host = req?.headers?.host || '';
  const canonicalSubdomain = getCanonicalSubdomain(host);
  const subdomain = getLocale(host);

  const categoriesTreeDataLayer = categoriesTreeDataLayerMaker(
    req?.cache,
    api
  );

  const { data: articles } = await api.pages({ subdomain });

  res.statusCode = 404;

  return {
    props: {
      canonicalSubdomain,
      breakpoint,
      articles,
      isBot,
      isUser,
      categoriesTree: await categoriesTreeDataLayer.resolveCategoriesTree(subdomain),
    }
  };
}

export default PageNotFound;
