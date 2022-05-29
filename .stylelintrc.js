module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    'rule-empty-line-before': 'never',
  },
}
