/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import BlogNavbar from '.';
import fixtureCategories from '~/__fixtures__/categories-tree';

describe('Match snapshots BlogNavbar', () => {
  it('default', () => {
    const { asFragment } = render(<BlogNavbar categoriesTree={fixtureCategories} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('hideSubscribe', () => {
    const { asFragment } = render(<BlogNavbar hideSubscribe />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('leveled categories', () => {
    const { asFragment } = render(<BlogNavbar
      hideSubscribe
      categoriesTree={fixtureCategories}
      isCategoriesTreeLeveled
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
