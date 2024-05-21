// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ["apps/**", "packages/**","!**/*.{ts,tsx,js,jsx}"],
  extends: ["@solo/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
