import { css } from 'styled-components';
import { getColorProperty, brUp } from '~/styles/helpers';

const blogImageText = css`
  .b-blog__image__text, figcaption {
      margin-top: 10px;

      &, & a {
      color: ${({ theme }) => (theme.isLight ? theme.secondary4 : getColorProperty(theme.white, 0.38))} !important;
      font-style: normal;
      line-height: 1.5;
      font-size: 12px;
      box-sizing: border-box;
      text-align: left;
      padding: 0;
      width: auto;
      display: block;
      word-wrap: break-word;

      ${brUp('x', `
        font-size: 14px;
      `)}
    }

    ${brUp('x', `
      margin-top: 16px;
    `)}
  }
`;

export default blogImageText;
