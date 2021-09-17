import CommonActions from '../pages/CommonActions'
const commonActions = new CommonActions()

// Given('I send a POST request to calculate tax fee {string}', (st) => {

//     const testData = require(`../../../fixtures/testData_AZ.json`)
//     const testDataAZ = testData.st
//     cy.log(typeof(st))
//     cy.log(st)
//     cy.log(typeof(testDataAZ))
//     cy.log(testDataAZ)
//     testDataAZ.forEach((testDataRow) => {
//             const data = {
//                 state: testDataRow.registration.address.state,
//                 bodyType: testDataRow.vehicle.bodyType
//             }
    
//             cy.request({
//                 method: 'POST',
//                 url: 'https://fulfillment.staging.shiftdev.io/v1/taxfee/calculate',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 auth: {
//                     'user': Cypress.env('apiUsername'),
//                     'pass': Cypress.env('apiPassword')
//                 },
//                 body: testDataRow,
//                 failOnStatusCode: false
//             }).then(response => {
//                 expect(response).to.have.property('status', 200)
//                 cy.log(response.body)
//                 cy.writeFile(`cypress\\json_responses\\response_${data.state}_${data.bodyType}.json`, response.body)
//             })
//         })
// })

Given('I send a POST request to calculate tax fee {string}', (st) => {
    commonActions.postOperationWithState(st)
})