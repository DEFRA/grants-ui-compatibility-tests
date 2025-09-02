export default class EnsureHeading {
    is(heading) {
        this.heading = heading
        return this
    }

    async perform() {
        if (this.heading.indexOf("'") > -1) {
            this.heading = this.heading.substring(0, this.heading.indexOf("'"))
        }
        await expect($(`//h1[contains(text(),'${this.heading}')]`)).toBeDisplayed()
    }
}
