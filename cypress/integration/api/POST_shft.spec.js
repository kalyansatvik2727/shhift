/// <reference types="cypress" />

describe('API Calls', function () {
    it('POST',function(){
        cy.request({
            method: 'POST',
            url: 'https://fulfillment.staging.shiftdev.io/v1/taxfee/calculate', 
            headers:{
                'content-type': 'application/json'
            },
            auth:{
                'user': '',
                'pass': ''
            },
            body: {
                "applicationType": "TitleAndRegistration",
                "owner": {
                  "firstName": "John",
                  "isIndividual": true,
                  "lastName": "Doe",
                  "ownerType": "Individual"
                },
                "plateDestination": {
                  "name": "John Doe",
                  "type": "Owner"
                },
                "registration": {
                  "action": "NewRegistration",
                  "address": {
                    "city": "San Francisco",
                    "county": "Lake County",
                    "state": "CA",
                    "street": "2525 16th St",
                    "zipCode": "94103",
                    "zipCodeExt": 1234
                  }
                },
                "vehicle": {
                  "bodyType": "coupe",
                  "curbWeight": 6000,
                  "currentLicensePlateState": "OR",
                  "cylinderCount": 2,
                  "documentFees": 500,
                  "fuelType": "gasoline",
                  "grossWeightRating": 9000,
                  "horsepower": 150,
                  "listingState": "CA",
                  "manufacturesSuggestedRetailPrice": 50000,
                  "milesPerGallon": {
                    "city": 10,
                    "highway": 13
                  },
                  "numberOfDoors": 4,
                  "numberOfLienholders": 1,
                  "numberOfPlates": 1,
                  "odometerReading": 7000,
                  "sellingPrice": 30000,
                  "taxableSellingPrice": 30000,
                  "tradeInValue": 5000,
                  "vin": "4Y1SL65848Z411439",
                  "year": 2020
                }
              },
            failOnStatusCode: false
          }).then(response => {
              expect(response).to.have.property('status',200)
              cy.log(response.body)
              //cy.writeFile('/cypress/fixtures/responseJson.json',response.body) 
            //   cy.writeFile('C:/Users/kallzz/Documents/shftApiAutomation/cypress/fixtures/excel.xlsx',response.body) 
              cy.writeFile('C:/Users/kallzz/Documents/shftApiAutomation/cypress/fixtures/response.csv',response.body) 
          })
    })
})