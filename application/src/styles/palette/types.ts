import variants from './variants';

export type ThemeNames = typeof variants[number];

export type ColorProps = [ColorName: string, ColorCode: string];
export type ColorVariants = ColorProps[];
export type Color<T> = [T, ...ColorVariants];
export type Group<T> = Color<T>[];

export interface BrandGroupTokens {
  purpleBrand: string;
  orangeBrand: string;
  yellow: string;
}

export interface MainGroupTokens extends BrandGroupTokens {
  error: string;
  success: string;
  topic: string;
}

export type MainGroup = Group<keyof MainGroupTokens>;

export interface IllustGroupTokens {
  purpleIllust: string;
  orangeIllust: string;
  yellowIllust: string;
  greenIllust: string;
  blueIllust: string;
  orangePaleIllust: string;
  redPaleIllust: string;
  greenGrassIllust: string;
  pinkIllust: string;
}

export type IllustGroup = Group<keyof IllustGroupTokens>;

export interface GreysGroupTokens {
  secondary5: string;
  secondary4: string;
  secondary3: string;
  secondary2: string;
  secondary1: string;
}

export type GreysGroup = Group<keyof GreysGroupTokens>;

export interface SupportGroupTokens {
  background: string;
  textColor: string;
  opposed: string;
  white: string;
  black: string;
  orangeDark: string;
  orangeDarkest: string;
  orangeBackground: string;
  newGrey: string;
}

export interface WidgetGroupTokens {
  blue: string;
  green: string;
  greenLight: string;
  greenGrassIllust: string;
  yellowPD: string;
  purpleBrand: string;
}

export type BannerColors = IllustGroupTokens & BrandGroupTokens;

export type BannerColorsKey = keyof BannerColors;

export type SupportGroup = Group<keyof SupportGroupTokens>;

export type WidgetGroup = Group<keyof WidgetGroupTokens>;

export interface GroupsTokens extends MainGroupTokens,
IllustGroupTokens, GreysGroupTokens, SupportGroupTokens {}

export type Groups = Array<MainGroup | IllustGroup | GreysGroup | SupportGroup | WidgetGroup>;

export type BannerColor = keyof (GroupsTokens & WidgetGroupTokens);
