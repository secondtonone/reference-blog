/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';
import HeaderPopup from '.';

jest.mock('~/components/containers/svg-icon', () => jest.fn().mockReturnValue('svg-icon'));

jest.mock('~hooks/use-with-popup', () => jest.fn(() => ({
  show: jest.fn(),
  hide: jest.fn(),
  isVisible: false,
  toggle: jest.fn()
})));

describe('Match snapshots HeaderPopup', () => {
  it('default', () => {
    const tree = renderer.create(
      <HeaderPopup name="content">Content</HeaderPopup>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
