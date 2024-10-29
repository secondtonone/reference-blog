import styled from 'styled-components';
import { SpaceProps, WidthProps } from 'styled-system';
import Link from 'next/link';
import { BoxAdaptive, TextContent } from '~/components/atoms';
import { getLimitedText, cleanTags } from '~/utils';
import { BannerColor } from '~/styles/palette';
import { getScheme } from '~/styles/scheme';
import { xm } from '~/styles/scheme/breakpoints';
import { PromoViewModel } from '~/view-model';

export interface PromoWidgetProps {
  title: string
  body: string
  link?: string
  ['data-test']: string
  date?: React.ReactNode
  label: string
  headerContent: React.ReactNode
  image: React.ReactNode
  footerContent: React.ReactNode
  isYoutube?: boolean
  background?: BannerColor
  fullWidth?: boolean
  onClick?:() => void
  textLimit?: number
  inArticle?: boolean
  labelBackgroundColor?: BannerColor
  labelColor?: BannerColor
  titleColor?: BannerColor
  bodyColor?: BannerColor
  isImageCorner?: boolean,
  textContentWidth?: Pick<PromoViewModel, 'textContentWidth'>
}

const lightTheme = getScheme();

const LinkText = ({ link = '', onClick, children }) => (
  link ? (
    <Link href={link}>
      <a role="link" onClick={onClick}>
        {children}
      </a>
    </Link>
  ) : (
    children
  )
);

const PromoWidget: React.FC<PromoWidgetProps> = ({
  title,
  label,
  body,
  link,
  image,
  date,
  'data-test': name,
  headerContent,
  footerContent,
  isYoutube,
  background,
  fullWidth,
  onClick,
  textLimit = 200,
  inArticle = false,
  labelBackgroundColor,
  labelColor,
  titleColor,
  bodyColor,
  isImageCorner,
  textContentWidth,
}) => {
  let promoWidgetStyledPL: SpaceProps['pl'] = {
    _: '15px', x: 6, sm: 7, lg: '56px'
  };
  let promoWidgetStyledPR: SpaceProps['pr'] = {
    _: '15px', x: 6, sm: 7, lg: '56px'
  };
  let promoWidgetStyledPT: SpaceProps['pt'] = {
    _: 6, xm: 7, md: '33px'
  };
  let promoWidgetStyledPB: SpaceProps['pb'] = {
    _: '39px', md: '33px'
  };
  let labelStyledMT;

  if (inArticle) {
    promoWidgetStyledPT = { _: 6, xm: 0 };
    promoWidgetStyledPB = { _: 6, xm: 0 };
    promoWidgetStyledPL = { _: 6, xm: 0 };
    promoWidgetStyledPR = { _: 6, xm: 0 };
  } else if (isImageCorner) {
    promoWidgetStyledPT = { _: 0 };
    promoWidgetStyledPB = { _: '44px', xm: '36px' };
    promoWidgetStyledPR = { _: 0 };
    labelStyledMT = { _: '33px', xm: '35px' };
  }

  let promoWidgetTextContentWidth: WidthProps = { xm: '60%', sm: '65%' };

  if (textContentWidth) {
    promoWidgetTextContentWidth = textContentWidth;
  }

  return (
    <PromoWidgetStyled
      data-test={`${name}-widget`}
      pl={promoWidgetStyledPL}
      pr={promoWidgetStyledPR}
      pt={promoWidgetStyledPT}
      pb={promoWidgetStyledPB}
      margin={inArticle ? { _: '0 -24px', xm: 0 } : { _: '0 -15px', x: '0 -24px', sm: 0 }}
      borderRadius={{ _: 0, sm: '10px' }}
      background={background}
      inArticle={inArticle}
      isYoutube={isYoutube}
      color={titleColor}
      overflow="hidden"
    >
      <BoxAdaptive
        display={{ _: 'flex', xm: 'block' }}
      >
        <BoxAdaptive
          flex={1}
          mt={{ _: 2, sm: 0 }}
          fontSize={{ _: 1, sm: 2 }}
          display={{ xm: 'inline-flex' }}
          alignItems={{ xm: 'flex-start' }}
        >
          <LabelStyled
            fontSize={{ _: 1, md: 2 }}
            lineHeight={1.15}
            fontWeight={isYoutube ? 'normal' : 'accent'}
            data-test={`${name}-label-new`}
            isYoutube={isYoutube}
            inArticle={inArticle}
            padding={{
              _: '9px 16px',
              x: '8px 15px',
              sm: '10.5px 15px',
              lg: '9.5px 15px'
            }}
            mt={labelStyledMT}
            minWidth={fullWidth ? null : { _: 108, sm: 120 }}
            textAlign="center"
            backgroundColor={labelBackgroundColor}
            color={labelColor}
          >
            {label}
          </LabelStyled>
          <BoxAdaptive
            mt={{ _: 7, xm: 0 }}
            display="flex"
            flexDirection={{ _: 'column', xm: 'row' }}
            alignItems={{ xm: 'center' }}
            height={{ xm: 31, sm: 36 }}
          >
            {date ? (
              <TextContent
                level={0}
                ml={{ xm: 6 }}
                lineHeight={1.15}
                data-test={`${name}-release-date`}
              >
                {date}
              </TextContent>
            ) : null}
            {headerContent}
          </BoxAdaptive>
        </BoxAdaptive>
        {image}
      </BoxAdaptive>
      <BoxAdaptive
        width={promoWidgetTextContentWidth}
        pt={{ _: 7, xm: 6 }}
        pr={isImageCorner ? {
          _: '15px', x: 6
        } : null}
      >
        <TextContentStyled
          fontSize={{ _: '20px', sm: '32px' }}
          lineHeight={{ _: '28px', sm: '38.4px' }}
          fontWeight={{ _: 'bold' }}
          level={7}
          accentFont
          maxWidth={{ _: '95%', md: '100%' }}
          data-test={`${name}-title`}
        >
          <LinkText
            link={link}
            onClick={onClick}
          >
            {title}
          </LinkText>
        </TextContentStyled>
        <BodyStyled
          fontSize={{ _: 2 }}
          lineHeight={{ _: '22.4px' }}
          fontWeight={{ _: 'light' }}
          mt="10px"
          maxWidth={{ sm: 495, lg: 600 }}
          data-test={`${name}-body`}
          isYoutube={isYoutube}
          background={background}
          color={bodyColor}
        >
          <LinkText
            link={link}
            onClick={onClick}
          >
            {getLimitedText(cleanTags(body), true, textLimit)}
          </LinkText>
        </BodyStyled>
        <FooterContent>
          {footerContent}
        </FooterContent>
      </BoxAdaptive>
    </PromoWidgetStyled>
  );
};

