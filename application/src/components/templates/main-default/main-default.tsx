import { useState, useCallback } from 'react';
import styled from 'styled-components';

import dynamic from 'next/dynamic';

import getConfig from 'next/config';
import { NextPage } from 'next';
import {
  BoxAdaptive,
  PageSection,
  Container
} from '~/components/atoms';

import ArticlesList from '~/components/containers/articles-list';
import RequestContainer from '~/components/containers/request-container';
import RequestChainContainer, { MethodSettings } from '~/components/containers/request-chain-container';
import DynamicComponent from '~/components/containers/dynamic-component';
import PageMainArticles from '~/constants/page-main-articles';

import {
  ArticlePreview
} from '~/components/organisms';

import promotedMaterial from '~/constants/promoted-material';
import PageLimit from '~/constants/page-limit';

import { calculateValueByPage } from '~/utils';

import {
  ArticlesViewModel, CategoryViewModel
} from '~/view-model';

import type MainDefaultViewModel from './main-default.view-model';

import { useApi, usePagination } from '~/hooks';

const PromotionWidget = dynamic(import('~/components/organisms/promotion-widget'), { ssr: false });
const SubscriptionBlock = dynamic(import('~/components/containers/subscription-block/block-with-text'), { ssr: false });
const TrialBlock = dynamic(import('~/components/containers/trial-block/block-default'), { ssr: false });

const MARGIN_FOR_DYNAMIC = 1500;

const categoryRequestBuild = (categoryLimit: number) => (
  slug: string,
  subdomain: keyof typeof PageMainArticles
): MethodSettings<'pages' | 'category'> => ([
  {
    method: 'pages',
    params: {
      limit: categoryLimit,
      categoryId: PageMainArticles[subdomain][slug],
      subdomain
    }
  },
  {
    method: 'category',
    params: { slug, params: { subdomain } }
  }
]);

