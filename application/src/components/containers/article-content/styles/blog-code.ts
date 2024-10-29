import { css } from 'styled-components';
import { brUp } from '~/styles/helpers';
import { contentSizes } from '~/styles';

const blogCode = css`
  .b-blog__code {
    max-width: 90vw !important;
    margin: 40px auto;
    position: relative;
    background-color: ${({ theme }) => theme.secondary1};
    overflow: auto;
    border-radius: 5px;
    white-space: pre;
    padding: 24px 0 24px 20px;

    ${brUp('xm', `
      margin: 60px 0;
      border-radius: 10px;
      padding: 32px 0 32px 58px;
    `)}

    ${brUp('lg', `
      max-width: ${contentSizes.wide}px !important;
    `)}
  }

  .b-blog__code__code {
    border: 0;
    display: inline-block;
    box-sizing: border-box;
    //font-family: 'Courier New', serif;
    line-height: 1.5;
    font-weight: 300;
    font-size: 14px;
    word-wrap: break-word;
    padding-right: 20px;

    ${brUp('xm', `
      font-size: 16px;
      padding-right: 58px;
    `)}
  }
`;

export default blogCode;
