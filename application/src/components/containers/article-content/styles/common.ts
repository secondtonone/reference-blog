import { css } from 'styled-components';
import { brUp } from '~/styles/helpers';

const common = css`
  word-break: break-word;

  & > * {
    margin: 22px 0;
    > * + * {
      margin: 22px 0;
    }
  }

  em {
    font-style: italic;
  }

  hr {
    height: 1px;
    border: 0;
    position: relative;
    width: 100%;
    background: ${({ theme }) => (theme.isLight ? theme.secondary3 : theme.secondary2)};
    margin: 40px 0 !important;

    ${brUp('sm', `
      margin: 60px 0 !important;
    `)}
  }
`;

export default common;
