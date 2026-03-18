const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "https://giphy-app-nu.vercel.app",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});