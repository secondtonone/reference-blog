import renderer from 'react-test-renderer';
import Hint from '.';

describe('Match snapshot Hint', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(<Hint>hint</Hint>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
