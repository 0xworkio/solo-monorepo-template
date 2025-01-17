/** @type {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} */
module.exports = {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    plugins: [
      '@ianvs/prettier-plugin-sort-imports',
      'prettier-plugin-tailwindcss',
    ],
    importOrder: [
      '',
      '^react$',
      '^next(-[^/]+)?(/.*)?$',
      '',
      '<TYPES>',
      '<TYPES>^[.]',
      '',
      '<BUILTIN_MODULES>',
      '',
      '<THIRD_PARTY_MODULES>',
      '',
      '^@solo/(.*)$',
      '',
      '^@/(.*)$',
      '',
      '^[./]',
      '',
      '^(?!.*[.]css$)[./].*$',
      '.css$',
    ],
    importOrderTypeScriptVersion: '5.4.5',
  };