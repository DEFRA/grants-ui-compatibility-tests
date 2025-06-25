import allure from 'allure-commandline'

export const config = {
  baseUrl: `https://grants-ui.test.cdp-int.defra.cloud`,
  runner: 'local',
  specs: ['./test/specs/*.js'],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'Chrome',
      'wdio-ics:options': {
        logName: 'win-chrome',
      },
      'goog:chromeOptions': {
        args: [
          '--no-sandbox',
          '--disable-infobars',
          '--disable-gpu',
          '--window-size=1920,1080'
        ]
      }
    }
  ],
  services: [
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
  reporters: [
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
    timeout: 600000
  },
  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    await browser.takeScreenshot()
  },
  onComplete: function (exitCode, config, capabilities, results) {
    const generation = allure(['generate', 'allure-results', '--clean'])

    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(new Error('Could not generate Allure report, timeout exceeded')), 30000)

      generation.on('exit', function (exitCode) {
        clearTimeout(generationTimeout)

        if (exitCode !== 0) {
          return reject(new Error(`Could not generate Allure report, exited with code: ${exitCode}`))
        }

        resolve()
      })
    })
  }
}
