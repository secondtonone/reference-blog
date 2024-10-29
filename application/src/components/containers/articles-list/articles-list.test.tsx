import renderer from 'react-test-renderer';
import ArticlesList from '.';
import { defaultBreakpoint } from '~/utils/get-device-type';
import fixtureAuthors from '~/__fixtures__/authors';

jest.mock('~/components/containers/svg-icon', () => jest.fn().mockReturnValue('svg-icon-ogonek'));

const articles = [
  {
    id: 'article-1',
    title: 'The Ultimate Guide to Google Search Operators and Google Search Commands',
    preview: 'In this guide, we’ll delve deep into the basics of search operators and search commands, helping you understand how to wield these powerful tools effectively and move on to advanced commands and operators.',
    category: {
      name: 'Advanced SEO',
      slug: 'seo/advanced-seo',
      lang: 'en'
    },
    hot: true,
    timeToRead: 5,
    previewImage: 'http://placehold.it/485x280',
    altPreviewImage: 'Alt preview',
    author: fixtureAuthors[0],
    url: 'article',
    publishedAt: 1597908972,
    share: 0
  },
  {
    id: 'article-2',
    title: 'Some article text with captions and tool words and third party keys and other stuff',
    preview: 'In this guide, we’ll delve deep into the basics of search operators and search commands, helping you understand how to wield these powerful tools effectively and move on to advanced commands and operators.',
    category: {
      name: 'Marketing',
      slug: 'marketing',
      lang: 'en'
    },
    hot: false,
    timeToRead: 5,
    previewImage: 'http://placehold.it/486x280',
    author: fixtureAuthors[1],
    url: 'article',
    publishedAt: 1597908972,
    share: 0
  },
];

describe('Match snapshots ArticlesList', () => {
  it('with items', () => {
    const tree = renderer.create(
      <ArticlesList articles={articles} breakpoint={defaultBreakpoint} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
