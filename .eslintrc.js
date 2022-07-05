module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/base',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier', '@typescript-eslint'],
  rules: {
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 0,
    'vue/no-multiple-template-root': 'off',
    'vue/component-definition-name-casing': ["warn", "kebab-case"],
    'no-debugger': 'off',
    'no-console': 'off'
  }
}
