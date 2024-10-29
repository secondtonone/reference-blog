/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import fixtureSubcategoryGroupsNoPagedProps from '~/__fixtures__/subcategory-groups-no-paged';

import SubcategoryGroupsNoPaged, { ISubcategoryGroupsNoPagedProps } from '.';

const subcategoryGroupsNoPagedProps: ISubcategoryGroupsNoPagedProps = (
  fixtureSubcategoryGroupsNoPagedProps as unknown);

describe('Subcategory', () => {
  it('default', () => {
    const { getByTestId } = render(
      <SubcategoryGroupsNoPaged
        {...subcategoryGroupsNoPagedProps}
      />,
      {}
    );

    expect(getByTestId('subcategory-groups-no-paged')).toBeInTheDocument();
    expect(getByTestId('subcategory-groups-no-paged-subcategory-heading')).toBeInTheDocument();
    expect(getByTestId('subcategory-groups-no-paged-pages')).toBeInTheDocument();
    expect(getByTestId('subcategory-groups-no-paged-articles')).toBeInTheDocument();
    expect(getByTestId('subcategory-groups-no-paged-categories')).toBeInTheDocument();
  });

  it('should show title', () => {
    const { getByTestId } = render(
      <SubcategoryGroupsNoPaged
        {...subcategoryGroupsNoPagedProps}
      />,
      {}
    );

    expect(getByTestId('subcategory-groups-no-paged-subcategory-heading'))
      .toHaveTextContent(subcategoryGroupsNoPagedProps.name);
  });

  it('should show title', () => {
    const { getByTestId, getByRole } = render(
      <SubcategoryGroupsNoPaged
        {...subcategoryGroupsNoPagedProps}
      />,
      {}
    );

    const nameElement = getByRole('heading', { level: 1 });
    const { name } = subcategoryGroupsNoPagedProps;

    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveTextContent(name);
    expect(getByTestId('subcategory-groups-no-paged-subcategory-heading'))
      .toHaveTextContent(name);
  });

  it('should show description', () => {
    const { getByTestId } = render(
      <SubcategoryGroupsNoPaged
        {...subcategoryGroupsNoPagedProps}
      />,
      {}
    );

    expect(getByTestId('subcategory-groups-no-paged-subcategory-heading'))
      .toHaveTextContent(subcategoryGroupsNoPagedProps.description);
  });

  it('should show pages', () => {
    const { getByTestId } = render(
      <SubcategoryGroupsNoPaged
        {...subcategoryGroupsNoPagedProps}
      />,
      {}
    );

    const pagesElement = getByTestId('subcategory-groups-no-paged-pages');

    expect(pagesElement).toBeInTheDocument();
    expect(pagesElement).toHaveTextContent('Start explore with');

    const { pages } = subcategoryGroupsNoPagedProps;

    for (const page of pages) {
      expect(pagesElement).toHaveTextContent(page.title);
    }
  });

  it('should show articles', () => {
    const { getByTestId } = render(
      <SubcategoryGroupsNoPaged
        {...subcategoryGroupsNoPagedProps}
      />,
      {}
    );

    const articlesBlockElement = getByTestId('subcategory-groups-no-paged-articles');

    expect(articlesBlockElement).toBeInTheDocument();

    const { articles } = subcategoryGroupsNoPagedProps;

    for (const article of articles) {
      expect(articlesBlockElement).toHaveTextContent(article.title);
    }
  });

  it('should show categories', () => {
    const { getByTestId } = render(
      <SubcategoryGroupsNoPaged
        {...subcategoryGroupsNoPagedProps}
      />,
      {}
    );

    const categoriesBlockElement = getByTestId('subcategory-groups-no-paged-categories');

    expect(categoriesBlockElement).toHaveTextContent('More topics in SEO');
    expect(categoriesBlockElement).toBeInTheDocument();

    const { categories } = subcategoryGroupsNoPagedProps;

    for (const category of categories) {
      expect(categoriesBlockElement).toHaveTextContent(category.name);
    }
  });
});
