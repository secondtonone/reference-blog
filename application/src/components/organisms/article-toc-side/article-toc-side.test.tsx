/**
 * @jest-environment jsdom
 */
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import ArticleTocSide from '.';

const headings = [
  {
    textContent: 'Lead Generation Strategies for Marketing Agencies',
    id: 'lead-generation-strategies-for-marketing-agencies',
    tagName: 'H2'
  },
  {
    textContent: 'Social Media',
    id: 'social-media',
    tagName: 'H3'
  },
  {
    textContent: 'LinkedIn',
    id: 'linkedin',
    tagName: 'H4'
  },
  {
    textContent: 'Chatbots',
    id: 'email',
    tagName: 'H2'
  }
];

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/blog/test-article'
    };
  },
}));

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null
});

global.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

jest.spyOn(document, 'querySelector').mockImplementation(() => ({
  // @ts-ignore
  querySelectorAll: () => headings
}));

describe('Match snapshots ArticleTocSide', () => {
  it('default', () => {
    let tree = null;
    tree = mount(<ArticleTocSide
      isEnabled
      width={193}
      levels={['h2']}
    />);

    expect(toJson(tree)).toMatchSnapshot();
  });
});
