import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  href: string
}

const TopicLink: React.FC<Props> = ({ href, children }) => (
  <LinkStyled data-test="topic-link">
    <Link href={href}>
      <a>{children}</a>
    </Link>
  </LinkStyled>
);

const LinkStyled = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.opposed};
  transition: .235s background-color;

  a {
    padding: 10px 16.49px;
    display: inline-block;
    background: ${({ theme }) => theme.topic};
    border-radius: 10px;

    &:hover {
      color: ${({ theme }) => theme.white};
    }

    &:active {
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme.orangeBrand};
    }
  }
`;

export default TopicLink;
