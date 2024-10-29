import dynamic from 'next/dynamic';

import styled from 'styled-components';

import { NextPage } from 'next';
import BoxAdaptive from '~/components/atoms/box-adaptive';
import Container from '~/components/atoms/container';
import PageSection from '~/components/atoms/page-section';
import ArticleHeading from '~/components/organisms/article-heading';
import ArticleTocSide from '~/components/organisms/article-toc-side';
import { brUp } from '~/styles/helpers';

import promotedMaterial from '~/constants/promoted-material';

import ArticleContent from '~/components/containers/article-content';
import RequestContainer from '~/components/containers/request-container';
import { contentSizes } from '~/styles';

import { ButtonIcon, TextContent, ShareBlock } from '~/components/atoms';
import getScheme from '~/styles/scheme/scheme';

import { seoRealityIds } from '~/constants/reality-show-articles';
import DynamicComponent from '~/components/containers/dynamic-component';

import type ArticleBaseViewModel from './article-base.view-model';
import { constructParams } from '~/utils';
import articleBaseData from './article-base-data';

const AuthorBio = dynamic(
  import('~/components/organisms/author-bio'),
  { ssr: true }
);

const SubscriptionForm = dynamic(
  import('~/components/containers/subscription-block/block-sided'),
  { ssr: false }
);

const ArticleTocBottom = dynamic(
  import('~/components/organisms/article-toc-bottom'),
  { ssr: false }
);

const lightTheme = getScheme();

const TOC_WIDTH = 193;
const MARGIN_FOR_DYNAMIC = 2000;

const ArticlesList = dynamic(
  import('~/components/containers/articles-list')
);

const Promo = dynamic(
  import('~/components/organisms/promotion-widget'),
  { ssr: false }
);

const TrialBlock = dynamic(
  import('~/components/containers/trial-block/block-default'),
  { ssr: false }
);

const Draft = dynamic(
  import('~/components/atoms/draft'),
  { ssr: false }
);

