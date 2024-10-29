import renderer from 'react-test-renderer';
import exampleNavbar from './example-navbar';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('exampleNavbar works', () => {
  it('default', () => {
    const tree = renderer.create(<exampleNavbar />);

    expect(tree).toMatchSnapshot();
  });
});
