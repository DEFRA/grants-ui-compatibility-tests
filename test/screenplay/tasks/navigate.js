import NavigateBack from "./navigate-back.js"
import NavigateTo from "./navigate-to.js"

export default class Navigate {
    static back() {
        return new NavigateBack()
    }

    static to(url) {
        return new NavigateTo(url)
    }
}
