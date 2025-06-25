# grants-ui-compatibility-tests

This is the cross-browser compatibility test suite for non-land based grant application journeys maintained by Grant Application Enablement (GAE) team. The test suite uses BrowserStack and WebdriverIO to run tests against the following browsers:

- Windows 11
  - Chrome
  - Edge
  - Firefox
- Mac OS X Sequoia
  - Chrome
  - Safari
  - Firefox
- Mac OS X Monterey
  - Safari 15.6
- iOS on iPhone 16
  - Chrome
  - Safari
- Android on Samsung Galaxy S23
  - Chrome
  - Samsung Internet

The supported browsers are the latest versions and follow the recommendations for government services given here: https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices.

The browsers are defined as WDIO capabilities in file [wdio.browserstack.capabilities.js](wdio.browserstack.capabilities.js) which is shared between WDIO conf files.

## Capturing Snapshots

The test suites supports the following QA process:

- Journeys are manually verified to work correctly and match the UCD design using BrowserStack using each supported browser.

- Journeys are captured as individual page snapshots by running the test suite locally against BrowserStack. This will capture any missing snapshots which are then committed to source control. Any intentionally changed pages should have their snapshots deleted and regenerated using this method.

- The test suite can then be run in the CDP Portal against the latest versions of journeys to ensure unexpected UI changes have not been introduced.


## Running the test suite

There are 3 WebdriverIO config files, each used with its own command:

```bash
wdio.local.conf.js
------------------
# Used to run tests locally against a local instance of Chrome
npm run test:local
```

```bash
wdio.local.browserstack.conf.js
-------------------------------
# Used to run tests locally against BrowserStack. The BrowserStackLocal service or binary must be used.
BROWSERSTACK_USERNAME=your-username BROWSERSTACK_KEY=your-key npm run test:local:browserstack
```

```bash
wdio.browserstack.conf.js
-------------------------
# Used to run tests in the portal against BrowserStack. The BrowserStackLocal service or binary must be used.

#Run in the CDP Portal
```

### Licence

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

<http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3>

The following attribution statement MUST be cited in your products and applications when using this information.

> Contains public sector information licensed under the Open Government licence v3

#### About the licence

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable
information providers in the public sector to license the use and re-use of their information under a common open
licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.
