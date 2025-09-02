export default class SelectDropdown {
    option(option) {
        this.option = option
        return this
    }

    for(id) {
        this.id = id
        return this
    }

    async perform() {
        await $(`//select[@id='${this.id}']`).selectByVisibleText(this.option)
    }
}
