const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:vue/vue3-essential', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: path.resolve(__dirname, 'tsconfig.eslint.json'),
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'import/no-extraneous-dependencies': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
  },
};
