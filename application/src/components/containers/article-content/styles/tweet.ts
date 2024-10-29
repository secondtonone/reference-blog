import { css } from 'styled-components';

const tweet = css`
  .tweet-click {
    a {
      &:hover {
        color: #428bca;
        text-decoration: none;

        .tweet-click__icon {
          background: #428bca;
          color: #fff;

          svg {
            fill: #fff;
          }
        }
      }

      color: gray;
    }

    .tweet-click__text {
      display: block;
    }

    .tweet-click__icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      margin-top: 30px;
      color: #428bca;
      font-weight: 400;
      font-size: 14px;
      font-style: normal;

      svg {
        fill: #428bca;
        margin-left: 14px;
      }
    }
  }
`;

export default tweet;
