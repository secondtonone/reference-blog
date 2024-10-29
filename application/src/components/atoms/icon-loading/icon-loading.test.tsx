import renderer from 'react-test-renderer';
import IconLoading from '.';

describe('Match snapshot IconLoading', () => {
  it('default', () => {
    const tree = renderer.create(<IconLoading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
