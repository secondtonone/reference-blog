import Link from 'next/link';
import Errors from '~/components/organisms/errors';

export default {
  title: 'Organisms/errors',
};

export const WithHeading = () => <Errors.Container heading="Sorry" />;

WithHeading.storyName = 'with heading';

export const _500Page = () => <Errors.PageError heading="500 Internal Server Error" />;

_500Page.storyName = '500 page';

export const _404Page = () => <Errors.NotFound />;

_404Page.storyName = '404 page';

export const MaintenancePage = () => <Errors.Maintenance />;

MaintenancePage.storyName = 'Maintenance page';

export const WithCaption = () => (
  <Errors.Container
    heading="Problem with long textual strings and some dots..."
    caption="We can't find the page you're looking for."
  />
);

WithCaption.storyName = 'with caption';

export const WithContent = () => (
  <Errors.Container heading="Lunch time" caption="We can't find the page you're looking for.">
    You can visit our&nbsp;
    <Link href="/blog">
      <a data-test="error-link-main">homepage</a>
    </Link>{' '}
    or contact our{' '}
    <Link href="https://www.example.com/company/contacts/">
      <a data-test="error-link-support" target="_blank" rel="noopener">
        support team
      </a>
    </Link>
    .
  </Errors.Container>
);

WithContent.storyName = 'with content';

export const WithLogo = () => (
  <Errors.Container
    withLogo
    heading="Lunch time"
    caption="We can't find the page you're looking for."
  >
    You can visit our&nbsp;
    <Link href="/blog">
      <a data-test="error-link-main">homepage</a>
    </Link>{' '}
    or contact our{' '}
    <Link href="https://www.example.com/company/contacts/">
      <a data-test="error-link-support" target="_blank" rel="noopener">
        support team
      </a>
    </Link>
    .
  </Errors.Container>
);

WithLogo.storyName = 'with logo';
