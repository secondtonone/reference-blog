import renderer from 'react-test-renderer';
import LinkText from '.';

describe('Match snapshot LinkText', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(<LinkText href="#">link</LinkText>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
