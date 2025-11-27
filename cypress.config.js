const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "nr27pi",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
