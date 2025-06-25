export default class Select {
    constructor(options) {
        this.options = options
    }

    static option(option) {
        return new Select([option])
    }

    static options(...options) {
        return new Select(options)
    }

    async perform() {
        for (const option of this.options) {
            await $(`aria/${option}`).click()
        }
    }
}
