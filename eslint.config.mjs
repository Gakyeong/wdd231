import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  {
    rules: { semi: "warn", "no-unused-vars": "off" },
  },
];