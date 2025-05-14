const colorPrimitives = {
  // Whites
  white: "#FAFAFF",
  whiteBright: "#FFFFFF",
  whiteSmoke: "#F5F5F5",

  // Blacks
  black: "#17171A",
  blackBright: "#2A2A2F",
  blackTransparent85: "rgba(0, 0, 0, 0.85)",
  blackTransparent65: "rgba(0, 0, 0, 0.65)",
  blackTransparent45: "rgba(0, 0, 0, 0.45)",

  // Greys
  grey: "#46494C",
  greyBright: "#E8E8E8",

  // Reds
  red: "#F25F5C",
  redBright: "#E63946",

  // Greens
  green: "#00A896",
  greenBright: "#02C39A",

  // Blues
  blue: "#41ADDD",
  blueBright: "#00A8E8",
  blueBrand: "#00A5DD",

  // Yellows
  yellow: "#E9C46A",
  yellowBright: "#FFE066",

  // Magentas
  magenta: "#9F6D99",
  magentaBright: "#CFBAE1",

  // Cyans
  cyan: "#70C1B3",
  cyanBright: "#A5FFD6",
};

const colors = {
  ...colorPrimitives,

  // Brand Colors (using 'app-' prefix for clarity)
  "app-brand-blue": colorPrimitives.blueBrand,
  "app-brand-black": colorPrimitives.blackTransparent85,
  "app-brand-dark-grey": colorPrimitives.blackTransparent65,
  "app-brand-grey": colorPrimitives.blackTransparent45,
  "app-brand-light-grey": colorPrimitives.greyBright,
  "app-brand-white-smoke": colorPrimitives.whiteSmoke,
  "app-brand-white": colorPrimitives.whiteBright,

  // Special Colors
  "app-special-mask": colorPrimitives.blackTransparent45,

  // Semantic Colors (using 'app-' prefix)
  "app-bg-default": colorPrimitives.white,
  "app-bg-elements": colorPrimitives.greyBright,
  "app-bg-special": colorPrimitives.blueBrand,
  "app-bg-footer": colorPrimitives.blackTransparent65,

  "app-fg-default": colorPrimitives.black,
  "app-fg-elements": colorPrimitives.black,
  "app-fg-special": colorPrimitives.white,
  "app-fg-heading": colorPrimitives.blueBrand,
  "app-fg-footer": colorPrimitives.white,

  // Link Colors (using 'app-' prefix)
  "app-link-default": colorPrimitives.blueBrand,
  "app-link-hover": colorPrimitives.black,
  "app-link-visited": colorPrimitives.blueBrand,
  "app-link-elements-normal": colorPrimitives.black,
  "app-link-elements-hover": colorPrimitives.blueBrand,
  "app-link-elements-visited": colorPrimitives.black,
  "app-link-elements-active": colorPrimitives.blueBrand,
  "app-link-special-normal": colorPrimitives.white,
  "app-link-special-hover": colorPrimitives.whiteSmoke,
  "app-link-special-visited": colorPrimitives.white,

  // Border Color (using 'app-' prefix)
  "app-border-default": colorPrimitives.greyBright,

  // Button Colors (using 'app-' prefix)
  "app-button-cta-bg": colorPrimitives.blueBrand,
  "app-button-cta-fg": colorPrimitives.white,
};

export { colors };
