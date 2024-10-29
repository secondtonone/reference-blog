import { css } from 'styled-components';
import { brUp } from '~/styles/helpers';

const blockquote = css`
  .blockquote-image blockquote {
    & div {
      display: flex;
      flex-direction: row;
      position: relative;
      z-index: 2;

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
    }

    & img {
      border-radius: 10px !important;
      border: 0 !important;
      margin-right: 20px;
      height: 75px !important;
      width: 75px !important;

      ${brUp('sm', `
        height: 95px !important;
        width: 95px !important;
      `)}
    }
  }
`;

export default blockquote;
