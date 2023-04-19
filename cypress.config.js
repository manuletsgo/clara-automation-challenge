const { defineConfig } = require("cypress")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")

const setupNodeEvents = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)]
    })
  )

  return config
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: '**/*.feature',
    excludeSpecPattern: ['*.js']
  }
})