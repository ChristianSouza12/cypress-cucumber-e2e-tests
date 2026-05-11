const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild")
const { defineConfig } = require("cypress")

module.exports = defineConfig({
  allowCypressEnv: true,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    specPattern: "**/*.feature",
    defaultCommandTimeout: 3000,

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)

      require("cypress-mochawesome-reporter/plugin")(on)

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )

      return config
    },
  },
})