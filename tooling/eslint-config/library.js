const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "prettier", "eslint-config-turbo"],
  plugins: ["only-warn","@typescript-eslint"],
  globals: {
    React: true,
    JSX: true,
    process: 'readonly',
  },
  rules: {
    // 其他规则
    //"no-undef": "off", // 关闭 no-undef 规则 
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off",
  },
  env: {
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
  ],
};
