export default class Maximise {
    static browser() {
        return new Maximise()
    }

    async perform() {
        try {
            await browser.maximizeWindow()
        } catch (e) {
            if (!e.message.includes('unsupported operation: Unable to maximize window')) {
                throw e
            }
        }
    }
}
