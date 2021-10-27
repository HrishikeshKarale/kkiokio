module.exports = {
  plugins: ["cypress"],
  env: {
    mocha: true,
    "cypress/globals": true
  },
  rules: {
    strict: "off",
    "no-console": "off",
    "vue/no-v-for-template-key": "off",
    "vue/no-use-v-if-with-v-for": "off",
  }
};
