module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  customSyntax: '@stylelint/postcss-css-in-js',
  plugins: ['stylelint-order'],
  rules: {
    'rule-empty-line-before': 'never',
    'order/properties-alphabetical-order': true,
  },
}