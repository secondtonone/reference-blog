import 'jsdom-global/register';
import renderer, { act } from 'react-test-renderer';
import Footer from '.';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots Footer', () => {
  it('default', () => {
    const tree = renderer.create(<Footer><span /></Footer>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('german version', () => {
    const tree = renderer.create(<Footer locale="de"><span /></Footer>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('in china', () => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        hostname: 'https://www.examplechina.cn/blog/'
      }
    });

    let tree;

    act(() => {
      tree = renderer.create(<Footer><span /></Footer>);
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
