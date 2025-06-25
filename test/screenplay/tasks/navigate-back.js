export default class NavigateBack {
    async perform() {
        await $(`//a[@class='govuk-back-link']`).click()
    }
}
