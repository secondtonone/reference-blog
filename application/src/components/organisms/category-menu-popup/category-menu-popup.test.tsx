/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';

import CategoryMenuPopup from '.';
import fixtureCategories from '~/__fixtures__/categories-tree';

jest.mock('~/components/containers/svg-icon', () => jest.fn().mockReturnValue('svg-icon'));

jest.mock('~/hooks/use-with-popup', () => jest.fn(() => ({
  show: jest.fn(),
  hide: jest.fn(),
  isVisible: false,
  toggle: jest.fn()
})));

describe('Match snapshots CategoryMenuPopup', () => {
  it('default', () => {
    const tree = renderer.create(
      <CategoryMenuPopup categoriesList={fixtureCategories} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
