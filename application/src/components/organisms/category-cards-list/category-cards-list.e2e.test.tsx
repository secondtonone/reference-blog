/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import fixtureCategoryCardsList from '~/__fixtures__/category-cards-list';
import { composeHrefForCategoryCard } from '~/utils';

import CategoryCardsList, { ICategoryCardsListProps } from '.';

const categoryCardsListProps = {
  categories: fixtureCategoryCardsList,
} as ICategoryCardsListProps;

describe('CategoryCardsList', () => {
  it('default', () => {
    const { getByTestId } = render(
      <CategoryCardsList
        {...categoryCardsListProps}
      />,
      {}
    );

    expect(getByTestId('category-cards-list')).toBeInTheDocument();
    expect(getByTestId('category-cards-list-title')).toBeInTheDocument();
    expect(getByTestId('category-cards-list-list')).toBeInTheDocument();
  });

  it('should show current title', () => {
    const title = 'The Step-by-Step Guide to Conducting a Content Audit in 2022';
    const props = { ...categoryCardsListProps, title };
    const { getByText } = render(
      <CategoryCardsList
        {...props}
      />,
      {}
    );

    expect(getByText(title)).toBeInTheDocument();
  });

  it('should show list', () => {
    const { getAllByTestId } = render(
      <CategoryCardsList
        {...categoryCardsListProps}
      />,
      {}
    );

    const { categories } = categoryCardsListProps;

    expect(getAllByTestId('category-cards-list-item')).toHaveLength(categories.length);
  });

  it('should show title', () => {
    const { getByText } = render(
      <CategoryCardsList
        {...categoryCardsListProps}
      />,
      {}
    );

    const { categories } = categoryCardsListProps;

    for (const category of categories) {
      expect(getByText(category.name)).toBeInTheDocument();
    }
  });

  it('should show image', () => {
    const { getAllByRole } = render(
      <CategoryCardsList
        {...categoryCardsListProps}
      />,
      {}
    );

    const images = getAllByRole('img');

    const { categories } = categoryCardsListProps;

    categories.forEach((category, index) => {
      const image = images[index];
      expect(image).toHaveAttribute('data-src', category.previewImage);
      expect(image).toHaveAttribute('alt', category.name);
    });
  });

  it('should show links', () => {
    const { getByText } = render(
      <CategoryCardsList
        {...categoryCardsListProps}
      />,
      {}
    );

    const { categories } = categoryCardsListProps;

    categories.forEach((category) => {
      const { name } = category;

      const titleElement = getByText(name);

      expect(titleElement).toBeInTheDocument();
      expect(titleElement).toHaveAttribute('href', composeHrefForCategoryCard(category));
      expect(titleElement).toHaveAttribute('title', name);
      expect(titleElement).toHaveTextContent(name);
    });
  });
});
