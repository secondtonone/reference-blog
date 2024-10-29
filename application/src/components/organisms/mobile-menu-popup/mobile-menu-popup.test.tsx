import 'jsdom-global/register';
import renderer from 'react-test-renderer';
import MobileMenuPopup from '.';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots MobileMenuPopup', () => {
  it('default', () => {
    const tree = renderer.create(<MobileMenuPopup
      onClose={() => false}
      render={(toMain, goTo) => [
        <>
          <button type="button" onClick={toMain}>To Main</button>
          <button type="button" onClick={() => goTo(1)}>To Second</button>
        </>,
        <>
          <button type="button" onClick={toMain}>To Main</button>
          <button type="button" onClick={() => goTo(0)}>To First</button>
        </>,
      ]}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
