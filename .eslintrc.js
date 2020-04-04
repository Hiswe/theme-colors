module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: `module`,
    },
    // https://prettier.io/docs/en/integrating-with-linters.html#recommended-configuration
    extends: [`plugin:prettier/recommended`, 'plugin:vue/base'],
    plugins: [
        // https://github.com/selaux/eslint-plugin-filenames
        `filenames`,
        // https://www.npmjs.com/package/eslint-plugin-import
        `import`,
    ],
    rules: {
        // datasource_id from images-form.vue component
        // access_token, refresh_token, grant_type, client_id, client_secret from app_server_static/auth.js
        'camelcase': [
            `error`,
            {
                allow: [
                    `datasource_id`,
                    `access_token`,
                    `refresh_token`,
                    `grant_type`,
                    `client_id`,
                    `client_secret`,
                    `redirect_uri`,
                    `kc_locale`,
                ],
            },
        ],
        'eqeqeq': [`error`, `always`, { null: `ignore` }],
        'no-var': [`error`],
        'quotes': [`error`, `backtick`],
        'import/extensions': [`error`, `always`],
        // we support [0-9] because of vue-18n name only
        'filenames/match-regex': [`error`, `^([a-z0-9]+)([a-z0-9\.-]+)$`],
    },
    overrides: [
        {
            files: ['app_vue/pages/**/*.vue'],
            rules: {
                // because of nuxt: https://nuxtjs.org/guide/directory-structure/
                'filenames/match-regex': [`error`, `^([_a-zA-Z0-9]+)([a-zA-Z0-9\.-]+)$`],
            },
        },
    ],
    ignorePatterns: [`/dist`],
};
