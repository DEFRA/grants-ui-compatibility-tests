export default class SelectCheckbox {
    options(...options) {
        this.options = options
        return this
    }

    async perform() {
        await Promise.all(
            await $$(`//input[@type='checkbox' and @checked]`)
                .map(async (e) => await e.click())
        )

        for (let option of this.options) {
            await $(`aria/${option}`).click()
        }
    }
}
