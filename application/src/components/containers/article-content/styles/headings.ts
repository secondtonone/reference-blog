import { css } from 'styled-components';
import { typographyFonts } from '~/styles';
import { brUp } from '~/styles/helpers';

const headings = css`
  h2,
  h3,
  h4,
  h5 {
    margin-top: -10px !important;
    padding-top: 30px !important;

    ${brUp('x', `
      margin-top: -30px !important;
      padding-top: 60px !important;
    `)}

    ${brUp('xm', `
      margin-top: -40px !important;
      padding-top: 80px !important;
    `)}

    ${brUp('sm', `
      margin-top: -60px !important;
      padding-top: 120px !important;
    `)}
  }

  article > h2:first-child,
  h2 + h3,
  h3 + h4,
  h4 + h5 {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }

  h2, h2 * {
    font-size: ${typographyFonts.mobile.h2.size} !important;
    line-height: ${typographyFonts.mobile.h2.height} !important;
    margin-bottom: 16px;

    ${brUp('x', `
      margin-bottom: 24px;
    `)}

    ${brUp('xm', `
      font-size: ${typographyFonts.desc.h2.size} !important;
      line-height: ${typographyFonts.desc.h2.height} !important;
      margin-bottom: 32px;
    `)}
  }

  h3, h3 * {
    font-size: ${typographyFonts.mobile.h3.size} !important;
    line-height: ${typographyFonts.mobile.h3.height} !important;
    margin-bottom: 16px;

    ${brUp('xm', `
      font-size: ${typographyFonts.desc.h3.size} !important;
      line-height: ${typographyFonts.desc.h3.height} !important;
      margin-bottom: 24px;
    `)}
  }

  h4, h4 * {
    font-size: ${typographyFonts.mobile.h4.size} !important;
    line-height: ${typographyFonts.mobile.h4.height} !important;
    margin-bottom: 16px;

    ${brUp('xm', `
      font-size: ${typographyFonts.desc.h4.size} !important;
      line-height: ${typographyFonts.desc.h4.height} !important;
      margin-bottom: 20px;
    `)}
  }

  h5, h5 * {
    font-size: ${typographyFonts.mobile.h5.size} !important;
    line-height: ${typographyFonts.mobile.h5.height} !important;
    margin-bottom: 16px;

    ${brUp('xm', `
      font-size: ${typographyFonts.desc.h5.size} !important;
      line-height: ${typographyFonts.desc.h5.height} !important;
      margin-bottom: 16px;
    `)}
  }

  h2,
  h3,
  h4,
  h5 {
    address,
    caption,
    cite,
    code,
    dfn,
    em,
    optgroup,
    th,
    var {
      font-style: normal;
    }

    span {
      font-size: inherit;
      line-height: inherit;
      color: inherit;
    }

    & + p {
      margin-top: 0;
    }
  }
`;

export default headings;
