/**
 * @jest-environment jsdom
 */
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import ArticleTocList from '.';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/blog/test-article'
    };
  },
}));

describe('Match snapshots ArticleTocList', () => {
  it('default', () => {
    let tree = null;
    tree = mount(
      <ArticleTocList>
        <ul>
          <li><a href="#header1">Header 1</a></li>
          <li><a href="#header2">Header 2</a></li>
        </ul>
      </ArticleTocList>
    );

    expect(toJson(tree)).toMatchSnapshot();
  });
});
