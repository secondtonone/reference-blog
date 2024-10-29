import { shallow } from 'enzyme';
import Link from 'next/link';
import ErrorNotFound from '.';
import getTestingElement from '~/utils/get-testing-element';

describe('ErrorNotFound works correctly', () => {
  const linkText = {
    main: {
      url: '/blog',
      text: 'homepage'
    },
    support: {
      url: 'https://www.example.com/company/contacts/',
      text: 'support team'
    },
  };

  const content = {
    heading: 'Heading',
    caption: 'We can\'t find the page you\'re looking for.',
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ErrorNotFound
        {...content}
      >
        You can visit our&nbsp;
        <Link href={linkText.main.url}>
          <a data-test="error-link-main">{linkText.main.text}</a>
        </Link>
        {' '}
        or contact our
        {' '}
        <Link href={linkText.support.url}>
          <a data-test="error-link-support" target="_blank">{linkText.support.text}</a>
        </Link>
        .
      </ErrorNotFound>
    );
  });

  it('renders', () => {
    expect(wrapper).toBeTruthy();
  });

  it('has element heading', () => {
    const headingElement = getTestingElement(wrapper, 'error-heading');
    expect(headingElement.children().text()).toBe(content.heading);
  });

  it('has element caption', () => {
    const captionElement = getTestingElement(wrapper, 'error-caption');
    expect(captionElement.children().text()).toBe(content.caption);
  });

  it('has link to main page', () => {
    const mainLinkElement = getTestingElement(wrapper, 'error-link-main');

    expect(mainLinkElement.parent().prop('href')).toBe(linkText.main.url);
    expect(mainLinkElement.text()).toBe(linkText.main.text);
    expect(mainLinkElement).toBeTruthy();
  });

  it('has link to support page', () => {
    const supportLinkElement = getTestingElement(wrapper, 'error-link-support');

    expect(supportLinkElement.parent().prop('href')).toBe(linkText.support.url);
    expect(supportLinkElement.text()).toBe(linkText.support.text);
    expect(supportLinkElement).toBeTruthy();
  });
});
