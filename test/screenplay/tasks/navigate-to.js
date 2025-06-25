export default class NavigateTo {
    constructor(url) {
        this.url = url
    }

    async perform() {
        await browser.url(this.url)
    }
}
