import Link from 'next/link';
import styled from 'styled-components';
import SubscriptionBlock from '~/components/blocks/subscription-block';
import {
  TextContent,
  Image
} from '~/components/atoms';
import { getScheme } from '~/styles/scheme';

const lightTheme = getScheme();

const BlockDefault: React.FC = () => (
  <SubscriptionBlock
    image={(
      <Image
        isLazy
        src="https://static.example.com/blog-next-static/banners/newsletter.png"
        width="367"
        height="360"
        alt="Newsletter example banner"
        data-test="banner-subscribe-png"
      />
    )}
    title="Join our newsletter"
    placeholder="Your email"
    button="Subscribe"
    tip={(
      <TextContent>
        By clicking “Subscribe” you agree to example
        {' '}
        <Link href="https://www.example.com/company/legal/privacy-policy/">
          <a target="_blank" data-test="subscribe-link-privacy">
            <PrivacyLink>
              Privacy Policy
            </PrivacyLink>
          </a>
        </Link>
        {' '}
        and consent to example using your contact data for newsletter purposes
      </TextContent>
    )}
    successMessage={(
      <>
        <TextContent
          accentFont
          textAlign={{ _: 'center' }}
          fontSize={{ _: 5, xm: 11, md: 16 }}
          lineHeight={{ _: 1.4 }}
          fontWeight={{ _: 'bold' }}
          marginTop={{ _: 26, xm: 0 }}
          marginBottom={{ _: 3, sm: 4 }}
          width="100%"
          as="p"
        >
          Yeah!
        </TextContent>
        You’ve successfully
        <br />
        subscribed to a newsletter
      </>
    )}
    errorMessage={(
      <>
        <TextContent
          accentFont
          textAlign={{ _: 'center' }}
          fontSize={{ _: 5, xm: 11, md: 16 }}
          lineHeight={{ _: 1.4 }}
          fontWeight={{ _: 'bold' }}
          marginTop={{ _: 26, xm: 0 }}
          marginBottom={{ _: 3, sm: 4 }}
          width="100%"
          as="p"
        >
          Sorry :(
        </TextContent>
        Something went wrong.
        <br />
        Try again later.
      </>
    )}
  />
);

const PrivacyLink = styled(TextContent)`
  &:hover {
    text-decoration: underline;
    color: ${lightTheme.orangeBrand}
  }
`;

export default BlockDefault;
