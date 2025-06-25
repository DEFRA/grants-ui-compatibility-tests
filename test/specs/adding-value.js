import { addArgument as addAllureArgument } from "@wdio/allure-reporter"
import Actor from '../screenplay/actor.js'
import Confirm from '../screenplay/tasks/confirm.js'
import Continue from '../screenplay/tasks/continue.js'
import Ensure from '../screenplay/tasks/ensure.js'
import Enter from '../screenplay/tasks/enter.js'
import Maximise from '../screenplay/tasks/maximise.js'
import Navigate from '../screenplay/tasks/navigate.js'
import Select from '../screenplay/tasks/select.js'
import Start from '../screenplay/tasks/start.js'

describe('Adding Value page snapshot verification', () => {
  const agent = new Actor()

  beforeEach(() => {
    addAllureArgument('logName', browser.options.capabilities['wdio-ics:options'].logName)
  })

  it('start', async () => {
    await agent.attemptsTo(
      Maximise.browser(),
      Navigate.to('/adding-value/start'),
      Ensure.url().is('start'),
      Ensure.heading().is('Check if you can apply for a Farming Transformation Fund Adding Value Grant'),
      Ensure.screenMatchesDesign(),
      Start.journey()
    )
  })

  it('nature-of-business', async () => {
    await agent.attemptsTo(
      Ensure.url().is('nature-of-business'),
      Ensure.heading().is('What is your business?'),
      Ensure.screenMatchesDesign(),
      Select.option('None of the above'),
      Continue.journey()
    )
  })

  it('cannot-apply-nature-of-business', async () => {
    await agent.attemptsTo(
      Ensure.url().is('cannot-apply-nature-of-business'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),
      Ensure.url().is('nature-of-business'),
      Select.option('A grower or producer of agricultural or horticultural produce'),
      Continue.journey()
    )
  })

  it('legal-status', async () => {
    await agent.attemptsTo(
      Ensure.url().is('legal-status'),
      Ensure.heading().is('What is the legal status of the business?'),
      Ensure.screenMatchesDesign(),
      Select.option('None of the above'),
      Continue.journey()
    )
  })

  it('legal-status-cannot-apply', async () => {
    await agent.attemptsTo(
      Ensure.url().is('legal-status-cannot-apply'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),
      Ensure.url().is('legal-status'),
      Select.option('Sole trader'),
      Continue.journey()
    )
  })

  it('country', async () => {
    await agent.attemptsTo(
      Ensure.url().is('country'),
      Ensure.heading().is('Is the planned project in England?'),
      Ensure.screenMatchesDesign(),
      Select.option('No'),
      Continue.journey()
    )
  })

  it('cannot-apply-country', async () => {
    await agent.attemptsTo(
      Ensure.url().is('cannot-apply-country'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),
      Ensure.url().is('country'),
      Select.option('Yes'),
      Continue.journey()
    )
  })

  it('planning-permission', async () => {
    await agent.attemptsTo(
      Ensure.url().is('planning-permission'),
      Ensure.heading().is('Does the project have planning permission?'),
      Ensure.screenMatchesDesign(),
      Select.option('Will not be in place by the time I make my full application'),
      Continue.journey()
    )
  })

  it('planning-permission-cannot-apply', async () => {
    await agent.attemptsTo(
      Ensure.url().is('planning-permission-cannot-apply'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),
      Ensure.url().is('planning-permission'),
      Select.option('Should be in place by the time I make my full application'),
      Continue.journey()
    )
  })

  it('planning-permission-may-apply', async () => {
    await agent.attemptsTo(
      Ensure.url().is('planning-permission-may-apply'),
      Ensure.heading().is('You may be able to apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Continue.journey()
    )
  })

  it('project-start', async () => {
    await agent.attemptsTo(
      Ensure.url().is('project-start'),
      Ensure.heading().is('Have you already started work on the project?'),
      Ensure.screenMatchesDesign(),
      Select.option('Yes, we have begun project work'),
      Continue.journey()
    )
  })

  it('cannot-apply-project-start', async () => {
    await agent.attemptsTo(
      Ensure.url().is('cannot-apply-project-start'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),
      Ensure.url().is('project-start'),
      Select.option('Yes, preparatory work'),
      Continue.journey()
    )
  })

  it('tenancy', async () => {
    await agent.attemptsTo(
      Ensure.url().is('tenancy'),
      Ensure.heading().is('Is the planned project on land the business owns?'),
      Ensure.screenMatchesDesign(),
      Select.option('No'),
      Continue.journey()
    )
  })

  it('tenancy-length', async () => {
    await agent.attemptsTo(
      Ensure.url().is('tenancy-length'),
      Ensure.heading().is('Do you have a tenancy agreement for 5 years after the final grant payment?'),
      Ensure.screenMatchesDesign(),
      Select.option('No'),
      Continue.journey()
    )
  })

  it('may-apply-tenancy-length', async () => {
    await agent.attemptsTo(
      Ensure.url().is('may-apply-tenancy-length'),
      Ensure.heading().is('You may be able to apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Continue.journey()
    )
  })

  it('smaller-abattoir', async () => {
    await agent.attemptsTo(
      Ensure.url().is('smaller-abattoir'),
      Ensure.heading().is('Do you want to build a new smaller abattoir?'),
      Ensure.screenMatchesDesign(),
      Select.option('No'), // take top fruit journey
      Continue.journey()
    )
  })

  it('fruit-storage', async () => {
    await agent.attemptsTo(
      Ensure.url().is('fruit-storage'),
      Ensure.heading().is('Do you want to build new controlled atmosphere storage for top fruit?'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),
      Ensure.url().is('smaller-abattoir'),
      Select.option('Yes'), // take smaller abattoir journey
      Continue.journey()
    )
  })

  it('other-farmers', async () => {
    await agent.attemptsTo(
      Ensure.url().is('other-farmers'),
      Ensure.heading().is('Will this abattoir provide services to other farmers?'),
      Ensure.screenMatchesDesign(),
      Select.option('No'),
      Continue.journey()
    )
  })

  it('cannot-apply-other-farmers', async () => {
    await agent.attemptsTo(
      Ensure.url().is('cannot-apply-other-farmers'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),
      Ensure.url().is('other-farmers'),
      Select.option('Yes'),
      Continue.journey()
    )
  })

  it('project-items-needed', async () => {
    await agent.attemptsTo(
      Ensure.url().is('project-items-needed'),
      Ensure.heading().is('Does your project need eligible items?'),
      Ensure.screenMatchesDesign(),
      Select.option('No'),
      Continue.journey()
    )
  })

  it('cannot-apply-project-items', async () => {
    await agent.attemptsTo(
      Ensure.url().is('cannot-apply-project-items'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),
      Ensure.url().is('project-items-needed'),
      Select.option('Yes'),
      Continue.journey()
    )
  })

  it('project-items', async () => {
    await agent.attemptsTo(
      Ensure.url().is('project-items'),
      Select.option('Constructing or improving buildings for processing'),
      Continue.journey()
    )
  })

  it('storage', async () => {
    await agent.attemptsTo(
      Ensure.url().is('storage'),
      Ensure.heading().is('Does your project also need storage facilities?'),
      Ensure.screenMatchesDesign(),
      Select.option('Yes, we will need storage facilities'),
      Continue.journey()
    )
  })

  it('project-cost', async () => {
    await agent.attemptsTo(
      Ensure.url().is('project-cost'),
      Ensure.heading().is('What is the estimated cost of the items?'),
      Ensure.screenMatchesDesign(),
      Enter.value('62499').for('Enter amount'),
      Continue.journey()
    )
  })

  it('project-cost-cannot-apply', async () => {
    await agent.attemptsTo(
      Ensure.url().is('project-cost-cannot-apply'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),
      Ensure.url().is('project-cost'),
      Enter.value('62500').for('Enter amount'),
      Continue.journey()
    )
  })

  it('potential-funding', async () => {
    await agent.attemptsTo(
      Ensure.url().is('potential-funding'),
      Ensure.heading().is('Potential grant funding'),
      Ensure.screenMatchesDesign(),
      Continue.journey()
    )
  })

  it('remaining-costs', async () => {
    await agent.attemptsTo(
      Ensure.url().is('remaining-costs'),
      Ensure.heading().is('Can you pay the remaining costs of £37,500?'),
      Ensure.screenMatchesDesign(),
      Select.option('No'),
      Continue.journey()
    )
  })

  it('cannot-apply-remaining-costs', async () => {
    await agent.attemptsTo(
      Ensure.url().is('cannot-apply-remaining-costs'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),
      Ensure.url().is('remaining-costs'),
      Select.option('Yes'),
      Continue.journey()
    )
  })

  it('produce-processed', async () => {
    await agent.attemptsTo(
      Ensure.url().is('produce-processed'),
      Ensure.heading().is('What type of produce is being processed?'),
      Ensure.screenMatchesDesign(),
      Select.option('Arable produce'),
      Continue.journey()
    )
  })

  it('adding-value', async () => {
    await agent.attemptsTo(
      Ensure.url().is('how-adding-value'),
      Ensure.heading().is('How will this project add value to the produce?'),
      Ensure.screenMatchesDesign(),
      Select.option('Introducing a new product to your farm'),
      Continue.journey()
    )
  })

  it('project-impact', async () => {
    await agent.attemptsTo(
      Ensure.url().is('project-impact'),
      Ensure.heading().is('What impact will this project have?'),
      Ensure.screenMatchesDesign(),
      Select.options(
        'Increasing range of added-value products',
        'Increasing volume of added-value products'
      ),
      Continue.journey()
    )
  })

  it('mechanisation', async () => {
    await agent.attemptsTo(
      Ensure.url().is('mechanisation'),
      Ensure.heading().is('Will this project use any mechanisation instead of manual labour?'),
      Ensure.screenMatchesDesign(),
      Select.option('Yes'),
      Continue.journey()
    )
  })

  it('manual-labour-amount', async () => {
    await agent.attemptsTo(
      Ensure.url().is('manual-labour-amount'),
      Ensure.heading().is('How much manual labour will the mechanisation be equal to?'),
      Ensure.screenMatchesDesign(),
      Select.option('More than 10%'),
      Continue.journey()
    )
  })

  it('future-customers-exist', async () => {
    await agent.attemptsTo(
      Ensure.url().is('future-customers-exist'),
      Ensure.heading().is('Will you have new customers after this project?'),
      Ensure.screenMatchesDesign(),
      Select.option('Yes'),
      Continue.journey()
    )
  })

  it('future-customers', async () => {
    await agent.attemptsTo(
      Ensure.url().is('future-customers'),
      Ensure.heading().is('Who will your new customers be after this project?'),
      Ensure.screenMatchesDesign(),
      Select.options(
        'Processors',
        'Wholesalers'
      ),
      Continue.journey()
    )
  })

  it('collaboration', async () => {
    await agent.attemptsTo(
      Ensure.url().is('collaboration'),
      Ensure.heading().is('Will you work in partnership or collaborate with other farmers or producers?'),
      Ensure.screenMatchesDesign(),
      Select.option('Yes'),
      Continue.journey()
    )
  })

  it('environmental-impact-exist', async () => {
    await agent.attemptsTo(
      Ensure.url().is('environmental-impact-exist'),
      Ensure.heading().is('Will this project improve the environment?'),
      Ensure.screenMatchesDesign(),
      Select.option('Yes'),
      Continue.journey()
    )
  })

  it('environmental-impact', async () => {
    await agent.attemptsTo(
      Ensure.url().is('environmental-impact'),
      Ensure.heading().is('How will this project improve the environment?'),
      Ensure.screenMatchesDesign(),
      Select.options(
        'Renewable energy',
        'Energy efficiency'
      ),
      Continue.journey()
    )
  })

  it('score-results', async () => {
    await agent.attemptsTo(
      Ensure.url().is('score-results'),
      Ensure.heading().is('Score results'),
      Ensure.screenMatchesDesign(),
      Continue.journey()
    )
  })

  it('business-details', async () => {
    await agent.attemptsTo(
      Ensure.url().is('business-details'),
      Ensure.heading().is('Business Details'), // TODO: fix, should be 'Business detais'
      Ensure.screenMatchesDesign(),
      Continue.journey()
    )
  })

  it('applying', async () => {
    await agent.attemptsTo(
      Ensure.url().is('applying'),
      Ensure.heading().is('Who is applying for this grant?'),
      Select.option('Agent'),
      Continue.journey()
    )
  })

  it('agent-details', async () => {
    await agent.attemptsTo(
      Ensure.url().is('agent-details'),
      Ensure.heading().is(`Agent's details`),
      Ensure.screenMatchesDesign(),
      Enter.value('John').for('First name'),
      Enter.value('Test-Agent').for('Last name'),
      Enter.value('Test Agency Ltd').for('Business name'),
      Enter.value('cl-defra-gae-test-agent-email@equalexperts.com').for('Email address'),
      Enter.value('cl-defra-gae-test-agent-email@equalexperts.com').for('Confirm email address'),
      Enter.value('07777 654321').for('Mobile number'),
      Enter.value('01604 654321').for('Landline number'),
      Enter.value('High Street').for('Address line 1'),
      Enter.value('Denton').for('Address line 2 (optional)'),
      Enter.value('Northampton').for('Town'),
      Enter.value('Northamptonshire').for('County (optional)'),
      Enter.value('NN7 3NN').for('Postcode'),
      Continue.journey()
    )
  })

  it('applicant-details', async () => {
    await agent.attemptsTo(
      Ensure.url().is('applicant-details'),
      Ensure.heading().is(`Applicant's details`),
      Ensure.screenMatchesDesign(),
      Enter.value('James').for('First name'),
      Enter.value('Test-Farmer').for('Last name'),
      Enter.value('cl-defra-gae-test-applicant-email@equalexperts.com').for('Email address'),
      Enter.value('cl-defra-gae-test-applicant-email@equalexperts.com').for('Confirm email address'),
      Enter.value('07777 123456').for('Mobile number'),
      Enter.value('01604 123456').for('Landline number'),
      Enter.value('Test Farm').for('Address line 1'),
      Enter.value('Cogenhoe').for('Address line 2 (optional)'),
      Enter.value('Northampton').for('Town'),
      Enter.value('Northamptonshire').for('County (optional)'),
      Enter.value('NN7 1NN').for('Postcode'),
      Enter.value('NN7 2NN').for('Project postcode'),
      Continue.journey()
    )
  })

  it('check-details', async () => {
    await agent.attemptsTo(
      Ensure.url().is('check-details'),
      Ensure.heading().is('Check your details'),
      Ensure.screenMatchesDesign(),
      Continue.journey()
    )
  })

  it('declaration', async () => {
    await agent.attemptsTo(
      Ensure.url().is('declaration'),
      Ensure.heading().is('Confirm and send'),
      Ensure.screenMatchesDesign(),
      Confirm.andSend()
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
