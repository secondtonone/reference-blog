export type RGBColor = { r: number; g: number; b: number };

const hexToRgb = (hex: string): RGBColor => {
  const result = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex);
  return result
    ? {
      r: Number.parseInt(result[1], 16),
      g: Number.parseInt(result[2], 16),
      b: Number.parseInt(result[3], 16)
    }
    : {
      r: 255,
      g: 255,
      b: 0
    };
};

const rgbToString = ({ r, g, b }: RGBColor): string => `${r}, ${g}, ${b}`;

const getLuminance = (values: RGBColor): number => {
  const rgb = Object.values(values).map(v => {
    const val = v / 255;
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
};

const getContrastRatio = (first: RGBColor, second: RGBColor): number => {
  const lumFirst = getLuminance(first);
  const lumSecond = getLuminance(second);

  return (Math.max(lumFirst, lumSecond) + 0.05) / (Math.min(lumFirst, lumSecond) + 0.05);
};

const getColorByContrast = ({
  main,
  light = '#FFFFFF',
  dark = '#000000'
}: {
  main: string;
  light?: string;
  dark?: string;
}): string => {
  const RGBMain: RGBColor = hexToRgb(main);
  const RGBLight: RGBColor = hexToRgb(light);
  const RGBDark: RGBColor = hexToRgb(dark);

  return getContrastRatio(RGBMain, RGBLight) > getContrastRatio(RGBMain, RGBDark)
    ? light
    : dark;
};

export {
  hexToRgb,
  rgbToString,
  getColorByContrast,
  getLuminance,
  getContrastRatio
};
