module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'airbnb-base',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'common',
    },
    rules: {
      "no-console": "off",
      "enforceInMethodNames": true ,
      "no-shadow": "off",
      "no-unused-vars": "off",
      "no-underscore-dangle": [2, { "allow": ["_"], "allowAfterThis": false }]
    },
  };