const MainDefault: NextPage<MainDefaultViewModel> = ({
  breakpoint,
  previewCard,
  bigCards,
  articles = [],
  excludeIds,
  articlesCount,
  pagedLimit,
  editors,
  seo = [],
  marketing = [],
  content = [],
  tagsSeo = null,
  tagsMarketing = null,
  tagsContent = null,
  subdomain,
  hideSubscribe = false,
  isBot,
}) => {
  const [articlesTop, setArticlesTop] = useState<ArticlesViewModel>(
    articles
  );

  const [marginForDynamic, setMargin] = useState(0);

  const categoryLimit = breakpoint.isPhone ? 2 : 6;

  const categoryRequests = categoryRequestBuild(categoryLimit);

  const articlesSeo = seo;
  const articlesMarketing = marketing;
  const articlesContent = content;
  const articlesEditors = editors;

  const { publicRuntimeConfig: { apiPublic } } = getConfig();

  const api = useApi(apiPublic);

  const {
    pageActive,
    onPageClick,
    perPage,
    maxPage,
    nextPage
  } = usePagination(articlesCount, pagedLimit);

  const isFirstPage = pageActive === 1;

  const onLoadTop = useCallback(async (page : number = nextPage) => {
    const { data } = await api.pages({
      limit: page === 1 ? PageLimit.TOP : PageLimit.TOP_AFTER_FIRST,
      page: 1,
      subdomain,
      offset: calculateValueByPage({
        currentPage: page,
        lowerLimit: PageLimit.TOP,
        upperLimit: PageLimit.TOP_AFTER_FIRST,
        borderPage: PageLimit.PAGE_CHANGE_LIMIT
      }),
      excludeIds
    });

    setArticlesTop(data?.length > 0 ? data : []);
    onPageClick(page);
  }, [onPageClick, nextPage]);

  return (
    <>
      {previewCard && isFirstPage && (
        <ArticlePreview
          withPreview
          isHorizontal
          card
          key={`slide-${previewCard.id}`}
          breakpoint={breakpoint}
          {...previewCard}
        />
      )}
      <PageContentStyled
        pt={{ _: 0, lg: 20 }}
        pb={{ _: 30, lg: 20 }}
        data-test="template-main-default"
      >
        <PageSection>
          {isFirstPage && (
            <ArticlesList
              articles={bigCards}
              breakpoint={breakpoint}
              data-test="articles-list-top"
              anchor="articles-top"
            />
          )}
          <ArticlesList
            largeCount={0}
            articles={articlesTop}
            breakpoint={breakpoint}
            buttonText="Load more articles"
            pagination
            data-test="articles-list-main"
            anchor="articles-main"
            pageActive={pageActive}
            perPage={perPage}
            nextPage={nextPage}
            onLoadArticles={onLoadTop}
            disabledLoad={nextPage > maxPage}
            itemsCount={articlesCount}
          />
        </PageSection>
        <DynamicComponent.OnScroll
          instant={isBot}
          data-test="promo"
          onScroll={() => setMargin(MARGIN_FOR_DYNAMIC)}
        >
          <PageSection>
            <Container>
              <PromotionWidget {...promotedMaterial[5]} />
            </Container>
          </PageSection>
        </DynamicComponent.OnScroll>
        <DynamicComponent.OnIntersection
          instant={isBot}
          data-test="editors"
          margin={marginForDynamic}
        >
          <PageSection pb={{ _: 60, sm: 80 }}>
            <RequestContainer
              method="pagesList"
              params={PageMainArticles[subdomain].editors}
              data={isBot ? articlesEditors : undefined}
            >
              {({ data }) => (
                <ArticlesList
                  articles={data ? data
                    .slice(0, 4)
                    .map(article => ({ ...article, editedAt: null, publishedAt: null })) : []}
                  breakpoint={breakpoint}
                  largeCount={0}
                  perLine={2}
                  horizontal
                  onlyText
                  unwrapped
                  heading="Editors' Choice"
                  data-test="articles-list-editors-choice"
                  anchor="editors-choice"
                />
              )}
            </RequestContainer>
          </PageSection>
        </DynamicComponent.OnIntersection>
        <DynamicComponent.OnIntersection
          instant={isBot}
          data-test="second-promo"
          margin={marginForDynamic * 0.8}
        >
          <PageSection>
            <Container>
              <PromotionWidget {...promotedMaterial[6]} />
            </Container>
          </PageSection>
        </DynamicComponent.OnIntersection>

        <DynamicComponent.OnIntersection
          instant={isBot}
          data-test="articles-list-seo"
          margin={marginForDynamic * 0.9}
        >
          <PageSection>
            <RequestChainContainer
              chain={categoryRequests('seo', subdomain)}
              // @ts-ignore
              data={
                isBot ? [
                  { data: articlesSeo },
                  { data: tagsSeo }
                ] : []
              }
            >
              {([
                articlesSeoRequested,
                { data: tagsSeoRequested }
              ]) => (articlesSeoRequested?.data ? (
                <ArticlesList
                  cardsShow={3}
                  largeCount={0}
                  articles={articlesSeoRequested.data as ArticlesViewModel}
                  breakpoint={breakpoint}
                  data-test="articles-list-seo"
                  category={(tagsSeoRequested as CategoryViewModel)?.name ?? ''}
                  categorySlug="seo"
                  anchor="articles-seo"
                  tags={(tagsSeoRequested as CategoryViewModel)?.children}
                />
              ) : null)}
            </RequestChainContainer>
          </PageSection>
        </DynamicComponent.OnIntersection>
        {!hideSubscribe && (
          <DynamicComponent.OnIntersection
            instant={isBot}
            data-test="subscription"
            margin={marginForDynamic}
          >
            <PageSection id="subscribe">
              <SubscriptionBlock />
            </PageSection>
          </DynamicComponent.OnIntersection>
        )}

        <DynamicComponent.OnIntersection
          instant={isBot}
          data-test="articles-list-marketing"
          margin={marginForDynamic}
        >
          <PageSection>
            <RequestChainContainer
              chain={categoryRequests('marketing', subdomain)}
              // @ts-ignore
              data={
                isBot ? [
                  { data: articlesMarketing },
                  { data: tagsMarketing }
                ] : []
              }
            >
              {([
                articlesMarketingRequested,
                { data: tagsMarketingRequested }
              ]) => (articlesMarketingRequested?.data ? (
                <>
                  <ArticlesList
                    cardsShow={3}
                    largeCount={0}
                    articles={articlesMarketingRequested.data as ArticlesViewModel}
                    breakpoint={breakpoint}
                    data-test="articles-list-marketing"
                    category={(tagsMarketingRequested as CategoryViewModel)?.name ?? ''}
                    categorySlug="marketing"
                    anchor="articles-marketing"
                    tags={(tagsMarketingRequested as CategoryViewModel)?.children}
                  />
                </>
              ) : null)}
            </RequestChainContainer>
          </PageSection>
        </DynamicComponent.OnIntersection>
        <DynamicComponent.OnIntersection
          instant={isBot}
          data-test="trial"
          margin={marginForDynamic}
        >
          <PageSection>
            <TrialBlock />
          </PageSection>
        </DynamicComponent.OnIntersection>
        <DynamicComponent.OnIntersection
          instant={isBot}
          data-test="articles-list-content"
          margin={marginForDynamic}
        >
          <PageSection>
            <RequestChainContainer
              chain={categoryRequests('content', subdomain)}
              // @ts-ignore
              data={
                isBot ? [
                  { data: articlesContent },
                  { data: tagsContent }
                ] : []
              }
            >
              {([
                articlesContentRequested,
                { data: tagsContentRequested }
              ]) => (articlesContentRequested?.data ? (
                <ArticlesList
                  cardsShow={3}
                  largeCount={0}
                  articles={articlesContentRequested.data as ArticlesViewModel}
                  breakpoint={breakpoint}
                  data-test="articles-list-content-marketing"
                  category={(tagsContentRequested as CategoryViewModel)?.name ?? ''}
                  categorySlug="content"
                  anchor="articles-content-marketing"
                  tags={(tagsContentRequested as CategoryViewModel)?.children}
                />
              ) : null)}
            </RequestChainContainer>
          </PageSection>
        </DynamicComponent.OnIntersection>

      </PageContentStyled>
    </>
  );
};

const PageContentStyled = styled(BoxAdaptive)``;

export default MainDefault;
