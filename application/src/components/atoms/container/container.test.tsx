import renderer from 'react-test-renderer';
import Container from '.';

describe('Match snapshots Container', () => {
  it('with children', () => {
    const tree = renderer.create(<Container><div className="children" /></Container>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
