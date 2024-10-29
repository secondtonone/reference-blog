import Link from 'next/link';
import styled from 'styled-components';
import Container from './container';

const ErrorNotFound: React.FC = () => (
  <Container
    heading="Sorry"
    caption="We can't find the page you're looking for."
  >
    <NotFoundStyled>
      You can visit our&nbsp;
      <Link href="/blog">
        <a data-test="error-link-main">homepage</a>
      </Link>
      {' '}
      or contact our
      {' '}
      <Link href="mailto:mail@example.com?subject=example Blog">
        <a data-test="error-link-support" target="_blank">support team</a>
      </Link>
      .
    </NotFoundStyled>
  </Container>
);

const NotFoundStyled = styled.article`
  a {
    color: rgb(255, 100, 45) !important;
    border-bottom: 1px dashed;
  }
`;

export default ErrorNotFound;
