import fixtureSubcategory from '~/__fixtures__/subcategory';
import { SubcategoryViewModel } from '~/view-model';
import { composeHrefForCategoryCard } from '~/utils';

describe('composeHrefForCategoryCard', () => {
  let props: SubcategoryViewModel;

  beforeEach(() => {
    props = { ...fixtureSubcategory } as SubcategoryViewModel;
  });

  it('with parent and slug', () => {
    expect(composeHrefForCategoryCard(props)).toBe('/blog/category/seo/what-is-seo');
  });

  it('with slug', () => {
    delete props.parent;
    expect(composeHrefForCategoryCard(props)).toBe('/blog/category/what-is-seo');
  });

  it('with parent', () => {
    delete props.slug;
    expect(composeHrefForCategoryCard(props)).toBe('/blog/category/seo/');
  });

  it('empty', () => {
    expect(composeHrefForCategoryCard()).toBe('/blog/');
  });
});
