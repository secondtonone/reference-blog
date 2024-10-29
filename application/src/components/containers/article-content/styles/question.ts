import { css } from 'styled-components';

const question = css`
  p.question {
    font-weight: 600;
    font-size: 1.5rem;
    position: relative;
    &::before {
      content: '—';
      position: absolute;
      left: -25px;
      top: 0;
    }
  }
`;

export default question;
