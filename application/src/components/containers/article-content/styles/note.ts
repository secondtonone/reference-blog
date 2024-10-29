import { css } from 'styled-components';

const note = css`
  p.note {
    color: gray;
    font-size: 1.25rem;
    position: relative;
    padding-left: 1.5rem;
    box-sizing: border-box;
    line-height: 1.7;
    &::before {
      content: '';
      display: block;
      width: 3px;
      height: 100%;
      background: gray;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

export default note;
