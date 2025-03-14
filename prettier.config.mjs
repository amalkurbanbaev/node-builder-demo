/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "auto",
  jsxSingleQuote: false,
  importOrder: [
    "<BUILTIN_MODULES>", // built-in modules
    "",
    "^(react|react-dom|vite)$", // react modules
    "",
    "<THIRD_PARTY_MODULES>", // third-party modules
    "",
    "^@/", // absolute imports
    "",
    "<TYPES>^(node:)",
    "<TYPES>",
    "<TYPES>^[.]",
    "",
    "^[.]", // relative imports
  ],
  plugins: ["prettier-plugin-packagejson", "@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  printWidth: 120,
  quoteProps: "consistent",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  tailwindFunctions: ["cva", "cn"],
  trailingComma: "all",
  useTabs: false,
  tailwindStylesheet: "/src/styles/index.css",
};

export default config;
