import { css } from 'styled-components';
import { brUp } from '~/styles/helpers';
import FontWeights from '~/styles/scheme/font-weights';

const table = css`
  article {
    table:not(.events__table-body) {
      margin: 40px 0;
      display: block;
      border-collapse: collapse;
      overflow-x: auto;
      width: 90vw;

      ${brUp('sm', `
        margin: 60px 0;
        display: table;
        width: 100%;
      `)}

      td {
        padding: 16px;
        vertical-align: top;
        max-width: 350px;
        min-width: 75px;

        ${brUp('sm', `
          padding: 21px 24px;
        `)}
      }

      tbody td,
      thead + tbody tr:first-child td {
        font-size: 12px;
        line-height: 1.6;
        font-weight: ${FontWeights.light};

        ${brUp('sm', `
          font-size: 14px;
        `)}
      }

      tbody tr:nth-child(odd),
      thead + tbody tr:nth-child(even) {
        background: ${({ theme }) => theme.secondary1};
      }

      thead + tbody tr:nth-child(odd) {
        background: transparent;
      }

      thead, tbody tr:first-child {
        background: ${({ theme }) => theme.secondary1};

        td {
          font-size: 14px;
          line-height: 1.4;
          font-weight: ${FontWeights.accent};

          ${brUp('sm', `
            font-size: 16px;
          `)}
        }
      }

      thead + tbody tr:first-child {
        background: transparent;
      }
    }
  }
`;

export default table;
