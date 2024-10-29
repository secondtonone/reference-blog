import { css } from 'styled-components';
import { getColorProperty, brUp } from '~/styles/helpers';
import { typographyFonts } from '~/styles';

const blockquote = css`
  blockquote:not(.Tweet) {
    position: relative;
    font-weight: 400;
    color: currentColor;
    min-height: 50px;
    background: ${({ theme }) => (theme.isLight ? getColorProperty(theme.orangeBrand, 0.1) : theme.orangeBackground)};
    margin: 40px 0;
    border-radius: 0;
    padding: 40px 14px;
    display: flex;
    flex-direction: column;

    ${brUp('x', `
      padding: 40px 24px;
    `)}

    ${brUp('sm', `
      margin: 60px 0;
      padding: 75px 32px 60px;
      border-radius: 10px;
    `)}

    ${brUp('lg', `
      margin: 40px 0 60px;
      padding: 62px 32px;
    `)}

    p + p {
      margin: 1rem 0;
    }

    & .quote {
      margin-top: 24px;

      ${brUp('sm', `
        margin-top: 44px;
      `)}

      ${brUp('lg', `
        margin-top: 24px;
      `)}
    }

    & .author {
      position: relative;

      font-size: 20px;
      line-height: 1.2;
      font-family: ${typographyFonts.fontFamily.accent};

      ${brUp('sm', `
        font-size: 26px;
      `)}
    }

    & .author-job {
      font-family: ${typographyFonts.fontFamily.content};
      color: ${({ theme }) => theme.secondary5};
      font-size: 12px;
      margin-top: 4px;
      line-height: 1;

      ${brUp('sm', `
        margin-top: 8px;
        font-size: 14px;
      `)}
    }

    &::before {
      content: ' ';
      background-size: 100%;
      background: no-repeat url('data:image/svg+xml;utf8,<svg viewBox="0 0 51 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.6 0.759766C49.1067 6.94644 47.6133 13.6664 46.12 20.9198C44.6267 28.0664 43.4533 34.4131 42.6 39.9598H27.4L26.28 38.1998C27.7733 32.5464 29.8 26.3598 32.36 19.6398C34.92 12.8131 37.5333 6.51977 40.2 0.759766H50.6ZM24 0.759766C22.5067 6.94644 21.0133 13.6664 19.52 20.9198C18.0267 28.0664 16.8533 34.4131 16 39.9598H0.96L0 38.1998C1.49333 32.5464 3.46667 26.3598 5.92 19.6398C8.48 12.8131 11.0933 6.51977 13.76 0.759766H24Z" fill="${({ theme }) => encodeURIComponent(theme.orangeBrand)}"/></svg>');
      height: 20px;
      width: 31px;
      position: absolute;
      left: -3px;
      top: 30px;

      ${brUp('x', `
        left: 6px;
        top: 30px;
      `)}

      ${brUp('sm', `
        top: 50px;
        left: -20px;
        height: 39px;
        width: 50px;
      `)}
    }
  }
`;

export default blockquote;
