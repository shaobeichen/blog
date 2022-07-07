module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 使用 eslint-plugin-vue 解决 Vue3 defineProps、defineEmits、no-undef 规则警告
    // https://eslint.vuejs.org/user-guide/#usage
    'vue/setup-compiler-macros': true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/component-definition-name-casing': ['warn', 'kebab-case'],
    'no-debugger': 'off',
    'no-console': 'off'
  }
}
