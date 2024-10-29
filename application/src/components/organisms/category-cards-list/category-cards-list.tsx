import styled from 'styled-components';

import { BoxAdaptive, TextContent } from '~/components/atoms';
import CategoryCard from '~/components/organisms/category-card';
import { CategoryCardViewModel } from '~/view-model';

export interface ICategoryCardsListProps {
  categories?: CategoryCardViewModel[];
  title?: string;
}

const CategoryCardsList: React.FC<ICategoryCardsListProps> = ({
  title = 'More topics in SEO',
  categories,
}) => (categories?.length > 0 ? (
  <BoxAdaptive
    data-test="category-cards-list"
    width="100%"
  >
    {
      title ? (
        <CategoryCardsListStyled>
          <TextContent
            level={3}
            fontSize={{ _: '24px', sm: '42px' }}
            lineHeight={{ _: '31.2px', sm: '50.4px' }}
            fontWeight={700}
            data-test="category-cards-list-title"
          >
            {title}
          </TextContent>
        </CategoryCardsListStyled>
      ) : null
    }
    <CategoryCardsListListStyled
      data-test="category-cards-list-list"
      display={{ _: 'flex', sm: 'block' }}
      pb={{ _: '40px', sm: 0 }}
      mt={title && { _: '39px', sm: '40px' }}
      overflowX="auto"
      minWidth={0}
    >
      {
        categories.map((category) => (
          <BoxAdaptive
            key={`category-cards-list-item-${category.slug}`}
            data-test="category-cards-list-item"
            mb={{ _: 0, sm: '40px' }}
            mr={{ _: '24px', sm: 0 }}
            minWidth={244}
          >
            <CategoryCard
              {...category}
              isHiddenImage
              inSubcategory
            />
          </BoxAdaptive>
        ))
      }
    </CategoryCardsListListStyled>
  </BoxAdaptive>
) : null);

const CategoryCardsListStyled = styled(BoxAdaptive)`
  color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.white)};
`;

const CategoryCardsListListStyled = styled(BoxAdaptive)`
  & > div:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
`;

export default CategoryCardsList;
