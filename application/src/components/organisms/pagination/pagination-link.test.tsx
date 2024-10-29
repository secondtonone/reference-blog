import renderer from 'react-test-renderer';
import PaginationLink from './pagination-link';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/blog/'
    };
  },
}));

describe('Match snapshot PaginationLink', () => {
  it('default', () => {
    const tree = renderer.create(
      <PaginationLink page={2}>
        {(url) => <a href={url}>Load more</a>}
      </PaginationLink>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
