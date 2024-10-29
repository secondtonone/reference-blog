import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import SubscriptionBlock from '~/components/containers/subscription-block';
import CategoriesList from '~/components/organisms/categories-list';
import {
  BoxAdaptive,
  Container,
  PageSection,
  TextContent
} from '~/components/atoms';

import CategoryPage from './category';
import MoreArticles from '~/components/templates/category/more-articles';
import { useClickHandling } from '~/hooks';
import { sendAnalyticEvent } from '~/analytics';

import type CategoryPageViewModel from './category-page.view-model';

const TrialBlock = dynamic(import('~/components/containers/trial-block/block-default'), { ssr: false });

const SubcategoryPage: NextPage<CategoryPageViewModel> = ({
  breakpoint,
  categoryFields,
  articlesTop,
  articles,
  pagedLimit,
  subdomain,
  hideSubscribe = false
}) => {
  const { isPhone } = breakpoint;

  useClickHandling('div[data-test^="articles-list-on-page"]', (event) => {
    const target = event.target as HTMLAnchorElement;

    if (target.tagName === 'IMG' || target.dataset.test === 'title') {
      sendAnalyticEvent('category-sub-click-to-post');
    }
  });

  const categoryChildren = categoryFields?.parent?.children
    ? Object
      .values(categoryFields?.parent?.children)
      .filter(category => category.id !== categoryFields.id) : [];

  return (
    <>
      <BoxAdaptive pt={{ _: 40 }} pb={{ _: 100, lg: 20 }}>
        <CategoryPage
          breakpoint={breakpoint}
          articlesTop={articlesTop}
          categoryFields={categoryFields}
          slug={categoryFields?.slug || ''}
          tags={categoryFields?.children}
          caption={categoryFields?.description ?? ''}
          data-test={`articles-list-on-page-${categoryFields?.name}`}
        >
          {!hideSubscribe && (
            <PageSection>
              <SubscriptionBlock.WithText />
            </PageSection>
          )}
          <PageSection
            mt={hideSubscribe ? { _: -60, sm: -100 } : 0}
          >
            <MoreArticles
              articles={articles}
              breakpoint={breakpoint}
              categoryId={categoryFields.id}
              pagedLimit={pagedLimit}
              subdomain={subdomain}
            />
            {categoryFields?.parent && categoryChildren.length > 0 && (
              <Container>
                <BoxAdaptive mt={{ _: 60, sm: 80 }}>
                  <TextContent
                    fontSize={{ _: 9, sm: 8 }}
                    accentFont
                    fontWeight={{ _: 'accent' }}
                  >
                    More about
                    {' '}
                    {categoryFields?.parent?.name}
                  </TextContent>
                  {categoryChildren.length > 0 && (
                    <BoxAdaptive mt={{ _: 3 }}>
                      <CategoriesList
                        slug={categoryFields?.parent?.slug}
                        links={categoryChildren}
                        isPhone={isPhone}
                      />
                    </BoxAdaptive>
                  )}
                </BoxAdaptive>
              </Container>
            )}
          </PageSection>
        </CategoryPage>
      </BoxAdaptive>
      <TrialBlock />
    </>
  );
};

export default SubcategoryPage;
