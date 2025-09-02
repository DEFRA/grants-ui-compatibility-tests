export default class EnterMonthYearField {
    month(month) {
        this.month = month
        return this
    }

    year(year) {
        this.year = year
        return this
    }

    for(id) {
        this.id = id
        return this
    }

    async perform() {
        const monthSelector = $(`//input[@id='${this.id}__month']`)
        const yearSelector = $(`//input[@id='${this.id}__year']`)

        await monthSelector.setValue(this.month)
        await yearSelector.setValue(this.year)
    }
}
