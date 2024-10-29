import { NextPage } from 'next';
import ArticlesList from '~/components/containers/articles-list';
import ArticlesEmpty from '~/components/containers/articles-empty';

import {
  PageSection,
} from '~/components/atoms';

import type CategoryPageViewModel from './category-page.view-model';

interface PageProps extends CategoryPageViewModel {
  'data-test': string
  slug?: string
  caption?: string
}

const CategoryPage: NextPage<PageProps> = ({
  breakpoint,
  categoryFields,
  articlesTop,
  'data-test': code,
  tags,
  children,
  slug,
  caption
}) => (
  <>
    <PageSection>
      <ArticlesList
        unlinkedTitle
        cardsShow={3}
        largeCount={4}
        articles={articlesTop}
        breakpoint={breakpoint}
        data-test={code}
        categorySlug={slug}
        category={categoryFields?.name}
        caption={caption}
        tags={tags}
        level={7}
        renderEmpty={() => <ArticlesEmpty withAction />}
      />
    </PageSection>
    {children}
  </>
);

export default CategoryPage;