const ArticleBase: NextPage<ArticleBaseViewModel> = ({
  breakpoint,
  page,
  articles,
  isAuth,
  hideSubscribe,
  renderSidebar,
  parseContent,
  isBot,
  subdomain = 'en',
}) => {
  const stepLeft = page?.tableOfContent;

  const ArticleToc = () => {
    if (!page.tableOfContent) {
      return null;
    }

    if (breakpoint.isPhone || breakpoint.isTablet) {
      return (
        <ArticleTocBottom
          isEnabled={page.tableOfContent}
          levels={['h2']}
        />
      );
    }

    return (
      <ArticleTocSide
        isEnabled={page.tableOfContent}
        width={TOC_WIDTH}
        levels={['h2']}
      />
    );
  };

  return (
    <>
      {page?.tableOfContent && (
        // @ts-ignore
        <style global jsx>
          {'.b-blog__toc {display: none;}'}
        </style>
      )}
      <ArticleHeading
        title={page.title}
        previewImage={page.previewImage}
        altPreviewImage={page.altPreviewImage}
        author={page.author}
        publishedAt={page.publishedAt}
        editedAt={page.editedAt}
        background={page.background}
        category={page.category}
        timeToRead={page.timeToRead}
        renderTop={isAuth && (<Draft />)}
        stepLeft={stepLeft}
      >
        {isAuth ? (
          <EditStyled
            position="absolute"
            top={45}
            right="-4.5%"
            display={{ _: 'none', lg: 'block' }}
          >
            <a
              data-test="edit-link"
              target="_blank"
              rel="noreferrer"
              href={`https://admin.example.net/admin/blog/edit/${page.id}/`}
              title="Edit article content"
            >
              <ButtonIcon code="edit" sizes={[16, 16]} />
            </a>
          </EditStyled>
        ) : null}
      </ArticleHeading>
      <Container full={stepLeft && breakpoint.isDesktop}>
        <BoxAdaptive
          pt={{ _: 18, sm: 38 }}
          display="flex"
          position="relative"
          data-test={`template-${page.template}`}
          flexDirection={{ _: 'column', md: 'row' }}
        >
          <ArticleToc />
          {(page && page?.critical) && page?.critical['article-content']?.content && (
            <ArticleContent
              markup={page.critical['article-content'].content}
              tableOfContent={page?.tableOfContent}
              sideBar={!!renderSidebar}
              parseContent={parseContent}
              shareBlock={(
                <ShareBlockStyled
                  display="flex"
                  alignItems="center"
                >
                  <TextContent
                    fontSize={1}
                    data-test="share-block-description"
                  >
                    {articleBaseData[subdomain].share}
                  </TextContent>
                  <BoxAdaptive
                    pl="10px"
                    flexWrap="wrap"
                    data-test="share-block"
                  >
                    <ShareBlock
                      pageTitle={page.title}
                      linkTitle={articleBaseData[subdomain].share}
                      url={`https://${subdomain}.example.com/${page.url}`}
                    />
                  </BoxAdaptive>
                </ShareBlockStyled>
              )}
            />
          )}
          {typeof renderSidebar === 'function' && renderSidebar()}
        </BoxAdaptive>
      </Container>
      <Container>
        <BoxAdaptive
          pt={{ _: '20px', md: 10 }}
          pb={{ _: '30px', x: '20px' }}
          display="flex"
          justifyContent="space-between"
          flexDirection={{ _: 'column', lg: 'row' }}
        >
          <DynamicComponent.OnIntersection
            instant={isBot}
            data-test="author-bio"
            margin={MARGIN_FOR_DYNAMIC}
          >
            <AuthorBio
              {...page.author}
              inBlock
              maxWidth={contentSizes.limited}
              key="user-bio"
            />
          </DynamicComponent.OnIntersection>
          {!hideSubscribe && (
            <DynamicComponent.OnIntersection
              instant={isBot}
              data-test="subscription"
              margin={MARGIN_FOR_DYNAMIC}
            >
              <SubscriptionForm
                key="subscription"
                maxWidth={{
                  _: '100%',
                  xm: 300,
                  sm: 324,
                  lg: 280,
                  xl: 290
                }}
                mt={{ _: 20, md: 0 }}
                mb={{ _: 40 }}
                pl={0}
                right={0}
                theme={page?.category?.name}
              />
            </DynamicComponent.OnIntersection>
          )}
        </BoxAdaptive>
      </Container>
      {
        page?.related?.length > 0 && (
          <DynamicComponent.OnIntersection
            instant={isBot}
            data-test="more-on-this"
            margin={MARGIN_FOR_DYNAMIC}
          >
            <PageSection pb={{ _: 60, sm: 68 }}>
              <RequestContainer
                method="pagesList"
                params={constructParams('id[]', ...page.related)}
                placeholder={
                  <BoxAdaptive height={350} />
                }
                data={isBot ? articles : undefined}
              >
                {({ data }) => (
                  <ArticlesList
                    articles={data}
                    breakpoint={breakpoint}
                    largeCount={0}
                    perLine={2}
                    level={7}
                    horizontal
                    onlyText
                    unwrapped
                    heading="More on this"
                    data-test="articles-list-more-on-this"
                  />
                )}
              </RequestContainer>
            </PageSection>
          </DynamicComponent.OnIntersection>
        )
      }
      {seoRealityIds?.includes(page.id) && (
        <DynamicComponent.OnIntersection
          instant={isBot}
          data-test="promo"
          margin={MARGIN_FOR_DYNAMIC}
        >
          <PageSection>
            <Container>
              <Promo {...promotedMaterial[0]} />
            </Container>
          </PageSection>
        </DynamicComponent.OnIntersection>
      )}
      <DynamicComponent.OnIntersection
        instant={isBot}
        data-test="trial"
        margin={MARGIN_FOR_DYNAMIC}
      >
        <TrialBlock />
      </DynamicComponent.OnIntersection>
    </>
  );
};

const EditStyled = styled(BoxAdaptive)`
  background: ${({ theme }) => (theme.isLight ? theme.white : lightTheme.opposed)};
  border-radius: 6px;
  position: absolute;
`;

const ShareBlockStyled = styled(BoxAdaptive)`
  margin: 20px 0 40px;

  ${brUp('md', `
    margin: 22px 0;
  `)}
`;

export default ArticleBase;
