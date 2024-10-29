import { css } from 'styled-components';

const link = css`
  a:not([data-test]),
  table td a {
    color: ${({ theme }) => (theme.isLight ? theme.black : theme.white)};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.orangeBrand} !important;
    }
  }


  p a {
    color: ${({ theme }) => theme.orangeBrand};
  }
`;

export default link;
