/**
 * @jest-environment jsdom
 */
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import ArticleToc from '.';

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

describe('Match snapshots ArticleToc', () => {
  it('default', () => {
    let tree = null;
    tree = mount(<ArticleToc
      headings={headings}
      isExpanded
    />);

    expect(toJson(tree)).toMatchSnapshot();
  });
});
