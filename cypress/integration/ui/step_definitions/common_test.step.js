import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CommonActions from '../pages/CommonActions'
const commonActions = new CommonActions()

Given('I navigate to shift home page with forcebase url and required login', () => {
    return commonActions.envLogin('/')
})

Given('I navigate to shift home page with required login', () => {
    return cy.visit('https://shift.com/')
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

And('I click on button with label {string}', (label) => {
    return cy.get('button').contains(label).click()
});

And('I enter text {string} in search input link', (text) => {
    return cy.get('input[name=search_input]').type(text)
});

And('I enter text {string} in input element {string}', (text,element) => {
    return cy.get(element).type(text)
});

And('I select value {string} from dropdown {string}', (value,element) => {
    return cy.get(element).select(value)
});

And('I click on quick search', () => {
    //return cy.get('div svg title').contains('search').click()
    const searchButton = cy.get('button').contains('search');
    searchButton.click({force:true});
    cy.wait(5000)
});

And('I enter car model {string} in shop cars filter and validate length {string} of search results with element {string}',(carModel,length, element) => {
        var len = Number(length)
        return cy.get("input[placeholder*='Search by year']").clear().type(carModel).then(()=>{
            cy.xpath(element).its('length').should('eq', len)
        })
})

And('I enter car model {string} in shop cars filter and select the required option {string} in search results with element {string}',(carModel,option, element) => {
        var len = Number(length)
        return cy.get("input[placeholder*='Search by year']").clear().type(carModel).then(()=>{
            cy.xpath(element).each(($option,index)=>{
                if($option.text()==option){
                    $option.click();
                }
            })
        })
})





