export default class EnterDatePartsField {
    value(date) {
        this.date = date
        return this
    }

    for(id) {
        this.id = id
        return this
    }

    async perform() {
        const daySelector = $(`//input[@id='${this.id}__day']`)
        const monthSelector = $(`//input[@id='${this.id}__month']`)
        const yearSelector = $(`//input[@id='${this.id}__year']`)

        await daySelector.setValue(this.date.getUTCDate())
        await monthSelector.setValue(this.date.getUTCMonth() + 1)
        await yearSelector.setValue(this.date.getUTCFullYear())
    }
}
