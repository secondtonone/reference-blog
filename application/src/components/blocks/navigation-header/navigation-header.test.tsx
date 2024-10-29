import renderer from 'react-test-renderer';
import NavigationHeader from '.';
import 'jsdom-global/register';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

jest.mock('~/hooks/use-with-popup', () => jest.fn(() => ({
  show: jest.fn(),
  hide: jest.fn(),
  isVisible: true,
  toggle: jest.fn()
})));

describe('Match snapshots NavigationHeader', () => {
  it('default', () => {
    const tree = renderer.create(
      <NavigationHeader />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
