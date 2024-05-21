/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@solo/eslint-config/react-internal.js"],
  overrides: [
    {
      files: ["*.ts?(x)", "*.js?(x)"],
      rules: {
        "no-unused-vars": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
};
