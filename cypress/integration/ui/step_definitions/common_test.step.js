import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CommonActions from '../pages/CommonActions'
const commonActions = new CommonActions()

Given('I navigate to shift home page with forcebase url and required login', () => {
    return commonActions.envLogin('/')
})

And('I validate Modal {string}', (text) => {
    return cy.get('div[class*=Modal__is-open]').contains(text)
});

And('I close Modal', (text) => {
    return cy.get('div[class*=Modal__close]').click()
});

And('I validate {string} section', (text) => {
    return cy.contains(text)
});

And('I validate {string} text', (text) => {
    return cy.contains(text)
});

And('I validate {string} link', (text) => {
    return cy.contains(text)
});

And('I click on {string} link', (text) => {
    return cy.contains(text).click().wait(5000)
});

