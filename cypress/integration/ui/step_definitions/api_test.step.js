// import CommonActions from '../pages/CommonActions'
// const commonActions = new CommonActions()
const testData = require('../../../fixtures/testData.json')

Given('I send a POST request to calculate tax fee', () => {
    testData.forEach((testDataRow) => {
        const data = {
            state: testDataRow.registration.address.state,
            bodyType: testDataRow.vehicle.bodyType
        }

        cy.request({
            method: 'POST',
            url: 'https://fulfillment.staging.shiftdev.io/v1/taxfee/calculate',
            headers: {
                'content-type': 'application/json'
            },
            auth: {
                'user': Cypress.env('apiUsername'),
                'pass': Cypress.env('apiPassword')
            },
            body: testDataRow,
            failOnStatusCode: false
        }).then(response => {
            expect(response).to.have.property('status', 200)
            cy.log(response.body)
            //cy.writeFile('/cypress/fixtures/responseJson.json',response.body) 
            //   cy.writeFile('C:/Users/kallzz/Documents/shftApiAutomation/cypress/fixtures/excel.xlsx',response.body) 
            cy.writeFile(`cypress\\fixtures\\response_${data.state}_${data.bodyType}.json`, response.body)
        })
    })
})
