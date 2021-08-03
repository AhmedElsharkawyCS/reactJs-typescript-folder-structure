module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/extensions': 'off',
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-empty-function': 0,
    'react/no-array-index-key': 0,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
