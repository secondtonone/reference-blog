import { shallow } from 'enzyme';
import ArticlePreview from '.';
import getTestingElement from '~/utils/get-testing-element';

describe('ArticlePreview works correctly', () => {
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
      author: {
        id: 1,
        name: 'Olga Andrienko',
        alias: 'olga-andrienko'
      },
      url: '/article',
      publishedAt: 1597908972,
      share: 0,
      background: '#6EDBFF',
      breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
    };

    wrapper = shallow(
      <ArticlePreview
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
    const headingElement = getTestingElement(wrapper, 'heading-link');
    expect(headingElement.text()).toBe(content.title);
  });

  it('has element image link', () => {
    const headingElement = getTestingElement(wrapper, 'heading-image-link');
    expect(headingElement).toBeTruthy();
  });
});
