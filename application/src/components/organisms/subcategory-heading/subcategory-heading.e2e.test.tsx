/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import fixtureSubcategoryGroupsNoPagedProps from '~/__fixtures__/subcategory-groups-no-paged';

import SubcategoryHeading, { ISubcategoryHeadingProps } from '.';

const subcategoryHeadingProps: ISubcategoryHeadingProps = (
  fixtureSubcategoryGroupsNoPagedProps as unknown);

describe('SubcategoryHeading', () => {
  it('default', () => {
    const { getByTestId } = render(
      <SubcategoryHeading
        {...subcategoryHeadingProps}
      />,
      {}
    );

    expect(getByTestId('subcategory-heading')).toBeInTheDocument();
    expect(getByTestId('subcategory-heading-name')).toBeInTheDocument();
    expect(getByTestId('subcategory-heading-description')).toBeInTheDocument();
    expect(getByTestId('subcategory-heading-image')).toBeInTheDocument();
  });

  it('should show name', () => {
    const { getByText } = render(
      <SubcategoryHeading
        {...subcategoryHeadingProps}
      />,
      {}
    );

    expect(getByText(subcategoryHeadingProps.name)).toBeInTheDocument();
  });

  it('should show description', () => {
    const { getByText } = render(
      <SubcategoryHeading
        {...subcategoryHeadingProps}
      />,
      {}
    );

    expect(getByText(subcategoryHeadingProps.description)).toBeInTheDocument();
  });

  it('should show image', () => {
    const { getByRole } = render(
      <SubcategoryHeading
        {...subcategoryHeadingProps}
      />,
      {}
    );
    const imageElement = getByRole('img');
    const { name, previewImage } = subcategoryHeadingProps;
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('data-src', previewImage);
    expect(imageElement).toHaveAttribute('alt', name);
  });
});
