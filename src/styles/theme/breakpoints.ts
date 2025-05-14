const breakpoints = {
  threshold: {
    mobile: 480,
    tablet: 800,
    desktop: 1200,
    large: 1500,
  },

  pxToRem: (px: number): string => `${px / 16}rem`,

  values: {
    mobile: "",
    tablet: "",
    desktop: "",
    large: "",
  },
};

breakpoints.values = {
  mobile: breakpoints.pxToRem(breakpoints.threshold.mobile),
  tablet: breakpoints.pxToRem(breakpoints.threshold.tablet),
  desktop: breakpoints.pxToRem(breakpoints.threshold.desktop),
  large: breakpoints.pxToRem(breakpoints.threshold.large),
};

export default breakpoints;
