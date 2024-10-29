import renderer from 'react-test-renderer';
import PostCardContent from '.';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots PostCardContent', () => {
  it('default', () => {
    const tree = renderer.create(
      <PostCardContent
        category={{ name: 'category', lang: 'en', slug: 'slug' }}
        url="url"
        title="title"
        preview="preview text"
        publishedAt={123}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('timeToRead', () => {
    const tree = renderer.create(
      <PostCardContent
        timeToRead={1}
        category={{ name: 'category', lang: 'en', slug: 'slug' }}
        url="url"
        title="title"
        preview="preview text"
        publishedAt={123}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('horizontal', () => {
    const tree = renderer.create(
      <PostCardContent
        category={{ name: 'category', lang: 'en', slug: 'slug' }}
        horizontal
        url="url"
        title="title"
        preview="preview text"
        publishedAt={123}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('isLarge', () => {
    const tree = renderer.create(
      <PostCardContent
        category={{ name: 'category', lang: 'en', slug: 'slug' }}
        isLarge
        url="url"
        title="title"
        preview="preview text"
        publishedAt={123}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with hidden author', () => {
    const tree = renderer.create(
      <PostCardContent
        category={{ name: 'category', lang: 'en', slug: 'slug' }}
        isLarge
        url="url"
        title="title"
        preview="preview text"
        publishedAt={123}
        author={{
          isPublic: false,
          id: 0,
          name: 'name',
          email: 'email',
          photo: 'photo',
          position: 'position',
          company: 'company',
          bio: 'bio',
          socials: {}
        }}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with link by falsy prop', () => {
    const tree = renderer.create(
      <PostCardContent
        category={{ name: 'category', lang: 'en', slug: 'slug' }}
        isLarge
        url="url"
        title="title"
        preview="preview text"
        publishedAt={123}
        author={{
          id: 666,
          name: 'Mr. Hidden',
          alias: 'hidden-profile',
          email: 'example@example.com',
          position: 'Super secret specialist',
          company: 'Nope',
          bio: 'Unknown',
          photo: 'https://storage.googleapis.com/blog-rc/testing/user/ivan.jpg',
          socials: {
            webSite: 'https://example.com',
            twitter: '@hello',
            facebook: '100009766004824-m3a/',
            instagram: 'nothing-to-do-here',
            linkedin: 'https://linked.kek/',
          },
          isPublic: false
        }}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('without isPublic prop', () => {
    const tree = renderer.create(
      <PostCardContent
        category={{ name: 'category', lang: 'en', slug: 'slug' }}
        isLarge
        url="url"
        title="title"
        preview="preview text"
        publishedAt={123}
        author={{
          id: 666,
          name: 'Mr. Hidden',
          alias: 'hidden-profile',
          email: 'example@example.com',
          position: 'Super secret specialist',
          company: 'Nope',
          bio: 'Unknown',
          photo: 'https://storage.googleapis.com/blog/testing/user/ivan.jpg',
          socials: {
            webSite: 'https://example.com',
            twitter: '@hello',
            facebook: '100009766004824-m3a/',
            instagram: 'nothing-to-do-here',
            linkedin: 'https://linked.kek/',
          }
        }}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
