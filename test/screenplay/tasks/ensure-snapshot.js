import path from 'node:path'
import { expect } from 'chai'

export default class EnsureSnapshot {
    ignoredXPaths = []

    ignoring(xpath) {
        this.ignoredXPaths.push(xpath)
        return this
    }

    async perform() {
        for (const xpath of this.ignoredXPaths) {
            const wdioElement = await $(xpath)
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
