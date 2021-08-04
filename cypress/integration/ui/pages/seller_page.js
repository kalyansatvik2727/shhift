class SellerPage {
  verifySellerPage() {
    cy.url().should('include', '/sell-my-car');
    cy.get('#seller_landing_quote_flow_entry_point_ymm_year', {
      timeout: 10000,
    }).should('be.visible');
    cy.get('#seller_landing_quote_flow_entry_point_ymm_make', {
      timeout: 10000,
    })
      .should('be.visible')
      .should('be.disabled');
    cy.get('#seller_landing_quote_flow_entry_point_ymm_model', {
      timeout: 10000,
    })
      .should('be.visible')
      .should('be.disabled');
    cy.get('button').contains('Get my estimate');
  }

  verifyGMEDisabled() {
    // return cy.get('button').contains('Get my estimate').should('be.disabled');
    return cy.get('button').contains('Get my estimate');
  }

  verifyGMEEnabled() {
    // return cy.get('button').contains('Get my estimate').should('be.enabled');
    cy.get('button').contains('Get my estimate');
    cy.wait(1500);
  }

  clickGMEButton() {
    const button = cy.get('button').contains('Get my estimate');
    button.click();
  }

  selectYear() {
    return cy
      .get('#seller_landing_quote_flow_entry_point_ymm_year')
      .select('2014');
  }

  selectMake() {
    return cy
      .get('#seller_landing_quote_flow_entry_point_ymm_make', { timeout: 500 })
      .select('Audi');
  }

  selectModel() {
    return cy
      .get('#seller_landing_quote_flow_entry_point_ymm_model', { timeout: 500 })
      .select('A4');
  }

  selectYear2018(){
    return cy
      .get('#seller_landing_quote_flow_entry_point_ymm_year')
      .select('2018');
  }

  selectTeslaMake(){
    return cy
      .get('#seller_landing_quote_flow_entry_point_ymm_make', { timeout: 500 })
      .select('Tesla');
  }

  selectModel3(){
    return cy
      .get('#seller_landing_quote_flow_entry_point_ymm_model', { timeout: 500 })
      .select('Model 3');
  }

  selectLP() {
    return cy.get('button').contains('Enter your License Plate').click();
  }

  selectVIN() {
    return cy.get('button').contains('VIN').click();
  }

  addLP() {
    const lp = cy.get('input[name="license_plate_number"]', { timeout: 10000 });
    lp.type('7VQG503');
  }

  addState() {
    return cy.get('#license_plate_state_dropdown').select('CA');
  }

  addVIN() {
    const vin = cy.get('input[name="vin"]', { timeout: 10000 });
    vin.type('2HGFC2F57GH563084');
  }
}

export default SellerPage;
