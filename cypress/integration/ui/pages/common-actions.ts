class CommonActions {
  public clickOnContinue(text: string) {
    cy.get('button span')
      .contains(text)
      .click();
  }

  public clickOnLink(link) {
    cy.get('span')
      .contains(link)
      .click();
  }
  public enterMake(make: string) {
    cy.get('#Make', { timeout: 10000 })
      .click()
      .type(make);
    // cy.get('p.TypographyParagraph__root').click({ multiple: false });
  }

  public selectModel() {
    cy.get('p.TypographyParagraph__root').click();
  }

  public enterModel(model: string) {
    cy.get('[id="Model"]')
      .click()
      .type(model);
  }

  public clickCarType(carType: string) {
    cy.get('p')
      .contains(carType)
      .click();
  }

  public clickOnCarDetails() {
    cy.get('.CarBrowserListSection__body div')
      .first()
      .click();
  }

  public checkCarDetailsShown() {
    cy.get('h1 span').should('be.exist');
  }

  public buyItNow() {
    cy.get('[id="VDPBuyOnlineTabScreenerId"]').click();
  }

  public clickBuyOnlineNowCTA() {
    cy.get('button')
      .contains('Buy online now')
      .click();
  }
  public checkDetailsPageShown(text: string) {
    cy.get('h3')
      .contains(text)
      .should('be.exist');
  }
}

export default CommonActions
