export default class Continue {
    static journey() {
        return new Continue()
    }

    async perform() {
        const wdioElement = await $(`//button[contains(text(),'Continue')]`)
        await browser.execute(function (e) { e.focus() }, wdioElement)
        await wdioElement.click()
    }
}
