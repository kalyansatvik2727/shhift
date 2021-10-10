import CommonActions from '../pages/commonActions';
import Utilities from '../pages/utilities';

const commonActions = new CommonActions();
const util = new Utilities();
const email = 'test' + util.randomNumber() + '@gmail.com';
const license_plate_number = util.randomString();
const firstName = util.randomString();
const lastName = util.randomString();
const phoneNumber = util.randomNumber_phoneNumber();
const password = 'Test123#';
const {
  Given,
  When,
  Then,
  Before
} = require("cypress-cucumber-preprocessor/steps");

Given('I navigate to sell or trade page with forcebase url and required login', () => {
    return commonActions.envLogin('/sell-my-car')
})

And('I select {string} test preset dropdown', (preset) => {
    return cy.get('#seller_landing_quote_flow_entry_point_test_preset_data').select(preset).wait(5000)
})

And('I click on At Home booking evalution', () => {
    return cy.get('[value="pickup"] > .TypographyParagraph__root',{timeout:72000}).should('be.visible').click().wait(5000)
})

And('I click on At Shift booking evalution', () => {
    return cy.get('[value="dropoff"] > .TypographyParagraph__root',{timeout:72000}).should('be.visible').click().wait(5000)
})

And('I enter address {string} in input element {string}', (text,element) => {
    return cy.get(element).type(`${text}{enter}`,{delay:1000})
});

And('I click on the pickup time', () => {
    return cy.get('.DateSelector__date-list button').eq(1).click().wait(3000).get('.TimeSelector__timegrid-row button').eq(0).click()
});

And('I click on Schedule evaluation button', () => {
    return cy.get('span.Button__content').contains('Schedule evaluation').click()
});

Then('I validate Evaluation booked header', () => {
    return cy.get('h2',{timeout:250000}).contains('Evaluation booked!').should('be.visible')
})

And('I enter lisence plate number in booking evalution', () => {
    return cy.get('#license_plate_number').type(license_plate_number)
});

And('I enter first name in booking evalution', () => {
    return cy.get('#firstName').type(firstName)
});

And('I enter last name in booking evalution', () => {
    return cy.get('#lastName').type(lastName)
});

And('I enter email in booking evalution', () => {
    return cy.get('#email').type(email)
});

And('I enter phoneNumber in booking evalution', () => {
    return cy.get('#phoneNumber').type(phoneNumber)
});

And('I enter address in booking evalution', () => {
    return cy.get('#address').click().type("333 O'Farrell St, San Francisco, CA 94102, USA")
});