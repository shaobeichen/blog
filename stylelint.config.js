module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    indentation: 2,
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'string-quotes': 'single',
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'at-rule-empty-line-before': [
      'always',
      { ignore: ['inside-block', 'blockless-after-same-name-blockless'] }
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: [
          'after-rule',
          'after-single-line-comment',
          'first-nested',
          'inside-block',
          'inside-block-and-after-rule'
        ],
        ignore: ['after-comment', 'first-nested', 'inside-block']
      }
    ],
    'property-no-vendor-prefix': [true, { ignoreProperties: ['background-clip'] }]
  }
}
