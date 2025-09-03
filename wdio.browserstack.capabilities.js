export const browserStackCapabilities = [
  // windows 11
  {
    browserName: 'Chrome',
    'wdio-ics:options': {
      logName: 'win-chrome',
      defraIdSbi: '106726308',
      defraIdCrn: '1101033347'
    },
    'bstack:options': {
      idleTimeout: 300,
      resolution: '1920x1080',
      browserVersion: 'latest',
      os: 'Windows',
      osVersion: '11'
    }
  },
  {
    browserName: 'Edge',
    'wdio-ics:options': {
      logName: 'win-edge',
      defraIdSbi: '106368236',
      defraIdCrn: '1101037725'
    },
    'bstack:options': {
      idleTimeout: 300,
      resolution: '1920x1080',
      browserVersion: 'latest',
      os: 'Windows',
      osVersion: '11'
    }
  },
  {
    browserName: 'Firefox',
    'wdio-ics:options': {
      logName: 'win-firefox',
      defraIdSbi: '115918708',
      defraIdCrn: '1101037873'
    },
    'bstack:options': {
      idleTimeout: 300,
      resolution: '1920x1080',
      browserVersion: 'latest',
      os: 'Windows',
      osVersion: '11'
    }
  },
  // macOS sequoia
  {
    browserName: 'Chrome',
    'wdio-ics:options': {
      logName: 'osx-chrome',
      defraIdSbi: '107672670',
      defraIdCrn: '1101046945'
    },
    'bstack:options': {
      idleTimeout: 300,
      resolution: '1920x1080',
      browserVersion: 'latest',
      os: 'OS X',
      osVersion: 'Sequoia'
    }
  },
  {
    browserName: 'Safari',
    'wdio-ics:options': {
      logName: 'osx-safari',
      defraIdSbi: '115970473',
      defraIdCrn: '1101048425'
    },
    'bstack:options': {
      idleTimeout: 300,
      resolution: '1920x1080',
      browserVersion: 'latest',
      os: 'OS X',
      osVersion: 'Sequoia'
    }
  },
  {
    browserName: 'Firefox',
    'wdio-ics:options': {
      logName: 'osx-firefox',
      defraIdSbi: '106691739',
      defraIdCrn: '1101050225'
    },
    'bstack:options': {
      idleTimeout: 300,
      resolution: '1920x1080',
      browserVersion: 'latest',
      os: 'OS X',
      osVersion: 'Sequoia'
    }
  },
  // macOS monterey
  {
    browserName: 'Safari',
    'wdio-ics:options': {
      logName: 'osx-safari-15.6',
      defraIdSbi: '106768365',
      defraIdCrn: '1101062495'
    },
    'bstack:options': {
      idleTimeout: 300,
      resolution: '1920x1080',
      browserVersion: '15.6',
      os: 'OS X',
      osVersion: 'Monterey'
    }
  },
  // iOS
  {
    browserName: 'Chrome',
    'wdio-ics:options': {
      logName: 'ios-chrome',
      defraIdSbi: '106804575',
      defraIdCrn: '1101064064'
    },
    'bstack:options': {
      idleTimeout: 300,
      deviceOrientation: 'portrait',
      deviceName: 'iPhone 16',
      osVersion: '18'
    },
    'goog:chromeOptions': {
      'prefs': {
        'credentials_enable_service': false,
        'profile.password_manager_leak_detection': false
      }
    }
  },
  {
    browserName: 'Safari',
    'wdio-ics:options': {
      logName: 'ios-safari',
      defraIdSbi: '106370456',
      defraIdCrn: '1101073429'
    },
    'bstack:options': {
      idleTimeout: 300,
      deviceOrientation: 'portrait',
      deviceName: 'iPhone 16',
      osVersion: '18'
    }
  },
  // android
  {
    browserName: 'Chrome',
    'wdio-ics:options': {
      logName: 'android-chrome',
      defraIdSbi: '106553663',
      defraIdCrn: '1101074620'
    },
    'bstack:options': {
      idleTimeout: 300,
      deviceOrientation: 'portrait',
      deviceName: 'Samsung Galaxy S25',
      osVersion: '13.0'
    }
  },
  {
    browserName: 'Samsung',
    'wdio-ics:options': {
      logName: 'android-samsung',
      defraIdSbi: '106920484',
      defraIdCrn: '1101079215'
    },
    'bstack:options': {
      idleTimeout: 300,
      deviceOrientation: 'portrait',
      deviceName: 'Samsung Galaxy S25',
      osVersion: '13.0'
    }
  }
]
