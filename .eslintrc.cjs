module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'jsx-a11y', 'import', 'prettier',],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'max-len': ['error', { 'code': 100 }],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'no-return-assign': ['off'],
    'import/prefer-default-export': 'off',
    'ban-ts-comment': 'off',
    'import/extensions': [
      'error',
      'never',
      {
        'ts': 'never',
        'tsx': 'never',
        'js': 'never',
        'jsx': 'never',
        'scss': 'always',
        'css': 'always'
      }
    ],
    'import/no-cycle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'all',
        'endOfLine': 'auto'
      }
    ],
    'react/prop-types': 0,
    'no-param-reassign': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': ['error', { 'ignoreRestArgs': true }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  },
}
