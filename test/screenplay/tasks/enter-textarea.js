export default class EnterTextarea {
    value(value) {
        this.value = value
        return this
    }

    for(id) {
        this.id = id
        return this
    }

    async perform() {
        await $(`//textarea[@id='${this.id}']`).setValue(this.value)
    }
}
