const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implementa eventos se necessário
    },
    baseUrl: 'https://www.saucedemo.com',
  }
});
