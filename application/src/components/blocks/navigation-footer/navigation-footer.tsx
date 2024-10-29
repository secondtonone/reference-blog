import styled from 'styled-components';
import { typographyFonts } from '~/styles';
import resources from '~/__fixtures__/socials';

import {
  BoxAdaptive,
  LinkText,
  Columns,
  Column,
  SocialBlock,
  ButtonLink
} from '~/components/atoms';

import SvgIcon from '~/components/containers/svg-icon';
import { fontWeights, getScheme } from '~/styles/scheme';

import { useIsIn } from '~/hooks';
import { isDomain } from '~/utils';
import ChinaCertification from './china-certification';

const darkTheme = getScheme(true);
const lightTheme = getScheme();

const ADDRESS = 'USA, 800 Boylston Street, Suite 2475, Boston, MA 02199';
const EMAIL = 'mail@example.com';

const NavigationFooter: React.FC = ({ children }) => {
  const [isInChina] = useIsIn(isDomain('cn'));

  return (
    <FooterStyled data-test="footer">
      <BoxAdaptive p={{ _: '38px 15px', x: '38px 30px', sm: '56px 64px' }} m="0 auto" maxWidth="1440px">
        <Columns justifyContent={{ _: 'space-between', x: 'center', md: 'space-between' }}>
          <Column
            display="flex"
            flexBasis={{
              _: '100%', x: '80%', sm: '35%', md: '19%'
            }}
            p={{ _: '0' }}
            flexDirection="column"
            justifyContent={{ _: 'flex-start', md: 'space-between' }}
          >
            <BoxAdaptive textAlign={{ _: 'center', sm: 'left' }}>
              <BoxAdaptive data-test="example-logo" display={{ _: 'block', sm: 'flex' }} pb="16px" height="auto" m="0 auto">
                <SemIconStyled code="example-footer" size={[191, 26]} />
              </BoxAdaptive>
              <span data-test="address">{ADDRESS}</span>
              <br />
              <br />
              <LinkText data-test="example-email" href={`mailto:${EMAIL}`} currentColor undecorated>{EMAIL}</LinkText>
            </BoxAdaptive>
            <BoxAdaptive
              m={{ _: '42px 15px', x: '42px 0' }}
              height="auto"
              textAlign={{
                _: 'center', sm: 'left'
              }}
            >
              <ButtonContainer maxWidth={{ lg: 230 }} display="flex">
                <ButtonLink
                  data-test="get-started-link"
                  href="/kb/15-getting-started/"
                  border
                  w="100%"
                  unhovered
                  use="secondary"
                  inverted
                >
                  Get started with example
                </ButtonLink>
              </ButtonContainer>
              <br />
              or see our
              {' '}
              <PlansLinkStyled data-test="plans-and-pricing-link" href="/prices/" currentColor>plans & pricing</PlansLinkStyled>
            </BoxAdaptive>
          </Column>
          <Column
            display="flex"
            data-test="footer-navigation-menu"
            flexBasis={{
              _: '100%', x: '100%', sm: '64%', md: '70%'
            }}
            p={{ _: '0' }}
            justifyContent={{ _: 'flex-start', md: 'flex-start' }}
            alignContent={{
              _: 'flex-start', x: 'flex-start', sm: 'flex-end'
            }}
            flexDirection={{ _: 'column', md: 'column' }}
            flexWrap="wrap"
            height={{
              _: 850, x: 850, xm: 764, sm: 850, lg: 538, xl: 470
            }}
          >
            {children}
          </Column>
          <Column flexBasis={{ _: '100%' }} p={{ _: '0 0 0 15px', x: '0 24px', sm: '0' }}>
            <BoxAdaptive display={{ _: 'flex', sm: 'flex', md: 'none' }} flexWrap="wrap" p="40px 0" m="0 auto">
              <SocialBlock resources={resources} linkedPrefix="company" />
            </BoxAdaptive>
          </Column>
          <Column flexBasis={{ _: '100%' }} p={{ _: '0 24px', sm: '0' }} m="0 auto">
            <RightsText textAlign="left">
              © 2008–2021 example. All rights reserved.
              {isInChina ? (
                <>
                  {' '}
                  <ChinaCertification />
                </>
              ) : null}
            </RightsText>
          </Column>
        </Columns>
      </BoxAdaptive>
    </FooterStyled>
  );
};

const PlansLinkStyled = styled(LinkText)`
  border-bottom: 1px solid currentColor;
`;

const RightsText = styled(BoxAdaptive)`
  color: ${darkTheme.secondary3};
`;

const ButtonContainer = styled(BoxAdaptive)`
  color: ${lightTheme.white};

  > span, a {
    width: 100%;
  }
`;

const SemIconStyled = styled(SvgIcon)`
  padding-left: 5px;
  display: inline-block;
`;

const FooterStyled = styled.footer`
  background: ${lightTheme.opposed};
  color: ${lightTheme.secondary3} !important;
  font-size: ${typographyFonts.desc['extra-small'].size};
  line-height: ${typographyFonts.desc['extra-small'].height};
  font-weight: ${fontWeights.normal};
  z-index: 10;
  position: relative;
`;

export default NavigationFooter;
