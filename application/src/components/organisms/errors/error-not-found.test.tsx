import renderer from 'react-test-renderer';
import NotFound from './error-not-found';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots ErrorNotFound', () => {
  it('404 page', () => {
    const tree = renderer.create(
      <NotFound />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
