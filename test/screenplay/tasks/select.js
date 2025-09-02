import SelectAutocompleteField from "./select-autocomplete-field.js"
import SelectCheckbox from "./select-checkbox.js"
import SelectDropdown from "./select-dropdown.js"
import SelectRadio from "./select-radio"

export default class Select {
    static autocompleteField() {
        return new SelectAutocompleteField()
    }
    
    static checkbox() {
        return new SelectCheckbox()
    }

    static dropdown() {
        return new SelectDropdown()
    }

    static radio() {
        return new SelectRadio()
    }
}
