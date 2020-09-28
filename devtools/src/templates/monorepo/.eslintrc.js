module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],

  extends: ['eslint:recommended', 'prettier'],
  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true
  },

  rules: {
    'prefer-promise-reject-errors': 'off',
    quotes: ['warn', 'single', { avoidEscape: true }],
    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'warning' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warning' : 'off',
    // Custom
    //* 'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'simple-import-sort/sort': 'error'
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
      plugins: ['vue'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        // See https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        'plugin:vue/essential',
        'prettier/vue'
      ],
      // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
      // See https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
      // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        project: './tsconfig.json',
        extraFileExtensions: ['.vue']
      },
      // add your custom rules here
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
        // '@typescript-eslint/camelcase': 'warn', // ? hasura snake/camel case names?
        '@typescript-eslint/no-empty-interface': 'warn'
      }
    }
  ]
}
