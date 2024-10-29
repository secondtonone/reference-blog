import { css } from 'styled-components';

const list = css`
  ul:not(.nav-tabs),
  ol > li ul {
    padding-left: 8px;
    margin-left: 12px;
    box-sizing: border-box;

    & > li {
      list-style-type: disc;
      margin: 10px 0 0;
      word-wrap: break-word;
    }
  }

  ul {
    padding-left: 20px;
  }

  ol,
  ul > li ol {
    list-style-type: decimal;
    padding-left: 19px;
    box-sizing: border-box;

    & > li {
      list-style-type: decimal;
      margin: 10px 0;
    }
  }

  ul li,
  ol li {
    a {
      color: ${({ theme }) => (theme.orangeBrand)} !important;
    }
  }

  ul a:hover {
    color: ${({ theme }) => (theme.orangeBrand)} !important;
  }
`;

export default list;
