export default class Start {
    static journey() {
        return new Start()
    }

    async perform() {
        await $(`//button[contains(text(),'Start now')]`).click()
    }
}
