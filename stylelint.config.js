module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    indentation: 2,
    'font-family-name-quotes': 'always-where-required',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'string-quotes': 'single',
    'rule-empty-line-before': 'never-multi-line',
    'property-no-vendor-prefix': [true, { ignoreProperties: ['background-clip'] }]
  }
}
