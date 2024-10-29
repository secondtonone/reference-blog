import { css } from 'styled-components';
import { brUp } from '~/styles/helpers';

const twitter = css`
  .twitter-tweet {
    opacity: 0;
    transition: opacity .3s;
  }

  .twitter-tweet {
    margin: 40px 0 !important;

    ${brUp('x', `
      margin: 60px 0 !important;
    `)}

    iframe {
      margin: 0;
    }
  }

  .twitter-tweet-rendered {
    opacity: 1;
  }
`;

export default twitter;
