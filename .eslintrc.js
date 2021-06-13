module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    mocha: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: { ecmaVersion: 12, sourceType: 'module' },
  overrides: [{ files: 'test/*.js' }],
  plugins: ['vue'],
  rules: {},
};
