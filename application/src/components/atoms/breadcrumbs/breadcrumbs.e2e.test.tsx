import { shallow } from 'enzyme';
import Breadcrumbs from '.';
import getTestingElement from '~/utils/get-testing-element';

describe('works Breadcrumbs', () => {
  it('renders correctly', () => {
    const component = shallow(<Breadcrumbs />);

    expect(component).toBeTruthy();
  });
  it('has list', () => {
    const component = shallow(<Breadcrumbs />);
    const list = getTestingElement(component, 'breadcrumbs-links');

    expect(list).toBeTruthy();
  });
  it('has main link', () => {
    const component = shallow(<Breadcrumbs links={[{
      url: '/',
      name: 'Main page /'
    }]}
    />);
    const link = getTestingElement(component, 'breadcrumbs-link-level-0');

    expect(link.text()).toBe('Main page /');
    expect(link.find('a').text()).toBe('Main page /');
  });
  it('has child link text', () => {
    const testText = 'test page /';
    const component = shallow(<Breadcrumbs links={[
      {
        url: '/',
        name: 'Main page /'
      },
      {
        url: 'test',
        name: testText,
      }
    ]}
    />);
    const link = getTestingElement(component, 'breadcrumbs-link-level-1');

    expect(link.find('a').text()).toBe(testText);
  });

  it('has valid category link url', () => {
    const testUrl = 'blog/test/';
    const component = shallow(<Breadcrumbs links={[
      {
        url: '/',
        name: 'Main page /'
      },
      {
        url: 'blog/test/',
        name: 'test page /'
      }
    ]}
    />);
    const link = getTestingElement(component, 'breadcrumbs-link-level-1');

    expect(link.children().prop('href')).toBe(testUrl);
  });

  it('add slash to category link url', () => {
    const testUrl = 'blog/test/';
    const component = shallow(<Breadcrumbs links={[
      {
        url: '/',
        name: 'Main page /'
      },
      {
        url: 'blog/test',
        name: 'test page /'
      }
    ]}
    />);
    const link = getTestingElement(component, 'breadcrumbs-link-level-1');

    expect(link.children().prop('href')).toBe(testUrl);
  });
});
