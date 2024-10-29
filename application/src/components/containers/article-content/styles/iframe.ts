import { css } from 'styled-components';

const iframe = css`
  iframe {
    margin: 12px 0;
    width: 100%;
    border: 0;
    display: block;
  }

  > div[data-oembed-url] iframe {
    &:not(.instagram-media),
    &:not(.fb-post),
    &:not([src*="twitter"]) {
      height: 371px;
    }
  }
  div:not(.b-blog__iframe) iframe {
    &:not(.instagram-media),
    &:not(.fb-post),
    &:not([src*="twitter"]) {
      height: 371px;
    }
  }

  @media all and (min-width: 481px) and (max-width: 767px) {
    > div[data-oembed-url] iframe {
      &:not(.instagram-media),
      &:not(.fb-post),
      &:not([src*="twitter"]) {
        height: 328px;
      }
    }
    div:not(.b-blog__iframe) iframe {
      &:not(.instagram-media),
      &:not(.fb-post),
      &:not([src*="twitter"]) {
        height: 328px;
      }
    }
  }

  @media all and (min-width: 375px) and (max-width: 480px) {
    > div[data-oembed-url] iframe {
      &:not(.instagram-media),
      &:not(.fb-post),
      &:not([src*="twitter"]) {
        height: 184px;
      }
    }
    div:not(.b-blog__iframe) iframe {
      &:not(.instagram-media),
      &:not(.fb-post),
      &:not([src*="twitter"]) {
        height: 184px;
      }
    }
  }

  @media all and (max-width: 374px) {
    > div[data-oembed-url] iframe {
      &:not(.instagram-media),
      &:not(.fb-post),
      &:not([src*="twitter"]) {
        height: 164px;
      }
    }
    div:not(.b-blog__iframe) iframe {
      &:not(.instagram-media),
      &:not(.fb-post),
      &:not([src*="twitter"]) {
        height: 164px;
      }
    }
  }
`;

export default iframe;
