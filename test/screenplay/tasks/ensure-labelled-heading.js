export default class EnsureLabelledHeading {
    is(label) {
        this.label = label
        return this
    }

    async perform() {
        if (this.label.indexOf("'") > -1) {
            this.label = this.label.substring(0, this.label.indexOf("'"))
        }
        await expect($(`//h1/label[contains(text(),'${this.label}')]`)).toBeDisplayed()
    }
}
