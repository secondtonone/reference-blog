import { NextPage } from 'next';

import { SubcategoriesViewModel, ArticlesSubcategoryViewModel } from '~/view-model';
import { BoxAdaptive, Container } from '~/components/atoms';
import SubcategoryHeading from '~/components/organisms/subcategory-heading';
import ArticleTitlesList from '~/components/containers/article-titles-list';
import ArticleCardsList from '~/components/containers/article-cards-list';
import CategoryCardsList from '~/components/organisms/category-cards-list';
import { IArticleCardProps } from '~/components/organisms/article-card';

export interface ISubcategoryGroupsNoPagedProps {
  id?: number;
  name?: string;
  description?: string;
  previewImage?: string;
  pages?: ArticlesSubcategoryViewModel;
  articles?: IArticleCardProps[];
  categories?: SubcategoriesViewModel;
}

const SubcategoryGroupsNoPaged: NextPage<ISubcategoryGroupsNoPagedProps> = ({
  name,
  description,
  previewImage,
  pages,
  articles,
  categories
}) => (
  <Container>
    <BoxAdaptive
      data-test="subcategory-groups-no-paged"
      pb={{ _: '220px', xm: '120px' }}
    >
      <BoxAdaptive
        data-test="subcategory-groups-no-paged-subcategory-heading"
      >
        <SubcategoryHeading
          name={name}
          description={description}
          previewImage={previewImage}
        />
      </BoxAdaptive>
      {
        pages?.length > 0 && (
          <BoxAdaptive
            data-test="subcategory-groups-no-paged-pages"
            mt={{ _: '40px', sm: '60px' }}
            mx={{ _: '-15px', x: '-24px', xm: 0 }}
          >
            <ArticleTitlesList
              pages={pages}
            />
          </BoxAdaptive>
        )
      }
      {
        articles?.length > 0 && (
          <BoxAdaptive
            data-test="subcategory-groups-no-paged-articles"
            mt={{ _: '80px', sm: '100px' }}
          >
            <ArticleCardsList
              articles={articles}
            />
          </BoxAdaptive>
        )
      }
      {
        categories?.length > 0 && (
          <BoxAdaptive
            data-test="subcategory-groups-no-paged-categories"
            mt={{ _: '60px', sm: '120px' }}
          >
            <CategoryCardsList
              categories={categories}
            />
          </BoxAdaptive>
        )
      }
    </BoxAdaptive>
  </Container>
);

export default SubcategoryGroupsNoPaged;
