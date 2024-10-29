import renderer from 'react-test-renderer';
import RenderContainer from '.';

describe('Match snapshots RenderContainer', () => {
  it('default', () => {
    const tree = renderer.create(<RenderContainer isRendered><div className="children" /></RenderContainer>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('no render', () => {
    const tree = renderer.create(<RenderContainer><div className="children" /></RenderContainer>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
