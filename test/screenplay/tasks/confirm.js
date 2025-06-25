export default class Confirm {
    static andSend() {
        return new Confirm()
    }

    async perform() {
        await $(`//button[contains(text(),'Confirm and send')]`).click()
    }
}
