module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-css-modules',
  ],
  rules: {
    'selector-class-pattern': '^[a-z]+([a-zA-Z0-9]*)*$',
  },
}
