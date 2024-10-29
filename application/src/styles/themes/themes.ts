import palette, { ThemeNames, variants, fromPalette } from '../palette';
import { Theme, IThemes, TechnicalTokens } from './types';

const technical: TechnicalTokens = {
  transparent: 'transparent',
  tagMuted: '#F6F7F8',
  lightMuted: 'rgba(255, 255, 255, 0.6);',
  accentWarning: '#FF8157'
};

const themeMaker = (): IThemes => variants.reduce((themes, theme: ThemeNames, index: number) => {
  themes[theme] = {
    ...fromPalette<Theme>(palette, index),
    ...technical,
  };
  return themes;
}, {}) as IThemes;

const themes = themeMaker();

export default themes;
