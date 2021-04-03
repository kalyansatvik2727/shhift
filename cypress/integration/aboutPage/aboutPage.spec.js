import CommonActions from '../aboutPage/CommonActions'
const commonActions = new CommonActions()

Given('I navigate to About Page with required login', () => {
    //cy.visit('https://www.google.co.in/')
    commonActions.envLogin('/about')
})

