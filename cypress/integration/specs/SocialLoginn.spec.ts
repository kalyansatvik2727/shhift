import 'cypress-localstorage-commands'

before(() => {
  describe('Login through Google', () => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')
    const loginUrl = Cypress.env('baseUrl')
    const localStorageItem = Cypress.env('lsdItemName')
    const socialLoginOptions = {
      username: username,
      password: password,
      loginUrl: loginUrl,
      headless: false,
      logs: false,
      loginSelector: '[href*="google"]',
      postLoginSelector: '.account-panel'
    }

    // Clears localStorage prior to getting any new localStorage items
    cy.clearLocalStorageSnapshot()

    return cy.task('GoogleSocialLogin', socialLoginOptions).then(({lsd}) => {
      // Check for localStorage item, such as a JWT or similar
      const hasLsd = Object.keys(lsd)
        .filter(item => item === localStorageItem)
        .pop()

      if (hasLsd) {
        cy.window().then(() => {
          Object.keys(lsd).forEach(key => {
            cy.setLocalStorage(key, lsd[key])
          })
        })

        // Saves a snapshot of localStorage
        cy.saveLocalStorage()
      }
    })
  })
})

// Restore the saved localStorage snapshot prior to each test
beforeEach(() => {
  cy.restoreLocalStorage()
})

// Save the localStorage snapshot after each test
afterEach(() => {
  cy.saveLocalStorage()
})

it('Login',()=>{
  cy.log('test')
})