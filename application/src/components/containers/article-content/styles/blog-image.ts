import { css } from 'styled-components';
import { brUp } from '~/styles/helpers';
import { contentSizes } from '~/styles';

const blogImage = css`
  .b-blog__image {
    position: relative;
    display: block;
    margin: 40px 0;
    box-sizing: border-box;

    ${brUp('x', `
      margin: 60px 0;
    `)}

    & img {
      width: 100% !important;
      display: block;
      margin: 0;
      overflow: hidden;

      &.zooming {
        border: 1px solid ${({ theme }) => (theme.isLight ? theme.secondary3 : theme.secondary2)};
        border-radius: 5px;

        ${brUp('x', `
          border-radius: 10px;
        `)}
      }

      ${({ theme }) => (theme.isLight ? 'filter: none;' : 'filter: brightness(.8) contrast(1.2);')};
    }

    a {
      display: inline-block;
      line-height: 0;
      position: relative;
    }
    img.small {
      //filter: blur(20px);
    }
    img.new {
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .b-blog__image[data-size='normal'] {
    max-width: 531px;
    width: 60%;
  }

  .b-blog__image[data-size='max'] {
    width: ${contentSizes.wide}px;

    @media (max-width: ${contentSizes.wide}px) {
      width: 100%;
    }
  }

  .b-blog__image[data-size='big'] {
    width: 100%;
  }

  ${brUp('md', `
    width: 100%;
  `)}


  .gif-marker {
    display: none;
    position: relative;
    height: 0;

    & span {
      font-family: 'Factor A', Ubuntu, Helvetica, Arial, sans-serif !important;
      font-weight: 700 !important;
      position: absolute;
      top: -50px;
      left: 20px;
      opacity: 0.7;
      line-height: 0.8;
      font-size: 14px;
      padding: 8px 5px 5px;
      border-radius: 12px;
      color: ${({ theme }) => (theme.white)};
      background-color: ${({ theme }) => (theme.black)};
    }
  }

  img[data-original$=".gif"].lazyloaded + .gif-marker,
  img[data-original$=".mp4"].lazyloaded + .gif-marker  {
    display: block;
  }
`;

export default blogImage;
