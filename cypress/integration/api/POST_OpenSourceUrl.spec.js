/// <reference types="cypress" />
const dataJson = require('../../fixtures/reqresRequestBody.json')
const testData = require('../../fixtures/testData.json')
describe('API Calls', function () {
    testData.forEach((testDataRow) => {
        const data = {
            name: testDataRow.name,
            job: testDataRow.job
        }

        it('POST', function () {
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                headers: {
                    'content-type': 'application/json'
                },
                body: {
                    "name": data.name,
                    "job": data.job
                },
                failOnStatusCode: false
            }).then(response => {
                expect(response).to.have.property('status', 201)
                cy.log(response.body)
                //cy.writeFile(`C:/Users/kallzz/Documents/shftApiAutomation/cypress/fixtures/reqresResponseJson_${data.name}.json`, response.body)
                cy.writeFile(`cypress\\fixtures\\reqresResponseJson_${data.name}.json`, response.body)
                //   cy.writeFile('C:/Users/kallzz/Documents/shftApiAutomation/cypress/fixtures/excelCSV.csv',response.body) 
            })
        })
    })
})