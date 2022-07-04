/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx,vue}'],
  transform: {
    '^.+\\js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  }
}
