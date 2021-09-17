const trainingUrl = 'https://forcebase1.a.shiftdev.io'
const liveUrl = 'https://shift.com'
const testData = require('../../../fixtures/testData.json')
class CommonActions{
    login(relativeUrl){
        cy.visit(Cypress.env('baseUrl')+'/admin/devops/crypto/refresh_token_login');
        var token = Cypress.env('token');

        cy.get('input[name=auth_token]').type(token,{log:false});
        cy.get('form').submit();

        // TODO to speed up subsequent tests, you should save the cookie value
        // and then reuse it other tests in the same run.

        cy.visit(Cypress.env('baseUrl')+relativeUrl);
    }

    envLogin(relativeUrl){
        if(Cypress.env('baseUrl')!==trainingUrl){
            // cy.log(Cypress.env('baseUrl'))
            // cy.log(liveUrl)
            cy.visit(Cypress.env('baseUrl')+relativeUrl)
        }else if(Cypress.env('baseUrl')===trainingUrl){
            // cy.log(Cypress.env('baseUrl'))
            // cy.log(trainingUrl)
            this.login(relativeUrl)
        }

    }

    postOperationWithState(_state){
    const testData = require(`../../../fixtures/testData_${_state}.json`)
    const testDataAZ = testData._state
        //const testData = testData._state
        cy.log(typeof(_state))
        cy.log(_state)
        cy.log(typeof(testDataAZ))
        cy.log(testDataAZ)
        // testData.forEach((testDataRow) => {
        //     const data = {
        //         state: testDataRow.registration.address.state,
        //         bodyType: testDataRow.vehicle.bodyType
        //     }
    
        //     cy.request({
        //         method: 'POST',
        //         url: 'https://fulfillment.staging.shiftdev.io/v1/taxfee/calculate',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         auth: {
        //             'user': Cypress.env('apiUsername'),
        //             'pass': Cypress.env('apiPassword')
        //         },
        //         body: testDataRow,
        //         failOnStatusCode: false
        //     }).then(response => {
        //         expect(response).to.have.property('status', 200)
        //         cy.log(response.body)
        //         cy.writeFile(`cypress\\fixtures\\response_${data.state}_${data.bodyType}.json`, response.body)
        //     })
        // })
    }

}
export default CommonActions