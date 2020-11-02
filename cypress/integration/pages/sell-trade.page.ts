class SellTradePage {
  public launchSellTradeCarURL() {
    cy.visit('/sell-my-car?quoteFlowEntryPointVariation=off');
  }

  public selectYear(year: string) {
    cy.get('select[name="Year"]').select(year);
  }

  public selectMake(make: string) {
    cy.get('select[name="Make"]').select(make);
  }

  public selectModel(model: string) {
    cy.get('select[name="Model"]').select(model);
  }

  public clickEstimateButton(text: string) {
    cy.get('button')
      .contains('Get my estimate')
      .click();
  }

  public clickGetMyOfferButton(text: string) {
    cy.get('button span')
      .contains(text)
      .click();
  }

  public clickSubmitButton() {
    cy.get('button > span')
      .contains('Submit')
      .click();
  }

  public checkDetailsPageShown(text: string) {
    cy.get('div')
      .contains(text)
      .should('be.exist');
  }

  public enterZipcode(zipCode: string) {
    cy.get('input[name=zipCode]', { timeout: 50000 })
      .type(zipCode, { delay: 100 })
      .should('have.value', zipCode);
  }
  public enterMileage(mileage: string) {
    cy.get('input[name=mileage]', { timeout: 50000 })
      .type(mileage, { delay: 100 })
      .should('have.value', mileage);
  }
  public selectTrim(trim: string) {
    cy.get('#trim_mobile', { timeout: 50000 }).select(trim);
  }

  public selectExteriorColor(colour: string) {
    cy.get('button')
      .contains(colour)
      .click();
  }

  public selectTransmission(colour: string) {
    cy.get('button')
      .contains(colour)
      .click();
  }

  public isLeased(option: string) {
    cy.get('button')
      .contains(option)
      .click();
  }
  public enterFirstName(firstName: string) {
    cy.get('#firstName')
      .type(firstName, { delay: 100, timeout: 50000 })
      .should('have.value', firstName);
  }

  public enterLastName(lastName: string) {
    cy.get('#lastName', { timeout: 50000})
      .type(lastName, { delay: 100 })
      .should('have.value', lastName);
  }
  public enterEmail(email: string) {
    cy.get('#email', { timeout: 50000 })
      .type(email, { delay: 100 })
      .should('have.value', email);
  }
  public enterPhoneNumber(phoneNumber: string) {
    cy.get('#phoneNumber', { timeout: 50000 }).type(phoneNumber, { delay: 100 });
  }
  public clickContinueButton() {
    cy.get('button')
      .contains('Continue')
      .click();
  }

  public selectAdditionalFeatures(text: string) {
    cy.contains('label', text)
      .prev()
      .click();
  }
  public selectWarningLight(light: string) {
    cy.get('button')
      .contains(light)
      .first()
      .click();
  }
  public selectAfterMarketParts(parts: string) {
    cy.get(`button[name="aftermarketParts"][value="${parts}"]`).click();
  }
  public selectSmokerCar(smoker: string) {
    cy.get(`button[name="smokedIn"][value="${smoker}"]`).click();
  }

  public clickGetEstimateButton(text:string) {
    cy.get('button')
      .contains(text)
      .click();
  }
  public checkEstimateFlowComplete(text: string) {
    cy.get('h4')
      .contains(text)
      .should('be.exist');
  }
}

export default SellTradePage
