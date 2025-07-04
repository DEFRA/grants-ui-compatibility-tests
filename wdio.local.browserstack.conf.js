import allure from 'allure-commandline'
import { browserStackCapabilities } from './wdio.browserstack.capabilities.js'

export const config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_KEY,
  baseUrl: `https://grants-ui.test.cdp-int.defra.cloud`,
  runner: 'local',
  specs: ['./test/specs/*.js'],
  exclude: [],
  maxInstances: 10,
  capabilities: browserStackCapabilities,
  services: [
    [
      'browserstack', {
        testObservability: true,
        testObservabilityOptions: {
          user: process.env.BROWSERSTACK_USERNAME,
          key: process.env.BROWSERSTACK_KEY,
          projectName: 'grants-ui-compatibility-tests',
          buildName: `grants-ui-compatibility-tests-local`
        },
        acceptInsecureCerts: true,
        forceLocal: true,
        browserstackLocal: true
      }
    ],
    [
      "visual", {
        formatImageName: "{logName}-{tag}-{width}x{height}",
        savePerInstance: true,
      }
    ]
  ],
  logLevel: 'info',
  logLevels: {
    webdriver: 'error'
  },
  bail: 1,
  waitforTimeout: 10000,
  waitforInterval: 200,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters:
    [
      'spec',
      [
        'allure',
        {
          outputDir: 'allure-results'
        }
      ]
    ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 600000,
    bail: true
  },
  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    await browser.takeScreenshot()

    if (error) {
      browser.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}'
      )
    }
  },
  onComplete: function (exitCode, config, capabilities, results) {
    const reportError = new Error('Could not generate Allure report')
    const generation = allure(['generate', 'allure-results', '--clean'])

    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 60000)

      generation.on('exit', function (exitCode) {
        clearTimeout(generationTimeout)

        if (exitCode !== 0) {
          return reject(reportError)
        }

        allure(['open'])
        resolve()
      })
    })
  }
}
