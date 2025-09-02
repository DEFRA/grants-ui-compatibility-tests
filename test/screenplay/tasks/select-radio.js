export default class SelectRadio {
    option(option) {
        this.option = option
        return this
    }

    async perform() {
        await $(`aria/${this.option}`).click()
    }
}
