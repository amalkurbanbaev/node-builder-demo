import js from "@eslint/js";
import pluginRouter from "@tanstack/eslint-plugin-router";
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
      "@tanstack/router": pluginRouter,
      react: react,
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
        whitelist: ["toaster"],
        config: "tailwind.config.js",
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
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
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
  }
);
