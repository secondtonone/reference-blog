import { RGBColor, hexToRgb } from './contrast';

const rgbToString = ({ r, g, b }: RGBColor): string => `${r}, ${g}, ${b}`;

const getColorProperty = (color: string, opacity?: number): string => (opacity ? `rgba(${rgbToString(hexToRgb(color))}, ${opacity})` : `rgb(${rgbToString(hexToRgb(color))})`);

export { rgbToString, getColorProperty };
