module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  parser: 'babel-eslint', // uses babel-eslint transforms
  settings: {
    react: {
      version: 'detect' // detect react version
    }
  },
  env: {
    node: true, // defines things like process.env when generating through node
    browser: true,
    'jest/globals': true
  },
  plugins: ['react', 'jest'],
  extends: [
    'react-app',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-unused-vars': 'warn'
  }
}
