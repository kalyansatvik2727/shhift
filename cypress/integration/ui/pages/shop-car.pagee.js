class ShopCarPage {
  launchShopCarsURL() {
    cy.visit('https://shift.com/cars/oregon');
    //cy.waitForReact();
  }

  enterZipcode(zipcode) {
    cy.get('input[type=tel]', { timeout: 10000 })
      .clear()
      .type(zipcode);
  }

   enterEmail(email) {
    cy.get('input#email', { timeout: 50000 })
      .should('be.visible')
      .type(email);
  }

   clickBodyStyleDropdown() {
    cy.get('p')
      .contains('Bodystyle')
      .click();
  }
   enterMake(make) {
    cy.get('#Make', { timeout: 10000 })
      .type(make);
    // cy.get('p.TypographyParagraph__root').click({ multiple: false });
  }

   selectModel() {
    cy.get('p.TypographyParagraph__root').click();
  }

   enterModel(model) {
    cy.get('[id="Model"]')
      .click()
      .type(model);
  }

   clickCarType(carType) {
    cy.get('p')
      .contains(carType)
      .click();
  }

   clickOnCarDetails() {
    cy.get('.CarBrowserListSection__body div')
      .first()
      .click();
  }

   checkCarDetailsShown() {
    cy.get('h1 span').should('be.exist');
  }

   buyItNow() {
    cy.get('[id="VDPBuyOnlineTabScreenerId"]').click();
  }

   clickBuyOnlineNowCTA() {
    cy.get('button')
      .contains('Buy online now')
      .click();
  }
   checkDetailsPageShown(text) {
    cy.get('h3')
      .contains(text)
      .should('be.exist');
  }
}

export default ShopCarPage
