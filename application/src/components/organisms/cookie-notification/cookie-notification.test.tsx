import renderer from 'react-test-renderer';
import CookieNotification from '.';
import 'jsdom-global/register';

describe('Match snapshots CookieNotification', () => {
  it('hidden', () => {
    const tree = renderer.create(
      <CookieNotification onHideCookieClick={jest.fn} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('visible', () => {
    const tree = renderer.create(
      <CookieNotification isVisible onHideCookieClick={jest.fn} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
