import renderer from 'react-test-renderer';
import ArticlePreview from '.';
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
  hot: true,
  timeToRead: 5,
  previewImage: '',
  author: fixtureAuthors[0],
  url: 'article',
  publishedAt: 1597908972,
  share: 0,
  background: 'orangeIllust',
  breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
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
  hot: true,
  timeToRead: 5,
  previewImage: '/test-image.jpg',
  author: fixtureAuthors[0],
  url: 'article',
  publishedAt: 1597908972,
  share: 0,
  background: 'orangeIllust',
  breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
};

describe('Match snapshots ArticlePreview', () => {
  it('with text', () => {
    const tree = renderer.create(
      <ArticlePreview
        {...contentWithText}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with image', () => {
    const tree = renderer.create(
      <ArticlePreview
        {...contentWithImage}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with text dark', () => {
    const tree = renderer.create(
      <ArticlePreview
        {...contentWithText}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with image dark', () => {
    const tree = renderer.create(
      <ArticlePreview
        {...contentWithImage}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with preview', () => {
    const tree = renderer.create(
      <ArticlePreview
        withPreview
        {...contentWithImage}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('in card', () => {
    const tree = renderer.create(
      <ArticlePreview
        withPreview
        card
        {...contentWithImage}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('horizontal layout', () => {
    const tree = renderer.create(
      <ArticlePreview
        isHorizontal
        {...contentWithImage}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
