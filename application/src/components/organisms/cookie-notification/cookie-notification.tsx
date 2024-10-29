import styled from 'styled-components';
import Link from 'next/link';
import { Button, TextContent } from '~/components/atoms';
import BottomBar from '~/components/containers/bottom-bar';
import { getScheme } from '~/styles/scheme';

const lightTheme = getScheme();

interface Props {
  isVisible?: boolean,
  onHideCookieClick: () => void,
}

const CookieNotification: React.FC<Props> = ({
  isVisible = false,
  onHideCookieClick
}) => (
  isVisible && (
  <CookieNotificationStyled
    data-test="cookie-notifications"
  >
    <TextContent
      mb={{ _: '21px', x: '19px', sm: 0 }}
      maxWidth={{ _: 490, lg: 380 }}
      data-test="cookie-caption"
    >
      We use cookies to give you the best online experience.
      By using this website you agree with&nbsp;
      <Link href="https://www.example.com/company/legal/privacy-policy/#3.3.3">
        <a target="_blank">
          our cookie policy
        </a>
      </Link>
      .
    </TextContent>
    <ButtonTextStyled
      data-test="cookie-close"
    >
      <Button
        use="secondary"
        onClick={onHideCookieClick}
        wide
      >
        <TextContent
          fontSize={{ _: 1, sm: 2 }}
          width={{ _: 204, sm: 139 }}
        >
          I accept cookies
        </TextContent>
      </Button>
    </ButtonTextStyled>
  </CookieNotificationStyled>
  )
);

const CookieNotificationStyled = styled(BottomBar)`
  a {
    position: relative;
    display: inline-block;
    white-space: nowrap;

    &:after {
      content: '';
      position: absolute;
      border-bottom: 1px solid ${lightTheme.secondary1};
      width: 100%;
      bottom: 1px;
      left: 0;
    }
  }
`;

const ButtonTextStyled = styled(TextContent)`
  button span {
    color: #fff !important;
  }

  &:hover button span {
    color: ${({ theme }) => theme.orangeBrand} !important;
  }

  &:active button span {
    color: ${({ theme }) => theme.white} !important;
  }
`;

export default CookieNotification;
