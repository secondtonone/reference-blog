import renderer from 'react-test-renderer';
import CategoriesTree from '.';
import fixtureCategories from '~/__fixtures__/categories-tree';

describe('Match snapshots CategoriesTree', () => {
  it('default', () => {
    const tree = renderer.create(
      <CategoriesTree tree={fixtureCategories} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('leveled', () => {
    const tree = renderer.create(
      <CategoriesTree tree={fixtureCategories} leveled />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
