module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-console": 0,
    "vue/no-v-model-argument": 0,
    "vue/no-mutating-props": 0,
  },
};
