import styled from 'styled-components';
import {
  BoxAdaptive,
  PageSection,
  Container
} from '~/components/atoms';

import CategoryCard from '~/components/organisms/category-card';

import ArticlesList from '~/components/containers/articles-list';
import type MainCategoryViewModel from './main-category.view-model';

const MainCategory: React.FC<MainCategoryViewModel> = ({
  breakpoint,
  categoryFields,
  groups = [],
  children,
}) => (
  <>
    <PageSection>
      <ArticlesList
        unlinkedTitle
        cardsShow={3}
        articles={[]}
        breakpoint={breakpoint}
        data-test={`articles-list-on-page-${categoryFields?.name}`}
        categorySlug={categoryFields?.slug || ''}
        category={categoryFields?.name}
        caption={categoryFields?.description ?? ''}
        level={7}
        tags={groups
          .map(({ slug, name, lang }) => ({ slug, name, lang }))}
        renderEmpty={() => null}
      />
      <Container>
        <BoxAdaptive pt={{ _: 60, sm: 65 }}>
          {groups?.filter(({ pages }) => pages?.length)
            .map((group) => (
              <CardGridStyled mb={{ _: 24, sm: 20 }} key={group.slug}>
                <CategoryCard
                  {...group}
                />
              </CardGridStyled>
            ))}
        </BoxAdaptive>
      </Container>
    </PageSection>
    {children}
  </>
);

const CardGridStyled = styled(BoxAdaptive)`
  & + & {
    padding-top: 20px;
  }
`;

export default MainCategory;
