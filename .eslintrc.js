module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-shadow': 'warn',
    'no-bitwise': 'off',
    'no-cond-assign': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-async-promise-executor': 'off',
    'no-return-await': 'off',
    'no-plusplus': 'off',
    'no-script-url': 'off',
    'no-nested-ternary': 'off',
    'no-return-assign': 'off',
    'camelcase': 'off',
    'func-names': 'off',
    'eqeqeq': 'warn',
    'radix': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'default-case': 'warn',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^h$',
      },
    ],
  },
  globals: {
    $: false,
    h: false,
    GIT_HASH: false, // inject via webpack defined plugin
  },
};
