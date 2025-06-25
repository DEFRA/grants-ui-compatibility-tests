export default class EnsureUrl {
    is(expectation) {
        this.expectation = expectation
        return this
    }

    async perform() {
        await expect(browser).toHaveUrl(expect.stringContaining(this.expectation))
    }
}
