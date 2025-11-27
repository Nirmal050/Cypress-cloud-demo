const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "mm8ohg",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
