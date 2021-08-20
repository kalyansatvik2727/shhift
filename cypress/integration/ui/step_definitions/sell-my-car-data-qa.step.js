const {
  Given,
  When,
  Then,
  Before
} = require("cypress-cucumber-preprocessor/steps");

Given('I navigate to sell-my-car page', () => {
    cy.visit('https://shift.com/sell-my-car');
})

And('I select year with data-qa attribute', () => {
    cy.get('[data-qa=year]',{timeout:50000}).should('be.visible').select('2020')
})

And('I select make with data-qa attribute', () => {
    cy.get('[data-qa=make]',{timeout:50000}).should('be.visible').select('BMW')
})

And('I select model with data-qa attribute', () => {
    cy.get('[data-qa=model]',{timeout:50000}).should('be.visible').select('X1')
})

And('I click on Get my estimate button', () => {
    cy.contains('Get my estimate',{timeout:50000}).should('be.visible').click()
})

And('I click on license plate with data-qa attribute', () => {
    cy.get('[data-qa=license_link]',{timeout:50000}).should('be.visible').click()
})

And('I enter license plate with data-qa attribute', () => {
    cy.get('[data-qa=license_plate]',{timeout:50000}).should('be.visible').type('CA1234GA')
})

And('I select state with data-qa attribute', () => {
    cy.get('[data-qa=state]',{timeout:50000}).should('be.visible').select('MN')
})

And('I click on vin with data-qa attribute', () => {
    cy.get('[data-qa=vin_link]',{timeout:50000}).should('be.visible').click()
})

And('I enter vin with data-qa attribute', () => {
    cy.get('[data-qa=vin]',{timeout:50000}).should('be.visible').type('CA1234GA')
})

