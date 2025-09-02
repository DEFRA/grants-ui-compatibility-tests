import { pollForSuccess } from "../../utils/polling.js"

export default class Login {
    constructor(crn) {
        this.crn = crn
    }

    static as(crn) {
        return new Login(crn)
    }

    withPassword(password) {
        this.password = password
        return this
    }

    async perform() {
        const isLoginRequired = await pollForSuccess(async () => {
            return await $(`//h1/span[contains(text(), 'Sign in')]`).isExisting()
        }, 10)

        if (isLoginRequired) {
            const crnElement = $(`//input[@id='crn']`)
            await crnElement.waitForDisplayed({ timeout: 30000 })
            await crnElement.setValue(this.crn)

            const passwordElement = $(`//input[@id='password']`)
            await passwordElement.waitForDisplayed({ timeout: 30000 })
            await passwordElement.setValue(this.password)

            const submitButton = $(`//button[@type='submit']`)
            await submitButton.waitForDisplayed({ timeout: 30000 })
            await browser.waitUntil(() => submitButton.isClickable())
            await submitButton.click()
            if (browser.options.capabilities['wdio-ics:options']?.logName === 'android-chrome') {
                await submitButton.click()
            }

            await expect(browser).not.toHaveUrl(expect.stringContaining('b2clogin.com'), { wait: 30000 })
        }
    }
}
