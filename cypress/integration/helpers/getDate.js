//pre-requisite - npm install moment --save-dev

Cypress.moment = require('moment');
describe("sample",()=>{
    it("sample",()=>{
        //to get current date and format can be changed as accordingly - MMM DD YYYY, MM-DD-YYYY etc
        cy.log('Current Date', Cypress.moment().format('MM/DD/YYYY'))
        cy.log('future date', Cypress.moment().add(10,'days').format('MM/DD/YYYY'))
        cy.log('previous date', Cypress.moment().add(-10,'days').format('MM/DD/YYYY'))

        cy.log(Cypress.moment().calendar());
    })
})