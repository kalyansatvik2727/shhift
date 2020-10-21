class FinancingPage{
  public clickOnGetPreQualifiedButton() {
    cy.get('button[class*=big]',{timeout: 50000}).eq(0).click()
  }

  public clickOnGetStartedButton() {
    cy.get('button span',{timeout: 50000}).contains('Get Started').click()
  }

  public enterEmail(email) {
    cy.get('#email',{timeout: 50000}).should('be.visible').type(email)
  }

  public enterPassword(password) {
    cy.get('#password',{timeout: 50000}).type(password)
  }

  public checkTermsCheckBox() {
    cy.get('#terms_terms',{timeout: 50000}).check()
  }

  public enterRentOrMortgage(amount) {
    cy.get('#MonthlyDebt', {timeout: 50000}).should('be.visible').type(amount, {delay:100})
  }

  public enterIncome(income) {
    cy.get('#Income',{timeout: 50000}).should('be.visible').type(income, {delay:100})
  }

  public selectYear() {
    cy.get('button p',{timeout: 50000}).contains('Year').click()
  }

  public enterCreditScore(score) {
    cy.get('#CreditScore',{timeout: 50000}).should('be.visible').type(score, {delay:100})
  }

  public checkAgreeTermsCheckBox() {
    cy.get('#AgreeToTerms_AgreedToTerms',{timeout: 50000}).check()
  }
}
export default FinancingPage