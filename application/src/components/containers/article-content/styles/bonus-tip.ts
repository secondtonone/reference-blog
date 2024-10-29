import { css } from 'styled-components';

const bonusTip = css`
  .bonus-tip {
    font-size: 16px;
    line-height: 25.6px;
    margin: 60px 0;
    position: relative;
    background: #ff642d;
    padding: 32px 58px;
    border-radius: 10px;

    p {
      color: #fff !important;
    }
  }

  .bonus-tip > * {
    margin-top: 0 !important;
  }
`;

export default bonusTip;
