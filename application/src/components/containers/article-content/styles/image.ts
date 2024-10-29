import { css } from 'styled-components';

const image = css`
  ul li img,
  ol li img {
    max-width: 100%;
    height: auto;
  }

  .img {
    display: flex;
    flex-direction: column;
    margin: 60px 0;
    max-width: 660px;

    img + span {
      margin-top: 16px;
      color: #898d9a;
      font-size: 14px;
      line-height: 22px;
    }
  }

  p img {
    max-width: 100%;
  }

  p img:not(.small) {
    height: auto;
  }
`;

export default image;
