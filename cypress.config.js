const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  projectId: 'bs43eh',
  e2e: {
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    env: {
      BASE_URL: 'https://automationexercise.com',
    },
  },
});
