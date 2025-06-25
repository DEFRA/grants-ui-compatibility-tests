export default class Enter {
    constructor(value) {
        this.value = value
    }

    static value(value) {
        return new Enter(value)
    }

    for(label) {
        this.label = label
        return this
    }

    async perform() {
        await $(`//label[contains(text(),'${this.label}')]/following::input[1]`).setValue(this.value)
    }
}
