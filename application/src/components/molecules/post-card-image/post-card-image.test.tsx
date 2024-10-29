import renderer from 'react-test-renderer';
import PostCardImage from '.';

describe('Match snapshots PostCardContent', () => {
  it('default', () => {
    const tree = renderer.create(<PostCardImage
      url="url"
      previewImage="img"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('horizontal', () => {
    const tree = renderer.create(<PostCardImage
      url="url"
      previewImage="img"
      horizontal
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('isLarge', () => {
    const tree = renderer.create(<PostCardImage
      url="url"
      previewImage="img"
      isLarge
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
