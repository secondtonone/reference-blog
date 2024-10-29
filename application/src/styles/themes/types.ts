import {
  ThemeNames,
  GroupsTokens,
} from '../palette';

export interface TechnicalTokens {
  lightMuted: string;
  transparent: string;
  accentWarning: string;
  tagMuted: string;
}

export interface ThemeName {
  name: ThemeNames;
}

export interface Theme extends ThemeName, GroupsTokens, TechnicalTokens {}

export interface IThemes {
  dark: Theme & TechnicalTokens;
  light: Theme & TechnicalTokens;
}
