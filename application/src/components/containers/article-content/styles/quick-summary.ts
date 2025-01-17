import { css } from 'styled-components';

const quickSummary = css`
  .quick-summary {
    padding-bottom: 2px;
    position: relative;

    .quick-summary-heading {
      text-transform: uppercase;
      font-weight: 700;

      @media (min-width: 768px) {
        font-size: 1.7rem;
      }
    }

    hr {
      max-width: 100%;
      width: 100%;
    }

    li {
      list-style-type: none;
      position: relative;
      padding-left: 22px;

      @media (min-width: 768px) {
        padding-left: 50px;
      }

      &:before {
        content: '';
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 2.65823 2.73418 0 6 0C9.34177 0 12 2.65823 12 6C12 9.34177 9.34177 12 6 12C2.65823 12 0 9.34177 0 6ZM10.4495 6.18804C10.4495 6.729 10.1791 6.81916 9.48784 6.81916C8.76657 6.81916 8.64636 6.69894 8.5562 6.15799C8.40593 4.77555 7.47429 3.60348 5.91153 3.48327C5.43068 3.45321 5.28042 3.24284 5.28042 2.64178C5.28042 2.07077 5.37057 1.8003 5.82137 1.8003C8.5562 1.77024 10.4495 3.96412 10.4495 6.18804Z" fill="${({ theme }) => encodeURIComponent(theme.isDark ? theme.white : theme.black)}"/></svg>');
        position: absolute;
        width: 8px;
        height: 8px;
        left: 0;
        top: 8px;
        background-size: contain;

        @media (min-width: 768px) {
          left: 24px;
          width: 12px;
          height: 12px;
        }
      }
    }

    ul {
      margin-top: 24px;
      padding-left: 0;
    }
  }
`;

export default quickSummary;
