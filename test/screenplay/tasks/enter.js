import EnterDatePartsField from "./enter-date-parts-field.js"
import EnterMonthYearField from "./enter-month-year-field.js"
import EnterTextarea from "./enter-textarea.js"
import EnterTextbox from "./enter-textbox.js"

export default class Enter {
    static datePartsField() {
        return new EnterDatePartsField()
    }

    static monthYearField() {
        return new EnterMonthYearField()
    }

    static textarea() {
        return new EnterTextarea()
    }

    static textbox() {
        return new EnterTextbox()
    }
}
