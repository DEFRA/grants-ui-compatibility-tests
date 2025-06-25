import path from 'node:path'
import { expect } from 'chai'

export default class EnsureSnapshot {
    ignoredLocators = []

    ignoring(locator) {
        this.ignoredLocators.push(locator)
        return this
    }

    async perform() {
        for (const locator of this.ignoredLocators) {
            const wdioElement = await $(locator)
            await browser.execute((e) => { e.style.visibility = 'hidden' }, wdioElement)
        }

        const pathSegments = (await browser.getUrl()).split('/')
        const screenName = pathSegments.pop()
        const grantCode = pathSegments.pop()

        const checkFullPageOptions = {
            actualFolder: path.join(process.cwd(), "test", "snapshots", "temp", "actual", grantCode),
            baselineFolder: path.join(process.cwd(), "test", "snapshots", "baseline", grantCode),
            diffFolder: path.join(process.cwd(), "test", "snapshots", "temp", "diff", grantCode),
        }

        const mismatchPercentage = await browser.checkFullPageScreen(screenName, checkFullPageOptions)
        expect(mismatchPercentage).to.be.lessThan(0.25, `mismatch percentage exceeds threshold for: ${screenName}`)
    }
}
