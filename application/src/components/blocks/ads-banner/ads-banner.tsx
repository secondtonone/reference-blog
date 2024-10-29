import { useCallback } from 'react';
import styled from 'styled-components';
import { getColorByContrast } from '~/styles/helpers';
import { BannerColorsKey, IllustGroupTokens } from '~/styles/palette';
import getScheme from '~/styles/scheme/scheme';

import {
  TextContent,
  ButtonLink,
  LinkText
} from '~/components/atoms';

import BoxAdaptive, { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';

export interface AdsBannerProps extends BoxAdaptiveProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  heading: React.ReactNode
  description?: React.ReactNode
  button: React.ReactNode
  additional?: React.ReactNode
  background?: BannerColorsKey
  accent: BannerColorsKey
  link: string
  image: React.ReactNode
  shiftY?: number
  inBlock?: boolean,
  buttonColor: keyof IllustGroupTokens | 'purpleBrand',
  code?: 'short' | 'default'
}

const AdsBanner: React.FC<AdsBannerProps> = ({
  heading,
  description,
  button,
  additional,
  link,
  image,
  shiftY = 0,
  background,
  accent,
  inBlock,
  onClick,
  buttonColor = 'purpleBrand',
  code = 'default',
  ...props
}) => {
  const onClickHandler = useCallback((e) => {
    if (typeof onClick === 'function') onClick(e);
  }, [onClick]);

  const shortBanner = code === 'short';

  return (
    <BannerStyled
      data-test="banner-block"
      display="flex"
      justifyContent="space-between"
      flexDirection={inBlock ? { _: 'column-reverse' } : { _: 'column-reverse', sm: 'row' }}
      background={background}
      borderRadius={inBlock ? { _: '20px' } : { _: '5px', md: '10px' }}
      height={shortBanner ? { lg: 200 } : ''}
      p={inBlock ? { _: '30px' } : { _: '20px', sm: shortBanner ? '' : '32px 40px 30px', md: shortBanner ? '' : '50px 58px 40px' }}
      overflow="hidden"
      width="100%"
      shortBanner={shortBanner}
      alignItems="center"
      {...props}
    >
      <BoxAdaptive
        data-test="content"
        m={inBlock ? { _: '36px 0 0' } : { _: '12px 0 0', sm: '0' }}
        display="flex"
        flexDirection="column"
        justifyContent={inBlock ? 'flex-start' : 'space-between'}
        p={{ sm: shortBanner ? '28px 40px 10px' : '', md: '' }}
        width={inBlock ? { _: '100%' } : { _: '100%', sm: '52%', md: '56%' }}
      >
        <BoxAdaptive
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <TextContent
            data-test="banner-heading"
            textAlign={inBlock ? { _: 'center' } : { _: 'center', sm: 'left' }}
            fontSize={inBlock ? { _: 8 } : { _: 5, sm: 8, md: 11 }}
            lineHeight={{ _: 1.2 }}
            fontWeight={{ _: 'accent' }}
            marginBottom={inBlock ? { _: 2 } : { _: 1, md: 2 }}
            level={0}
            accentFont
          >
            {heading}
          </TextContent>
          {description && (
          <TextContent
            data-test="banner-description"
            textAlign={inBlock ? { _: 'center' } : { _: 'center', sm: 'left' }}
            fontSize={inBlock ? { _: 3 } : { _: 1, sm: 3 }}
            lineHeight={{ _: 1.6 }}
            fontWeight={{ _: 'normal' }}
            level={0}
          >
            {description}
          </TextContent>
          )}
        </BoxAdaptive>
        <BoxAdaptive
          display="flex"
          flexDirection={{ _: 'column', lg: 'row' }}
          alignItems={{ _: 'center', sm: 'flex-start' }}
        >
          {additional}
          <BoxAdaptive
            mt={inBlock ? { _: '38px' } : (additional ? { _: '10px' } : { _: '10px', sm: '24px', md: shortBanner ? '16px' : '38px' })}
            mb={{ _: 0, sm: '15px' }}
            display={inBlock ? { _: 'block' } : { _: 'none', sm: 'block' }}
          >
            <BoxAdaptive
              minWidth={inBlock ? { _: '100%' } : (additional ? { _: 280, lg: 200 } : { _: '100%', sm: 252 })}
            >
              <ButtonLink
                background={buttonColor ?? (background ? accent : 'orangeBrand')}
                data-test="banner-link"
                target="_blank"
                onClick={onClickHandler}
                href={link}
                w="100%"
              >
                {button}
              </ButtonLink>
            </BoxAdaptive>
          </BoxAdaptive>
        </BoxAdaptive>
        <BoxAdaptive
          mt={{ _: '10px', sm: '24px', md: '38px' }}
          display={inBlock ? { _: 'none' } : { _: 'block', sm: 'none' }}
          textAlign="center"
        >
          <LinkText
            className={shortBanner ? '-outlined' : ''}
            onClick={onClickHandler}
            href={link}
            currentColor
          >
            {button}
          </LinkText>
        </BoxAdaptive>
      </BoxAdaptive>
      <ImageStyled
        data-test="banner-image"
        mt={{ _: shortBanner ? 0 : -shiftY, lg: -shiftY }}
      >
        {image}
      </ImageStyled>
    </BannerStyled>
  );
};

type BannerContainer = Pick<AdsBannerProps, 'background' | 'accent'> & { shortBanner?: boolean };

const BannerStyled = styled(BoxAdaptive)<BannerContainer>`
  & p,
  & {
    color: ${({ theme, shortBanner, background = 'background' }) => (shortBanner ? '#fff' : getColorByContrast({ main: theme[background], light: theme.white, dark: theme.black }))} !important;
  }
  & a span {
    font-size: 14px;
    color: currentColor !important;
  }

  background: ${({ background }) => getScheme()[background]};
  background-repeat: no-repeat;
  box-shadow: 0 15px 30px rgba(51, 59, 81, 0.05);
  ${({ background, theme }) => (background ? '' : `border: 1px solid ${theme.secondary2};`)}
`;

const ImageStyled = styled(BoxAdaptive)`
  color: ${({ background, theme }) => theme[background]};

  svg,
  img {
    width: 100%;
    max-width: 390px;
    max-height: 204px;
  }
`;

export default AdsBanner;
