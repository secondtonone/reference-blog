import renderer from 'react-test-renderer';
import Columns from '.';

describe('Match snapshots Columns', () => {
  it('with column', () => {
    const tree = renderer.create(<Columns><div className="column" /></Columns>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
