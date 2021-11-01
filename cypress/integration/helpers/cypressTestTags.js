//pre-requisite - npm install --save-dev cypress-select-tests

//cypress/plugins/index.js - 
// const selectTestsWithGrep = require('cypress-select-tests/grep')
// module.exports = (on, config) => {
//     on('file:preprocessor', selectTestsWithGrep(config))
//   }

//commandline execution
//npx cypress run --env grep="Smoke"
//npx cypress run --env grep="E2E"
//npx cypress run --env grep="E2E",grep="Smoke"
//npx cypress run --env grep="E2E",invert=true --spec 'cypress/integration/spec.js'

describe('Login test (Smoke)', () => {
    it('Test', () => {
        cy.log('Smoke test executed')
    })
})

describe('Home page test (E2E)', () => {
    it('Test', () => {
        cy.log('E2E test executed')
    })
})

describe('Smoke and E2E test (Smoke, E2E)', () => {
    it('Test', () => {
        cy.log('Smoke and E2E test executed')
    })
})

describe('General test', () => {
    it('Test', () => {
        cy.log('General test executed')
    })
})