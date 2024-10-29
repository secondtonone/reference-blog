import renderer from 'react-test-renderer';
import PageError from './page-error';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots PageError', () => {
  it('500 page', () => {
    const tree = renderer.create(
      <PageError
        heading="500 Internal Server Error"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
