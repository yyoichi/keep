module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    quotes: ['error', 'single'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': ['off']
  }
};
