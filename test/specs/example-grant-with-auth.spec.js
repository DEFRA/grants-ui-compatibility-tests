import { addArgument as addAllureArgument } from '@wdio/allure-reporter'
import { deleteApplicationState } from '../utils/backend-service.js'
import { getSbi, getCrn, getPassword } from '../utils/defra-id-credentials.js'
import Actor from '../screenplay/actor.js'
import Confirm from "../screenplay/tasks/confirm.js"
import Continue from '../screenplay/tasks/continue.js'
import Ensure from '../screenplay/tasks/ensure.js'
import Enter from "../screenplay/tasks/enter.js"
import Login from "../screenplay/tasks/login.js"
import Maximise from '../screenplay/tasks/maximise.js'
import Navigate from '../screenplay/tasks/navigate.js'
import Select from '../screenplay/tasks/select.js'
import Start from '../screenplay/tasks/start.js'

describe('example-grant-with-auth', () => {
    const agent = new Actor()

    beforeEach(async () => {
        addAllureArgument('logName', browser.options.capabilities['wdio-ics:options'].logName)
        await deleteApplicationState(getSbi(), getCrn(), 'example-grant-with-auth')
    })

    it('start', async () => {
        await agent.attemptsTo(
            Maximise.browser(),
            Navigate.to('/example-grant-with-auth/start'),
            Login.as(getCrn()).withPassword(getPassword()),
            Ensure.url().is('start'),
            Ensure.heading().is('Example Grant'),
            Ensure.screenMatchesDesign(),
            Start.journey(),
        )
    })

    it('yes-no-field', async () => {
        await agent.attemptsTo(
            Ensure.url().is('yes-no-field'),
            Ensure.heading().is('YesNoField Example'),
            Ensure.screenMatchesDesign(),
            Select.radio().option('No'),
            Continue.journey(),
        )
    })

    it('terminal-page', async () => {
        await agent.attemptsTo(
            Ensure.url().is('terminal-page'),
            Ensure.heading().is('Terminal Page Example'),
            Ensure.screenMatchesDesign(),
            Navigate.back(),
            Ensure.url().is('yes-no-field'),
            Select.radio().option('Yes'),
            Continue.journey(),
        )
    })

    it('autocomplete-field', async () => {
        await agent.attemptsTo(
            Ensure.url().is('autocomplete-field'),
            Ensure.heading().is('AutocompleteField Example'),
            Ensure.screenMatchesDesign(),
            Select.autocompleteField().option('England').for('Country'),
            Continue.journey(),
        )
    })

    it('radios-field', async () => {
        await agent.attemptsTo(
            Ensure.url().is('radios-field'),
            Ensure.heading().is('RadiosField Example'),
            Ensure.screenMatchesDesign(),
            Select.radio().option('Option one'),
            Continue.journey(),
        )
    })

    it('conditional-page', async () => {
        await agent.attemptsTo(
            Ensure.url().is('conditional-page'),
            Ensure.heading().is('Conditional Page Example'),
            Ensure.screenMatchesDesign(),
            Continue.journey(),
        )
    })

    it('checkboxes-field', async () => {
        await agent.attemptsTo(
            Ensure.url().is('checkboxes-field'),
            Ensure.heading().is('CheckboxesField Example'),
            Ensure.screenMatchesDesign(),
            Select.checkbox().options('Option one', 'Option two', 'Option three'),
            Continue.journey(),
        )
    })

    it('number-field', async () => {
        await agent.attemptsTo(
            Ensure.url().is('number-field'),
            Ensure.heading().is('NumberField Example'),
            Ensure.screenMatchesDesign(),
            Enter.textbox().value('100000').for('numberField'),
            Continue.journey(),
        )
    })

    it('date-parts-field', async () => {
        const date = new Date()
        date.setDate(date.getDate() + 7)

        await agent.attemptsTo(
            Ensure.url().is('date-parts-field'),
            Ensure.heading().is('DatePartsField Example'),
            Ensure.screenMatchesDesign(),
            Enter.datePartsField().value(date).for('datePartsField'),
            Continue.journey(),
        )
    })

    it('month-year-field', async () => {
        await agent.attemptsTo(
            Ensure.url().is('month-year-field'),
            Ensure.heading().is('MonthYearField Example'),
            Ensure.screenMatchesDesign(),
            Enter.monthYearField().month('08').year('2025').for('monthYearField'),
            Continue.journey(),
        )
    })

    it('select-field', async () => {
        await agent.attemptsTo(
            Ensure.url().is('select-field'),
            Ensure.heading().is('SelectField Example'),
            Ensure.screenMatchesDesign(),
            Select.dropdown().option('Option three').for('selectField'),
            Continue.journey(),
        )
    })

    it('multiline-text-field', async () => {
        await agent.attemptsTo(
            Ensure.url().is('multiline-text-field'),
            Ensure.labelledHeading().is('MultilineTextField Example'),
            Ensure.screenMatchesDesign(),
            Enter.textarea().value('Lorem ipsum').for('multilineTextField'),
            Continue.journey(),
        )
    })

    it('multi-field-form', async () => {
        await agent.attemptsTo(
            Ensure.url().is('multi-field-form'),
            Ensure.heading().is('Multi Field Form Example'),
            Ensure.screenMatchesDesign(),
            Enter.textbox().value('James Test-Farmer').for('applicantName'),
            Enter.textbox().value('cl-defra-gae-test-applicant-email@equalexperts.com').for('applicantEmail'),
            Enter.textbox().value('07777 123456').for('applicantMobile'),
            Enter.textbox().value('Test Farm').for('applicantBusinessAddress__addressLine1'),
            Enter.textbox().value('Cogenhoe').for('applicantBusinessAddress__addressLine2'),
            Enter.textbox().value('Northampton').for('applicantBusinessAddress__town'),
            Enter.textbox().value('Northamptonshire').for('applicantBusinessAddress__county'),
            Enter.textbox().value('NN7 1NN').for('applicantBusinessAddress__postcode'),
            Continue.journey(),
        )
    })

    it('summary', async () => {
        await agent.attemptsTo(
            Ensure.url().is('summary'),
            Ensure.heading().is('Check your answers'),
            Ensure.screenMatchesDesign(),
            Continue.journey(),
        )
    })

    it('declaration', async () => {
        await agent.attemptsTo(
            Ensure.url().is('declaration'),
            Ensure.heading().is('Confirm and send'),
            Ensure.screenMatchesDesign(),
            Confirm.andSend(),
        )
    })

    it('confirmation', async () => {
        await agent.attemptsTo(
            Ensure.url().is('confirmation'),
            Ensure.heading().is('Details submitted'),
            Ensure.screenMatchesDesign().ignoring('//h1/following-sibling::div[1]/strong') // reference number element
        )
    })
})
