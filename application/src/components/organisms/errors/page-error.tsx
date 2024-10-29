import Link from 'next/link';
import styled from 'styled-components';
import { BoxAdaptive } from '~/components/atoms';
import Container from './container';

interface Props {
  heading: string,
  statusCode?: number
}

const PageError: React.FC<Props> = ({
  heading,
  statusCode
}) => (
  <Container
    withLogo
    heading={heading}
    statusCode={statusCode}
  >
    <MessageStyled>
      You can visit&nbsp;
      <Link href="/blog">
        <a data-test="error-link-main">homepage</a>
      </Link>
      {' '}
      or contact
      {' '}
      <Link href="mailto:mail@example.com?subject=example Blog">
        <a data-test="error-link-support" target="_blank">support team</a>
      </Link>
      .
    </MessageStyled>
    <BoxAdaptive
      mt={{ _: 82 }}
    >
      <img
        src="https://static.example.com/blog-next-static/banners/banner-find-dark.png"
        width="416"
        alt="Find anything"
        data-test="error-png"
      />
    </BoxAdaptive>
  </Container>
);

const MessageStyled = styled.article`
  a {
    color: rgb(255, 100, 45) !important;
    border-bottom: 1px dashed;
  }
`;

export default PageError;
