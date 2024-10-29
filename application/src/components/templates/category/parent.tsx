import SubscriptionBlock from '~/components/containers/subscription-block/block-with-text';
import {
  BoxAdaptive, Container,
} from '~/components/atoms';

import CategoryPage from './category';

import PromotionWidget from '~/components/organisms/promotion-widget';
import promotedMaterial from '~/constants/promoted-material';
import { PodcastViewModel } from '~/view-model';
import MoreArticles from './more-articles';
import type CategoryPageViewModel from './category-page.view-model';

type Props = CategoryPageViewModel & {
  podcast?: PodcastViewModel,
  pagedLimit?: number
}

const CategoryParent: React.FC<Props> = ({
  breakpoint,
  categoryFields,
  articlesTop,
  articles,
  pagedLimit,
  subdomain,
  hideSubscribe,
  hidePromo
}) => (
  <>
    <BoxAdaptive pt={{ _: 40 }} pb={{ _: 160, sm: 200, lg: 120 }}>
      <CategoryPage
        breakpoint={breakpoint}
        articlesTop={articlesTop}
        categoryFields={categoryFields}
        slug={categoryFields?.slug || ''}
        tags={categoryFields?.children}
        caption={categoryFields?.description ?? ''}
        data-test={`articles-list-on-page-${categoryFields?.name}`}
      >
        {!hidePromo ? (
          <Container>
            <PromotionWidget {...promotedMaterial[0]} />
          </Container>
        ) : null}
        <BoxAdaptive
          pt={hidePromo ? 0 : { _: 20, sm: 40 }}
          mt={hidePromo ? { _: -60, sm: -100 } : 0}
        >
          <MoreArticles
            breakpoint={breakpoint}
            articles={articles}
            categoryId={categoryFields?.id}
            pagedLimit={pagedLimit}
            subdomain={subdomain}
          />
        </BoxAdaptive>
      </CategoryPage>
    </BoxAdaptive>
    {!hideSubscribe && (
      <SubscriptionBlock />
    )}
  </>
);

export default CategoryParent;
