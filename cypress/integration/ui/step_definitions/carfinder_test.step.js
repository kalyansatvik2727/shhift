import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CommonActions from '../pages/CommonActions'
const commonActions = new CommonActions()
const page = require('../pages/carfinder_page')
const pageActions = page.actions

Given('I navigate to Car Finder Page with required login', () => {
    commonActions.envLogin('/')
})

And('I click on car finder menu button', () => {
    pageActions.clickOnCarFinderMenuItem()
})

And('I validate landing page text', () => {
    cy.get('h1').eq(0).invoke('text').then((text) => {
        cy.wrap(text).should('contains', 'What car is right for me?')

    })
})

And('I click on start car finder button', () => {
    pageActions.clickOnStartCarFinderButton()
})

And('I select any random card in What are you looking for in your next car? section', () => {
    pageActions.selectCard('Style and flash! I wanna turn heads.')
})

And('I click on Next button', () => {
    pageActions.clickOnButton('Next')
})

And('I select any 3 random cards in What is most important to you in a car? section', () => {
    pageActions.selectCard('Value')
    pageActions.selectCard('Fuel Efficiency')
    pageActions.selectCard('Performance')
})

And('I click on Next button', () => {
    pageActions.clickOnButton('Next')
})

And('I select Monthly payment', () => {
    pageActions.clickOnMonthlyPayment()
})

And('I enter Monthly payment', () => {
    pageActions.enterMonthlyPayment('450')
})

And('I click on Next button', () => {
    pageActions.clickOnButton('Next')
})

And('I select 3 car models in Which body styles do you prefer? section', () => {
    pageActions.selectCard('Sedan')
    pageActions.selectCard('Wagon')
    pageActions.selectCard('SUV')
})

And('I click on Finish button', () => {
    pageActions.clickOnButton('Finish')
})


