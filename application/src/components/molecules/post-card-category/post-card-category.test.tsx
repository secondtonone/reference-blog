import renderer from 'react-test-renderer';
import PostCardCategory from '.';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{`svg-icon-${code}`}</span>);

describe('Match snapshots PostCardCategory', () => {
  it('default', () => {
    const tree = renderer.create(<PostCardCategory
      isHot={false}
      isLarge={false}
      category={{ name: 'name', slug: 'slug', lang: 'en' }}
      timeToRead={0}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('hot', () => {
    const tree = renderer.create(<PostCardCategory
      isHot
      isLarge={false}
      category={{ name: 'name', slug: 'slug', lang: 'en' }}
      timeToRead={0}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
