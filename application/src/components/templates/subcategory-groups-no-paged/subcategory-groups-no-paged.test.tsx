/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import fixtureSubcategoryGroupsNoPagedProps from '~/__fixtures__/subcategory-groups-no-paged';

import SubcategoryGroupsNoPaged, { ISubcategoryGroupsNoPagedProps } from '.';

const subcategoryGroupsNoPagedProps: ISubcategoryGroupsNoPagedProps = (
  fixtureSubcategoryGroupsNoPagedProps as unknown);

describe('Match snapshots Subcategory', () => {
  let props: ISubcategoryGroupsNoPagedProps;

  beforeEach(() => {
    props = { ...subcategoryGroupsNoPagedProps };
  });

  it('default', () => {
    const { asFragment } = render(
      <SubcategoryGroupsNoPaged
        {...props}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('without pages', () => {
    delete props.pages;
    const { asFragment } = render(
      <SubcategoryGroupsNoPaged
        {...props}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('without articles', () => {
    delete props.articles;
    const { asFragment } = render(
      <SubcategoryGroupsNoPaged
        {...props}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('without categories', () => {
    delete props.categories;
    const { asFragment } = render(
      <SubcategoryGroupsNoPaged
        {...props}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
