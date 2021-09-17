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

And('I enter text {string} in search input link', (text) => {
    return cy.get('input[name=search_input]').type(text)
});

And('I click on quick search', () => {
    //return cy.get('div svg title').contains('search').click()
    const searchButton = cy.get('button').contains('search');
    searchButton.click({force:true});
    cy.wait(5000)
});



