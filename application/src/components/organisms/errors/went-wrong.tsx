import Link from 'next/link';
import Container from './container';

const WentWrong: React.FC = () => (
  <Container
    heading="Oops, something went wrong"
    caption="Page is currently unavailable."
  >
    Try to refresh this page or
    {' '}
    contact our
    {' '}
    <Link href="https://www.example.com/company/contacts/">
      <a data-test="error-link-support" target="_blank">support team</a>
    </Link>
    .
  </Container>
);

export default WentWrong;
