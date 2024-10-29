/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import fixture from '~/__fixtures__/subcategory';

import CategoryCard, { ICategoryCardProps } from '.';

const categoryCardProps = {
  ...fixture,
} as ICategoryCardProps;

describe('Match snapshots CategoryCard', () => {
  it('default', () => {
    const { asFragment } = render(
      <CategoryCard
        {...categoryCardProps}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('without pages', () => {
    const { asFragment } = render(
      <CategoryCard
        name={categoryCardProps.name}
        slug={categoryCardProps.slug}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('empty', () => {
    const { asFragment } = render(
      <CategoryCard />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
