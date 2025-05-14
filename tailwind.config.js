/** @type {import('tailwindcss').Config} */

import {
  colors as baseColors,
  fontSizes,
  borders,
  screens,
} from "./src/styles/index";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ...baseColors,
      },
    },
    fontSize: {
      ...fontSizes,
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      retina: "1.6rem",
      desktop: "1.5rem",
      tablet: "1.4rem",
      mobile: "1.3rem",
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    letterSpacing: {
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      default: "0.01em",
      large: "0.02em",
      // Add more letter spacing variations
    },
    screens: screens.screens,
    borderWidth: borders.borderWidth,
    borderRadius: borders.borderRadius,
  },

  plugins: [],
};
