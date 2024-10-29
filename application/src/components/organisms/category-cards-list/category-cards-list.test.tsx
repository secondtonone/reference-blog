/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import fixtureCategoryCardsList from '~/__fixtures__/category-cards-list';

import CategoryCardsList, { ICategoryCardsListProps } from '.';

const categoryCardsListProps = {
  categories: fixtureCategoryCardsList
} as ICategoryCardsListProps;

describe('Match snapshots CategoryCardsList', () => {
  let props: ICategoryCardsListProps;

  beforeEach(() => {
    props = { ...categoryCardsListProps };
  });

  it('default', () => {
    const { asFragment } = render(
      <CategoryCardsList
        {...categoryCardsListProps}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('without categories', () => {
    delete props.categories;
    const { asFragment } = render(
      <CategoryCardsList
        {...props}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should show a current title', () => {
    const title = 'The Step-by-Step Guide to Conducting a Content Audit in 2022';
    const { asFragment } = render(
      <CategoryCardsList
        {...props}
        title={title}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
