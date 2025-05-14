import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    ...require("eslint-config-next/core-web-vitals"),
    extends: [
      "eslint:recommended",
      "airbnb-base",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:jsx-a11y/recommended",
    ],
  },
});

const config = [
  ...compat.config,
  {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true,
    },
    plugins: ["import", "react", "jsx-a11y", "prettier"],
    rules: {
      // Project-specific rules
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "prettier/prettier": "error", // Report Prettier errors as ESLint errors
      "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }],
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.test.js",
            "**/*.spec.js",
            "**/*.test.tsx",
            "**/*.spec.tsx",
            ".storybook/**",
            "**/stories/**",
            "**/__mocks__/**",
            "**/jest.config.js",
            "**/jest.setup.js",
          ],
          optionalDependencies: false,
          peerDependencies: false,
        },
      ],
      "import/no-unresolved": "error",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          special: ["hrefLeft", "hrefRight", "to"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
      indent: ["error", 2, { SwitchCase: 1 }],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
        },
      ],
      "max-len": [
        "warn",
        {
          code: 150,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          moduleDirectory: ["node_modules", "src"],
        },
      },
      react: {
        version: "detect",
      },
    },
    overrides: [
      // Configuration for Next.js files
      {
        files: ["pages/**/*.{js,jsx,ts,tsx}", "app/**/*.{js,jsx,ts,tsx}"],
        rules: {
          "react/display-name": "off",
          "react-hooks/rules-of-hooks": "error",
          "react-hooks/exhaustive-deps": "warn",
        },
      },
      // Configuration for testing files
      {
        files: ["**/*.test.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
        env: {
          jest: true,
        },
        rules: {
          "import/no-extraneous-dependencies": [
            "error",
            {
              devDependencies: [
                "**/*.test.{js,jsx,ts,tsx}",
                "**/*.spec.{js,jsx,ts,tsx}",
              ],
              optionalDependencies: false,
              peerDependencies: false,
            },
          ],
        },
      },
    ],
  },
];

export default config;
