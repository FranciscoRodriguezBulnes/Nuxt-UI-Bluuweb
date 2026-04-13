module.exports = {
  extends: ['@nuxt/eslint-config', 'plugin:prettier/recommended'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never']
  }
}