const TextContentStyled = styled(TextContent)`
  white-space: pre-wrap;
`;

const FooterContent = styled.div`
  a {
    text-decoration: underline;
    font-size: 14px;
  }
`;

const PromoWidgetStyled = styled(BoxAdaptive)<{
  background?: string, isYoutube?: boolean,
  inArticle?: boolean,
  color?: BannerColor}>`
  color: ${({
    theme, isYoutube, background, color
  }) => {
    if (color) return theme[color];

    return isYoutube && background ? lightTheme.opposed : (
      theme.isLight
        ? theme.opposed
        : theme.secondary5);
  }};
  background: ${({ background, theme, inArticle }) => (
    inArticle ? 'transparent' : lightTheme[background] || theme.secondary1
  )};

  &::after {
    clear: both;
    display: block;
    content: '';
  }

  @media (max-width: ${xm}) {
    background: ${({ background, theme }) => lightTheme[background] || theme.secondary1};
  }
`;

const LabelStyled = styled(TextContent)<{
  thin?: boolean,
  isYoutube?: boolean,
  inArticle?: boolean,
  backgroundColor?: BannerColor
  color?: BannerColor
}>`
  color: ${({ theme, isYoutube, color }) => {
    if (color) return theme[color];

    return isYoutube || !theme.isLight ? theme.white : theme.opposed;
  }};
  background-color: ${({
    theme,
    isYoutube,
    inArticle,
    backgroundColor
  }) => {
    if (backgroundColor) return lightTheme[backgroundColor];

    return isYoutube ? theme.orangeBrand : (inArticle ? theme.secondary1 : theme.white);
  }};
  display: inline-block;
  border-radius: 10px;

  @media (max-width: ${xm}) {
    background-color: ${({
    theme,
    isYoutube,
    backgroundColor
  }) => {
    if (backgroundColor) return lightTheme[backgroundColor];

    return isYoutube ? theme.orangeBrand : theme.secondary2;
  }};
  }
`;

const BodyStyled = styled(TextContent)<{ isYoutube?: boolean, background?: string, color: BannerColor}>`
  color: ${({
    theme, isYoutube, background, color
  }) => {
    if (color) return theme[color];

    return isYoutube && background ? lightTheme.opposed : (
      theme.isLight
        ? theme.opposed
        : theme.secondary5);
  }};
`;

export default PromoWidget;
