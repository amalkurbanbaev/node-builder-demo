import css from "@eslint/css";
import { tailwindSyntax } from "@eslint/css/syntax";
import js from "@eslint/js";
import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginRouter from "@tanstack/eslint-plugin-router";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "src/generated"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react": react,
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
        whitelist: ["toaster"],
      },
      react: {
        version: "detect",
      },
    },
    rules: {
      "import/order": "off",
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@tanstack/router/create-route-property-order": "error",
      "react-refresh/only-export-components": "off",
      "object-shorthand": ["warn", "always"],
      "no-empty-function": ["error", { allow: ["arrowFunctions"] }],
      "no-empty": ["error", { allowEmptyCatch: false }],
      "react/no-unknown-property": ["error", { ignore: ["css"] }],
      "no-console": ["error", { allow: ["info", "warn", "error"] }],
      "react/prop-types": "off",
      "react/no-unescaped-entities": ["off"],
    },
  },
  {
    files: ["**/*.css"],
    plugins: {
      css,
    },
    language: "css/css",
    languageOptions: {
      customSyntax: tailwindSyntax,
    },
    rules: {
      "css/no-empty-blocks": "error",
    },
  },
  eslintConfigPrettier,
  ...pluginRouter.configs["flat/recommended"],
  ...pluginQuery.configs["flat/recommended"],
);
