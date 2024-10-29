import {
  breakpoints,
  mediaQueries,
  space,
  zIndices,
  fontSizes,
  fontWeights,
} from '.';
import themes from '../themes';

const getScheme = (isDark = false) => {
  const COLOR_SCHEME_CURRENT = isDark ? 'dark' : 'light';
  const COLOR_SCHEME_DARK = COLOR_SCHEME_CURRENT === 'dark';
  const COLOR_SCHEME_LIGHT = COLOR_SCHEME_CURRENT === 'light';

  return {
    ...themes[COLOR_SCHEME_CURRENT],
    name: COLOR_SCHEME_CURRENT,
    isDark: COLOR_SCHEME_DARK,
    isLight: COLOR_SCHEME_LIGHT,
    breakpoints,
    mediaQueries,
    space,
    zIndices,
    fontSizes,
    fontWeights,
  };
};

export default getScheme;
