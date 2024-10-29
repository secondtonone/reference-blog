import renderer from 'react-test-renderer';
import Page from '.';

describe('Match snapshot Page', () => {
  it('default', () => {
    const tree = renderer.create(<Page />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
