import EnsureHeading from './ensure-heading.js'
import EnsureSnapshot from './ensure-snapshot.js'
import EnsureUrl from './ensure-url.js'

export default class Ensure {
    static heading() {
        return new EnsureHeading()
    }

    static screenMatchesDesign() {
        return new EnsureSnapshot()
    }

    static url() {
        return new EnsureUrl()
    }
}
