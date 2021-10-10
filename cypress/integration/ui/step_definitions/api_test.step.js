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

Given('I send an XML POST request', () => {
    describe('XML call', function () {
        before(() => {
            cy.fixture("xml_body.xml").as('xmlBody').then((xmlBody) => {
                cy.intercept('GET', 'xml_body.xml', xmlBody)
            })
        })
    
        it("cy.request - make an XHR request", function () {
            let request_state, feeTotal, amount
            const xml_state = Cypress.$.parseXML(this.xmlBody)
            const state = xml_state.getElementsByTagName('State')
            Cypress.$(state).each(function () {
                request_state = Cypress.$(this).text()
                cy.log(request_state)
            })
    
            cy.request({
                method: 'POST',
                log: true,
                url: "https://stagingsvc.autotitling.com/AGFService/v1.0/",
                headers: {
                    'content-type': 'application/xml',
                    'userToken': 'U2hpZnRBZ2Y6NXo5TGRlSWFONUc1Nmd4S3ZhTmlVVFRlMUlJcHNnWGtxWGZHTUViYnc1Zz0='
                },
                body: this.xmlBody,
                failOnStatusCode: false
            }).then(response => {
                expect(response).property("status").to.equal(200);
                const xml = Cypress.$.parseXML(response.body)
                // cy.log(response.body)
                const FeeTotal = xml.getElementsByTagName('FeeTotal')
                Cypress.$(FeeTotal).each(function () {
                    feeTotal = Cypress.$(this).text()
                    cy.log(feeTotal)
                })
    
                const TotalSalesTax = xml.getElementsByTagName('TotalSalesTax')
                Cypress.$(TotalSalesTax).each(function () {
                    amount = Cypress.$(this).find("Amount").text()
                    cy.log(amount)
                })
                const json = {"State":`${request_state}`,"FeeTotal":`${feeTotal}`,"Amount":`${amount}`}
                // cy.log(json)
                cy.writeFile(`cypress\\fixtures\\xmlResponse_${request_state}`, json)
            });
        });
    })
    cy.log("Request Success")
})

