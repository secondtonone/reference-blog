import renderer from 'react-test-renderer';
import Spinner from '.';

describe('Match snapshot Spinner', () => {
  it('default', () => {
    const tree = renderer.create(<Spinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
