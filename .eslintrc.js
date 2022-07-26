module.exports = {
  'env': {
    'es2021': true,
    'jest': true,
    'react-native/react-native': true,
  },
  'extends': [
    'plugin:react-hooks/recommended',
    'prettier',
    'google',
    'plugin:react/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'react-native',
    '@typescript-eslint',
  ],
  'rules': {
    'max-len': 'off',
    'semi': ['error', 'never'],
    '@typescript-eslint/semi': 'off',
    'require-jsdoc': 0,
    'comma-dangle': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-multi-spaces': 'error',
    'array-bracket-spacing': 1,
    'computed-property-spacing': 1,
    'object-curly-spacing': ['off', 'never'],
    'space-before-function-paren': 0,
    'new-cap': 0,
    'eol-last': 0,
    'indent': [2, 2, { 'SwitchCase': 1 }]
  }
}
