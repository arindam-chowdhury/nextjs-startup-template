const pxToRem = (px: number): string => `${px / 16}rem`;

const modularScale = (base: number, ratio: number, factor: number): string => {
  return pxToRem(base * Math.pow(ratio, factor));
};

const baseFontSize = 16; // in px

const fontSizes = {
  xs: modularScale(baseFontSize, 1.125, -2), // Example: Major Second
  sm: modularScale(baseFontSize, 1.125, -1),
  base: modularScale(baseFontSize, 1.125, 0),
  lg: modularScale(baseFontSize, 1.125, 1),
  xl: modularScale(baseFontSize, 1.125, 2),
  '2xl': modularScale(baseFontSize, 1.125, 3),
  '3xl': modularScale(baseFontSize, 1.125, 4),
  '4xl': modularScale(baseFontSize, 1.125, 5),
  h1: '2em',
  h2: '1.5em',
  h3: '1.17em',
  h4: '1em',
};

export default fontSizes;
