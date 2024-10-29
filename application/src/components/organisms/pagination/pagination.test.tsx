import renderer from 'react-test-renderer';
import Pagination from '.';

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

describe('Match snapshot Pagination', () => {
  it('default', () => {
    const tree = renderer.create(<Pagination
      onPageClick={() => jest.fn()}
      pageActive={1}
      itemsCount={100}
      perPage={10}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
