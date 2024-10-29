import { css } from 'styled-components';

const blogTocContent = css`
  .b-blog__toc__content {
    list-style: none !important;
    margin: 0;
    padding: 0;

    ul {
      list-style: none !important;
      padding: 0;
      margin-top: 0.5rem;
      margin-left: 2.4rem;
    }

    li {
      padding-bottom: 8px;
      list-style: none;
      margin: 0;
      + li {
        margin: 0;
      }

      & a {
        border-bottom: 1px dotted rgb(255, 100, 45);

        &:active {
          color: inherit !important;
        }

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
`;

export default blogTocContent;
