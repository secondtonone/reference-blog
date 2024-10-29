/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import fixture from '~/__fixtures__/subcategory';
import { composeHrefForCategoryCard } from '~/utils';

import CategoryCard, { ICategoryCardProps } from '.';

const categoryCardProps = {
  ...fixture,
} as ICategoryCardProps;

describe('CategoryCard', () => {
  it('don\'t should show category-card-image, category-card-image-link, category-card-list', () => {
    const { queryByTestId } = render(
      <CategoryCard
        name={categoryCardProps.name}
        slug={categoryCardProps.slug}
      />,
      {}
    );

    expect(queryByTestId('category-card-image')).toBeNull();
    expect(queryByTestId('category-card-image-link')).toBeNull();
    expect(queryByTestId('category-card-list')).toBeNull();
  });

  it('should show category-card-image', () => {
    const { getByTestId, getByRole } = render(
      <CategoryCard {...categoryCardProps} />,
      {}
    );
    const imageElement = getByRole('img');
    const linkImageElement = getByTestId('category-card-image-link');

    expect(getByTestId('category-card-image')).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('data-src', categoryCardProps.previewImage);
    expect(imageElement).toHaveAttribute('alt', categoryCardProps.name);

    expect(linkImageElement).toBeInTheDocument();
    expect(linkImageElement).toHaveAttribute('href', composeHrefForCategoryCard(categoryCardProps));
    expect(linkImageElement).toHaveAttribute('title', categoryCardProps.name);
  });

  it('should show category-card-list', () => {
    const {
      getByTestId, getByRole, getAllByRole, getByText
    } = render(
      <CategoryCard {...categoryCardProps} />,
      {}
    );

    expect(getByTestId('category-card-list')).toBeInTheDocument();
    expect(getByRole('list')).toBeInTheDocument();
    expect(getAllByRole('listitem')).toHaveLength(categoryCardProps.pages.length);

    for (const page of categoryCardProps.pages) {
      expect(getByText(page.title)).toBeInTheDocument();
    }
  });
});
