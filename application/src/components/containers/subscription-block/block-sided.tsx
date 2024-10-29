import Link from 'next/link';
import styled from 'styled-components';
import {
  TextContent
} from '~/components/atoms';
import { getScheme } from '~/styles/scheme';

import SubscriptionForm from '~/components/blocks/subscription-form';
import { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';

const lightTheme = getScheme();

const BlockSided: React.FC<BoxAdaptiveProps> = ({ theme, ...props }) => (
  <SubscriptionForm
    {...props}
    pt={{ _: 5 }}
    title={(
      <TextContent
        data-test="subscribe-title"
        textAlign={{ _: 'left' }}
        fontSize={{ _: 5 }}
        lineHeight={{ _: 1.45 }}
        marginBottom={{ _: 3, sm: 4 }}
        as="div"
        accentFont
      >
        <TextContent fontWeight={{ _: 'accent' }}>
          Subscribe to learn more
          {' '}
          {theme ? 'about' : ''}
          &nbsp;
          {theme}
        </TextContent>
      </TextContent>
      )}
    placeholder="Your email"
    button="Subscribe"
    tip={(
      <TextContent
        data-test="subscribe-tip"
        textAlign={{ _: 'left' }}
        fontSize={{ _: '10px', sm: 1 }}
        lineHeight={{ _: 1.5 }}
        marginTop={{ _: 3, sm: 3 }}
        as="div"
      >
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

export default BlockSided;
