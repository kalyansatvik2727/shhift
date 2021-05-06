
const page = {
    literals: {
        INTRO_TEXT: 'Get estimated loan terms in 60 seconds!',
        GETMYTERMS: 'Get my terms',
        CONTINUE: 'Continue',
        YEAR:'Year'
    },
    elements: {
        emailInput: '#email',
        phoneInput: '#phone',
        passwordInput: '#password',
        iAgreeCheckbox: '#terms_terms',
        monthlyRent: '#MonthlyDebt',
        income: '#Income',
        creditScore: '#CreditScore'

    },
    actions: {
        validateIntroPageText(){
            cy.contains(literals.INTRO_TEXT).should('be.visible')
        },
        clickOnGetMyTermsButton(){
            cy.contains(literals.GETMYTERMS).click()
        },
        enterEmail(value){
            cy.get(page.elements.emailInput).type(value)
        },
        enterPhoneNumber(value){
            cy.get(page.elements.phoneInput).type(value)
        },
        enterPassword(value){
            cy.get(page.elements.passwordInput).type(value)
        },
        checkIAgreeCheckbox(){
            cy.get(page.elements.iAgreeCheckbox).check()
        },
        clickOnContinueButton(){
            cy.contains(literals.GETMYTERMS).click()
        },
        enterMonthlyRent(value){
            cy.get(page.elements.monthlyRent).type(value)
        },
        enterIncome(value){
            cy.get(page.elements.income).type(value)
        },
        selectYear(){
            cy.contains(page.elements.YEAR).click()
        },
        enterCreditScore(value){
            cy.get(page.elements.creditScore).type(value)
        }
    }
}

export default page