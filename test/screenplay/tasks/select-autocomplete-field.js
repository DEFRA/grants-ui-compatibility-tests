export default class SelectAutocompleteField {
    option(option) {
        this.option = option
        return this
    }

    for(label) {
        this.label = label
        return this
    }

    async perform() {
        const inputSelector = $(`//label[contains(text(),'${this.label}')]/following::input[@type='text']`)
        const optionSelector = $(`//label[contains(text(),'${this.label}')]/following::ul/li[text()='${this.option}']`)

        await inputSelector.click()
        await browser.keys('Backspace')
        await inputSelector.setValue(this.option)
        await optionSelector.click()
    }
}
