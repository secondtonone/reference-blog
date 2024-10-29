import styled from 'styled-components';
import clsx from 'clsx';
import articleStyles from './styles';
import BoxAdaptive, { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';
import {
  md, x, sm, xm
} from '~/styles/scheme/breakpoints';
import { contentSizes } from '~/styles';

export interface ArticleStyleProps {
  tableOfContent?: boolean
  sideBar?: boolean,
  parseContent?: boolean,
  insertBottom?: React.ReactNode
}

const ArticleStyle: React.FC<BoxAdaptiveProps & ArticleStyleProps> = ({
  children,
  tableOfContent,
  sideBar,
  parseContent,
  insertBottom
}) => (
  <ArticleStyled
    data-parse={`${parseContent}`}
    fontSize={{
      _: '1.4rem',
      lg: '1.7rem',
    }}
    lineHeight={{
      _: '2.4rem',
      md: '2.6rem',
      lg: '2.67rem',
    }}
    fontWeight={{
      _: '300'
    }}
  >
    <ArticleText
      className={clsx({
        '-limited-bottom': false,
        '-table-of-content-show': tableOfContent,
        '-limited-top': sideBar
      })}
      data-test="article-body"
      dangerouslySetInnerHTML={parseContent ? null : { __html: children }}
    >
      {parseContent ? children : null}
    </ArticleText>
    {insertBottom}
  </ArticleStyled>
);

const ArticleStyled = styled(BoxAdaptive)`
  ${articleStyles}
`;

const ArticleText = styled.article`
  & > *:not(div[data-test], div[data-oembed-url]):not(table):not(.easyimage-full) {
    max-width: ${contentSizes.limited}px;
  }

  & > figure {
    &.-max-width {
      pointer-events: none !important;
    }
    &.easyimage-full {
      max-width: 100%;

      @media (min-width: 1140px) {
        max-width: 1010px !important;
      }
    }
  }

  & > img {
    max-width: ${contentSizes.limited}px !important;
    width: 100% !important;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Factor A', Ubuntu, Helvetica, Arial, sans-serif !important;
    font-weight: 700 !important;
    line-height: 1.25;
  }

  img:not([data-test]):not(.b-profile-mini__img):not(.easyimage-side img) {
    width: 100% !important;
  }

  iframe {
    width: 100%;
    max-width: 100% !important;
    z-index: 10;
    position: relative;
    border: 0;
  }

  iframe:not([src*="twitter"]) {
    @media (min-width: ${xm}) {
      max-width: 410px !important;
    }

    @media (min-width: ${sm}) {
      max-width: 480px !important;
      height: 270px !important;
    }
    @media (min-width: ${md}) {
      max-width: ${contentSizes.limited}px !important;
      height: 371px !important;
    }
  }


  img:not([data-test]).zooming,
  img:not([data-test]),
  iframe[data-src*="youtube"].zooming,
  .youtube-thumbnail,
  iframe[src*="facebook"],
  iframe[src*="youtube"]  {
    border: 1px solid ${({ theme }) => (theme.isLight ? theme.secondary3 : theme.secondary2)} !important;
    border-radius: 5px !important;

    @media (min-width: ${x}) {
      border-radius: 10px !important;
    }
  }

  &.-limited-bottom > *:nth-last-child(-n+2),
  &.-limited-top > *:nth-child(-n+3) {
    max-width: ${contentSizes.limited}px !important;
    & > * {
      max-width: ${contentSizes.limited}px !important;

      &[data-test="create-campaign-widget"] {
        max-width: 760px !important;
      }
    }


  }

  @keyframes fadeIn {
    from {
      filter: blur(5px);
      opacity: 0;
    }

    to {
      filter: blur(0);
      opacity: 1;
    }
  }

  img.lazyload {
    animation-duration: 200ms;
    animation-name: fadeIn;
    transition: filter 400ms, opacity 400ms;
  }

  img.lazyloaded {
    animation-name: fadeIn;
    opacity: 1;
  }

  img.zooming {
    cursor: zoom-in;
  }

  span a:not([data-test]),
  a:not([data-test]) span,
  p a:not([data-test]) {
    text-decoration: none !important;
    color: ${({ theme }) => (theme.orangeBrand)} !important;

    &:hover {
      text-decoration: underline !important;
    }
  }

  div.episode-wrapper {
    margin: 0 !important;

    & + *:not(.episode-wrapper):not(h1):not(h2):not(h3):not(h4):not(h5):not(h6) {
      margin-top: 60px !important;

        @media (max-width: ${x}) {
          margin-top: 40px !important;
        }
      }
    }
  }

  p.emphasis {
    font-style: italic !important;
  }

  strong, strong * {
    font-weight: bold !important;
  }
`;

export default ArticleStyle;
