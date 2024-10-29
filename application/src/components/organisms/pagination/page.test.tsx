import renderer from 'react-test-renderer';
import Page from './page';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/blog/',
      query: {
        page: 1
      }
    };
  },
}));

describe('Match snapshot Page', () => {
  it('default', () => {
    const tree = renderer.create(<Page number={0} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with page number', () => {
    const tree = renderer.create(<Page number={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with active state', () => {
    const tree = renderer.create(<Page selected number={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
