export function getSbi() {
  let sbi = browser.options.capabilities['wdio-ics:options'].defraIdSbi ?
    browser.options.capabilities['wdio-ics:options'].defraIdSbi : '116315609'

  if (process.env.ENVIRONMENT.toLowerCase() === 'dev') {
    sbi = 'default-business'
  }

  return sbi
}

export function getCrn() {
  let crn = browser.options.capabilities['wdio-ics:options'].defraIdCrn ?
    browser.options.capabilities['wdio-ics:options'].defraIdCrn : '1101116799'

  if (process.env.ENVIRONMENT.toLowerCase() === 'dev') {
    crn = 'anonymous-user'
  }

  return crn
}

export function getPassword() {
  return process.env.DEFRA_ID_USER_PASSWORD
}
