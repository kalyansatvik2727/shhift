
const page = {
    elements: {
        monthlyPaymentLabel: '[for*="Monthly payment"]',
        monthlyPaymentInput: 'input[name=car_finder_input_price]',
        emailInput: 'form input[name="Email Input"]',

    },
    actions: {
        clickOnCarFinderMenuItem() {
            cy.contains('Car finder', { timeout: 50000 }).should('be.visible').click()
        },
        clickOnStartCarFinderButton() {
            cy.contains('Start car finder', { timeout: 50000 }).should('be.visible').click()
        },
        selectCard(value) {
            cy.contains(value, { timeout: 50000 }).should('be.visible').click()
        },
        clickOnButton(value) {
            cy.contains(value, { timeout: 50000 }).should('be.visible').click()
        },
        clickOnMonthlyPayment() {
            cy.get(page.elements.monthlyPaymentLabel, { timeout: 50000 }).click()
        },
        enterMonthlyPayment(value) {
            cy.get(page.elements.monthlyPaymentInput, { timeout: 50000 }).clear().type(value)
        },
        enterEmail(value) {
            cy.get(page.elements.emailInput, { timeout: 50000 }).should('be.visible').type(value)
        },
        clickOnSeeMyCarsButton() {
            cy.contains('See my cars').click()
        },
        clickOnViewCompleteDetails() {
            cy.wait(5000)
            cy.contains('View complete details', { timeout: 50000 }).should('be.visible').click()
        }
    }
}

export default page