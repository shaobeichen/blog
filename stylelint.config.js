module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    indentation: 2,
    'unit-no-unknown': null,
    'property-no-unknown': null,
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': null,
    'font-family-no-missing-generic-family-keyword': null
  }
}
