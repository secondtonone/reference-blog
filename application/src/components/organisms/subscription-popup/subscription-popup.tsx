import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import SubscriptionForm from '~/components/blocks/subscription-form';
import { BoxAdaptive, TextContent, Button } from '~/components/atoms';
import SvgIcon from '~/components/containers/svg-icon';
import PagePopup from '~/components/containers/page-popup';
import Popup from '~/enums/popup';
import { getScheme } from '~/styles/scheme';

const lightTheme = getScheme();

const SubscriptionPopup: FC = () => (
  <PagePopup name={Popup.SUBSCRIBE} alignItems="flex-start">
    {(hide) => (
      <BoxAdaptive
        pt={{
          _: 90, xm: 60, lg: 132
        }}
        pb={{ xm: 60 }}
        h="100%"
      >
        <Card
          data-test="subscribe-popup-container"
          p={{ _: '28px 20px 32px', x: '28px 24px 32px', xm: '34px 91px 55px' }}
          maxWidth={{ _: 482 }}
          m={{ _: '0 15px', x: '0 24px' }}
          borderRadius={20}
          position="relative"
          overflow="hidden"
        >
          <BoxAdaptive
            position="absolute"
            top={{ _: 26 }}
            right={{ _: 18, x: 26 }}
          >
            <Button
              style={{ minWidth: '' }}
              data-test="subscribe-popup-close"
              use="tertiary"
              onClick={hide}
              noborder
            >
              <SvgIcon size={[20, 20]} code="close" />
            </Button>
          </BoxAdaptive>
          <BoxAdaptive
            data-test="subscribe-popup-image"
            p={{ _: '0 48px 16px', x: '0 62px 16px', xm: '0 20px 32px' }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <img
              src="https://static.example.com/blog-next-static/banners/newsletter.png"
              width="194"
              alt="Newsletter example banner"
              data-test="banner-subscribe-png"
            />
          </BoxAdaptive>
          <SubscriptionForm
            p={0}
            internal
            onSuccess={hide}
            title={(
              <TextContent
                data-test="subscribe-popup-title"
                accentFont
                textAlign={{ _: 'center' }}
                fontSize={{ _: 5, xm: 11 }}
                lineHeight={{ _: 1.2 }}
                fontWeight={{ _: 'accent' }}
                marginBottom={{ _: 3, sm: 3 }}
                width="100%"
                as="div"
              >
                Join our newsletter
              </TextContent>
              )}
            placeholder="Your email"
            button="Subscribe"
            tip={(
              <TextContent
                data-test="subscribe-popup-tip"
                textAlign={{ _: 'left' }}
                fontSize={{ _: '10px', xm: 1 }}
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
                  fontSize={{ _: 5, xm: 11 }}
                  lineHeight={{ _: 1.4 }}
                  fontWeight={{ _: 'bold' }}
                  marginBottom={{ _: 3, sm: 4 }}
                  marginTop={{ _: 20 }}
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
        </Card>
      </BoxAdaptive>
    )}
  </PagePopup>
);

const Card = styled(BoxAdaptive)`
  background-color: ${({ theme }) => theme.yellow};
  color: ${lightTheme.opposed};
`;

const PrivacyLink = styled(TextContent)`
  &:hover {
    text-decoration: underline;
    color: ${lightTheme.orangeBrand}
  }
`;

export default SubscriptionPopup;
