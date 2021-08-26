const testData = require('../../fixtures/testData.json')
describe('API Calls', function () {
  testData.forEach((testDataRow) => {
    // const data = {
    //     name: testDataRow.name,
    //     job: testDataRow.job
    // }
    it('POST', function () {
      cy.request({
        method: 'POST',
        url: 'https://fulfillment.staging.shiftdev.io/v1/taxfee/calculate',
        headers: {
          'content-type': 'application/json'
        },
        auth: {
          'user': 'service_fulfillment_connect',
          'pass': 'E9yudmWE6!Xtcem*ov3c_jXyTXeiya'
        },
        body: testDataRow,
        failOnStatusCode: false
      }).then(response => {
        expect(response).to.have.property('status', 200)
        cy.log(response.body)
        //cy.writeFile('/cypress/fixtures/responseJson.json',response.body) 
        //   cy.writeFile('C:/Users/kallzz/Documents/shftApiAutomation/cypress/fixtures/excel.xlsx',response.body) 
        cy.writeFile(`cypress\\fixtures\\reqresResponseJson_${testDataRow.state}_${testDataRow.bodyType}.json`, response.body)
      })
    })
  })
})