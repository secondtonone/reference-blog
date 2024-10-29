import { shallow } from 'enzyme';
import ArticleHeading from '.';
import fixtureAuthors from '~/__fixtures__/authors';
import getTestingElement from '~/utils/get-testing-element';
import getDate from '~/utils/get-date';

describe('ArticleHeading works correctly', () => {
  let wrapper;
  let content;

  beforeEach(() => {
    content = {
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
      previewImage: 'blog/banners/1.svg',
      author: fixtureAuthors[0],
      url: '/article',
      publishedAt: 1597908972,
      share: 0,
      background: '#6EDBFF',
      withCategory: true
    };

    wrapper = shallow(
      <ArticleHeading
        {...content}
      />
    );
  });

  it('renders', () => {
    expect(wrapper).toBeTruthy();
  });

  it('from props background', () => {
    const backgroundProp = wrapper.prop('background');
    expect(backgroundProp).toBe(content.background);
  });

  it('has element heading', () => {
    const headingElement = getTestingElement(wrapper, 'heading-text');
    expect(headingElement).toBeTruthy();
    expect(headingElement.text()).toBe(content.title);
    expect(headingElement.prop('children')).toBe(content.title);
  });

  it('has author name', () => {
    const authorElement = getTestingElement(wrapper, 'author');
    expect(authorElement).toBeTruthy();
    expect(authorElement.find('a').text()).toBe(content.author.name);
  });

  it('has time to read', () => {
    const timeToReadElement = getTestingElement(wrapper, 'time-to-read');
    expect(timeToReadElement).toBeTruthy();
    expect(timeToReadElement.text()).toBe(`${content.timeToRead} min read`);
  });

  it('has publish date', () => {
    const dateElement = getTestingElement(wrapper, 'date');
    expect(dateElement).toBeTruthy();
    expect(dateElement.text()).toBe(getDate(content.publishedAt));
  });

  it('has category', () => {
    const categoryElement = getTestingElement(wrapper, 'category');
    expect(categoryElement).toBeTruthy();
    expect(categoryElement.children().prop('href')).toBe(`/blog/category/${content.category.slug}`);
  });
});
