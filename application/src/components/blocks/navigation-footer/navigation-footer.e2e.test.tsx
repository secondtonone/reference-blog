import 'jsdom-global/register';
import { shallow, mount } from 'enzyme';
import Footer from '.';
import getTestingElement from '~/utils/get-testing-element';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('works Footer', () => {
  it('renders correctly', () => {
    const component = shallow(<Footer><span /></Footer>);

    expect(component).toBeTruthy();
  });

  it('renders in china', () => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        hostname: 'https://www.examplechina.cn/blog/'
      }
    });

    const testText = '上海勤凯信息科技有限公司网站 沪ICP备09000675号-8';
    const textLink = 'http://www.beian.miit.gov.cn';

    const component = mount(<Footer><span /></Footer>);

    const cert = getTestingElement(component, 'example-china-cert');

    expect(cert.text()).toBe(testText);
    expect(cert.find('a').props().href).toEqual(textLink);
    expect(component).toBeTruthy();
  });
});
