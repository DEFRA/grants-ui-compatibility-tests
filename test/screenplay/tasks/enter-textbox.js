export default class EnterTextbox {
    value(value) {
        this.value = value
        return this
    }

    for(id) {
        this.id = id
        return this
    }

    async perform() {
        await $(`//input[@id='${this.id}']`).setValue(this.value)
    }
}
