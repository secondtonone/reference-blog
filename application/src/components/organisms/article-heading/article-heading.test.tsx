import renderer from 'react-test-renderer';
import ArticleHeading from '.';
import fixtureAuthors from '~/__fixtures__/authors';

const contentWithText = {
  id: '1',
  title: 'The Ultimate Guide to Google Search Operators and Google Search Commands',
  preview: 'In this guide, we’ll delve deep into the basics of search operators and search commands, helping you understand how to wield these powerful tools effectively and move on to advanced commands and operators.',
  category: {
    name: 'Advanced SEO',
    slug: 'seo/advanced-seo',
    lang: 'en'
  },
  isHot: true,
  timeToRead: 5,
  previewImage: '',
  altPreviewImage: '',
  author: fixtureAuthors[0],
  url: 'article',
  publishedAt: 1597908972,
  share: 0
};

const contentWithImage = {
  id: '1',
  title: 'The Ultimate Guide to Google Search Operators and Google Search Commands',
  preview: 'In this guide, we’ll delve deep into the basics of search operators and search commands, helping you understand how to wield these powerful tools effectively and move on to advanced commands and operators.',
  category: {
    name: 'Advanced SEO',
    slug: 'seo/advanced-seo',
    lang: 'en'
  },
  isHot: true,
  timeToRead: 5,
  previewImage: '/test-image.jpg',
  altPreviewImage: 'altPreviewImage',
  author: fixtureAuthors[0],
  url: 'article',
  publishedAt: 1597908972,
  share: 0
};

describe('Match snapshots ArticleHeading', () => {
  it('with text', () => {
    const tree = renderer.create(
      <ArticleHeading
        {...contentWithText}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with image', () => {
    const tree = renderer.create(
      <ArticleHeading
        {...contentWithImage}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with text dark', () => {
    const tree = renderer.create(
      <ArticleHeading
        {...contentWithText}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with image dark', () => {
    const tree = renderer.create(
      <ArticleHeading
        {...contentWithImage}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with category', () => {
    const tree = renderer.create(
      <ArticleHeading
        {...{ ...contentWithText, withCategory: true }}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with hidden author profile', () => {
    const tree = renderer.create(
      <ArticleHeading
        {...{
          ...contentWithText,
          author: fixtureAuthors[2]
        }}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
