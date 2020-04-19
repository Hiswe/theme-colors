module.exports = {
  parser: `vue-eslint-parser`,
  // parserOptions: {
  //   ecmaVersion: 2019,
  //   sourceType: `module`,
  // },
  parserOptions: {
    parser: `babel-eslint`,
  },
  extends: [
    `@nuxtjs`,
    `prettier`,
    `prettier/vue`,
    `plugin:prettier/recommended`,
    `plugin:nuxt/recommended`,
  ],
  plugins: [
    `prettier`,
    // https://github.com/selaux/eslint-plugin-filenames
    `filenames`,
    // https://www.npmjs.com/package/eslint-plugin-import
    `import`,
  ],
  // add your custom rules here
  // https://prettier.io/docs/en/integrating-with-linters.html#recommended-configuration
  // extends: [`plugin:prettier/recommended`, `plugin:vue/base`],
  // plugins: [],
  rules: {
    'no-void': `off`,
    'nuxt/no-cjs-in-config': `off`,
    // 'vue/require-prop-type-constructor': `off`,
    'camelcase': [
      `error`,
      {
        allow: [],
      },
    ],
    'eqeqeq': [`error`, `always`, { null: `ignore` }],
    'no-var': [`error`],
    'quotes': [`error`, `backtick`],
    'import/extensions': [`error`, `always`],
    // we support [0-9] because of vue-18n name only
    'filenames/match-regex': [`error`, `^.?([a-z0-9]+)([a-z0-9.-]+)$`],
    'vue/component-definition-name-casing': [`error`, `kebab-case`],
    'vue/no-unused-components': [`warn`],
    // 'vue/max-len': [
    //   `error`,
    //   {
    //     code: 80,
    //     tabWidth: 2,
    //     ignoreHTMLAttributeValues: true,
    //   },
    // ],
    // 'vue/script-indent': [`error`, 2, { baseIndent: 0 }],
    // 'vue/html-indent': [
    //   `error`,
    //   2,
    //   {
    //     baseIndent: 1,
    //   },
    // ],
    // 'vue/max-attributes-per-line': [
    //   `error`,
    //   {
    //     singleline: 1,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: true,
    //     },
    //   },
    // ],
  },
  overrides: [
    {
      files: [`pages/**/*.vue`],
      rules: {
        // because of nuxt: https://nuxtjs.org/guide/directory-structure/
        'filenames/match-regex': [`error`, `^([_a-zA-Z0-9]+)([a-zA-Z0-9.-]+)$`],
      },
    },
  ],
  ignorePatterns: [`/.nuxt`, `/dist`],
}
