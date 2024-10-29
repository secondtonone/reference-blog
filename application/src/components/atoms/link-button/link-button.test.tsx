import renderer from 'react-test-renderer';
import LinkButton from '.';

describe('Match snapshot LinkButton', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(<LinkButton>link like button</LinkButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
