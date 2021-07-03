import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CommonActions from '../pages/CommonActions'
import Utilities from '../pages/utilities'
const page = require('../pages/testDriveFlow_page')
const pageActions = page.actions

const commonActions = new CommonActions()
const util = new Utilities()

Given(/^I navigate to shift home page with required login$/, () => {
	cy.visit('https://shift.com/')
});

And(/^I click on Shop Cars link$/, () => {
	cy.contains('Shop cars').click()
});

And(/^I select any random car$/, () => {
	cy.get('a div img').eq(0).click()
});

Then(/^I validate vehicle description page$/, () => {
    cy.contains('Free 7-day returns')
    cy.contains('30-day warranty')
    cy.contains('No-Contact Test Drives')
});


And(/^I click on See all specs$/, () => {
    cy.contains('See all specs').click()
});

And(/^I click on See all features$/, () => {
    cy.contains('See all features').click()
});
