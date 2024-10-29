/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import fixtureSubcategoryGroupsNoPagedProps from '~/__fixtures__/subcategory-groups-no-paged';

import SubcategoryHeading, { ISubcategoryHeadingProps } from '.';

const subcategoryHeadingProps: ISubcategoryHeadingProps = (
  fixtureSubcategoryGroupsNoPagedProps as unknown);

describe('Match snapshots SubcategoryHeading', () => {
  let props: ISubcategoryHeadingProps;

  beforeEach(() => {
    props = { ...subcategoryHeadingProps };
  });

  it('default', () => {
    const { asFragment } = render(
      <SubcategoryHeading
        {...props}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('without name', () => {
    delete props.name;
    const { asFragment } = render(
      <SubcategoryHeading
        {...props}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('without description', () => {
    delete props.description;
    const { asFragment } = render(
      <SubcategoryHeading
        {...props}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('without previewImage', () => {
    delete props.previewImage;
    const { asFragment } = render(
      <SubcategoryHeading
        {...props}
      />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
