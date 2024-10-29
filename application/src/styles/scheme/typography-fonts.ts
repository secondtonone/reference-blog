import fontWeights, { IFontWeights } from './font-weights';

interface TextType {
  size: string;
  weight: string | number;
  height: string;
  transform?: string;
}

interface PlatformType {
  h1: TextType;
  h2: TextType;
  h3: TextType;
  h4: TextType;
  h5: TextType;
  lead: TextType;
  regular: TextType;
  small: TextType;
  'extra-small': TextType;
  decorative: TextType;
  quote: TextType;
  menu: TextType;
}

export interface TypographyFonts {
  fontFamily: {
    accent: string;
    content: string;
  };
  fontWeights: IFontWeights,
  desc: PlatformType;
  mobile: PlatformType;
}

const typography: TypographyFonts = {
  fontFamily: {
    accent: 'Factor A',
    content: 'Inter',
  },
  fontWeights,
  desc: {
    h1: {
      size: '48px',
      weight: fontWeights.bold,
      height: '58px',
    },
    h2: {
      size: '42px',
      weight: fontWeights.bold,
      height: '50px',
    },
    h3: {
      size: '32px',
      weight: fontWeights.bold,
      height: '38px',
    },
    h4: {
      size: '26px',
      weight: fontWeights.bold,
      height: '31px',
    },
    h5: {
      size: '22px',
      weight: fontWeights.bold,
      height: '29px',
    },
    lead: {
      size: '20px',
      weight: fontWeights.normal,
      height: '32px',
    },
    regular: {
      size: '16px',
      weight: fontWeights.normal,
      height: '26px',
    },
    small: {
      size: '14px',
      weight: fontWeights.normal,
      height: '22px',
    },
    'extra-small': {
      size: '12px',
      weight: fontWeights.normal,
      height: '19px',
    },
    decorative: {
      size: '20px',
      weight: fontWeights.bold,
      height: '30px',
      transform: 'uppercase',
    },
    quote: {
      size: '36px',
      weight: fontWeights.accent,
      height: '47px',
    },
    menu: {
      size: '14px',
      weight: fontWeights.normal,
      height: '21px',
      transform: 'uppercase',
    },
  },
  mobile: {
    h1: {
      size: '28px',
      weight: fontWeights.bold,
      height: '34px',
    },
    h2: {
      size: '24px',
      weight: fontWeights.bold,
      height: '31px',
    },
    h3: {
      size: '22px',
      weight: fontWeights.bold,
      height: '29px',
    },
    h4: {
      size: '20px',
      weight: fontWeights.bold,
      height: '28px',
    },
    h5: {
      size: '18px',
      weight: fontWeights.bold,
      height: '24px',
    },
    lead: {
      size: '16px',
      weight: fontWeights.normal,
      height: '24px',
    },
    regular: {
      size: '14px',
      weight: fontWeights.normal,
      height: '22px',
    },
    small: {
      size: '12px',
      weight: fontWeights.normal,
      height: '19px',
    },
    'extra-small': {
      size: '10px',
      weight: fontWeights.normal,
      height: '15px',
    },
    decorative: {
      size: '16px',
      weight: fontWeights.bold,
      height: '24px',
      transform: 'uppercase',
    },
    quote: {
      size: '22px',
      weight: fontWeights.accent,
      height: '29px',
    },
    menu: {
      size: '14px',
      weight: fontWeights.normal,
      height: '21px',
      transform: 'uppercase',
    },
  },
};

export default typography;
