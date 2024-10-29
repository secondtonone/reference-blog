import { css } from 'styled-components';

const topicsToDiscuss = css`
  .topics-to-discuss {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    color: #f9b159;
    box-sizing: border-box;
    margin-top: 52px !important;
    margin-bottom: 32px !important;
    font-size: 30px;
    font-weight: bold;
    &::before {
      display: block;
      content: "";
      //background: url(staticImage("assets/images/svg/bulb-m.svg")) center center no-repeat;
      margin-right: 20px;
      width: 22px;
      height: 22px;
    }
  }
`;

export default topicsToDiscuss;
