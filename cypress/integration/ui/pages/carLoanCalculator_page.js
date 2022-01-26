const page = {
  literals: {
    header1: 'Car loan calculator',
    header2:
      'Estimate monthly payment or maximum car price with a loan calculator',
  },
  elements: {
    header1: 'h1[class*=Typo]',
    header2: 'h5[class*=Typo]',
    button: 'button',
    carPriceTextBox: 'input[id=Carprice]',
    monthlyPaymentTextBox: 'input[id=Monthlypayment]',
    downPaymentTextBox: 'input[id=Downpayment]',
  },
  actions: {
    validateHeader1() {
      cy.get(page.elements.header1, { timeout: 72000 })
        .invoke('text')
        .then((text) => {
          cy.wrap(text).should('eq', page.literals.header1);
        });
    },
    validateHeader2() {
      cy.get(page.elements.header2, { timeout: 72000 })
        .invoke('text')
        .then((text) => {
          cy.wrap(text).should('eq', page.literals.header2);
        });
    },
    validateCreditCoreEstimatedAPRTitle() {
      cy.get('label[class*=Selector__label] p[class*=Typo]')
        .eq(0)
        .invoke('text')
        .then((text) => {
          cy.wrap(text).should('eq', 'Credit score · Estimated APR');
        });
    },
    assertRebuildingButton() {
      cy.get(page.elements.button)
        .eq(0)
        .click()
        .should('have.attr', 'aria-selected', 'true');
    },
    assertGoodButton() {
      cy.get(page.elements.button)
        .eq(1)
        .click()
        .should('have.attr', 'aria-selected', 'true');
    },
    assertExcellentButton() {
      cy.get(page.elements.button)
        .eq(2)
        .click()
        .should('have.attr', 'aria-selected', 'true');
    },
    validateLoanLengthTitle() {
      cy.get('label[class*=Selector__label] p[class*=Typo]')
        .eq(1)
        .invoke('text')
        .then((text) => {
          cy.wrap(text).should('eq', 'Loan length');
        });
    },
    assert24moButton() {
      cy.get(page.elements.button)
        .eq(3)
        .click()
        .should('have.attr', 'aria-selected', 'true');
    },
    assert36moButton() {
      cy.get(page.elements.button)
        .eq(4)
        .click()
        .should('have.attr', 'aria-selected', 'true');
    },
    assert48moButton() {
      cy.get(page.elements.button)
        .eq(5)
        .click()
        .should('have.attr', 'aria-selected', 'true');
    },
    assert60moButton() {
      cy.get(page.elements.button)
        .eq(6)
        .click()
        .should('have.attr', 'aria-selected', 'true');
    },
    assert72moButton() {
      cy.get(page.elements.button)
        .eq(7)
        .click()
        .should('have.attr', 'aria-selected', 'true');
    },
    validateCarPriceTitle() {
      cy.get('div p')
        .eq(13)
        .invoke('text')
        .then((text) => {
          cy.wrap(text).should('eq', 'Car price');
        });
    },
    validateCarPriceInput() {
      cy.get(page.elements.carPriceTextBox).should('be.visible');
    },
    validateMonthlyPaymentTitle() {
      cy.get('div p')
        .eq(17)
        .invoke('text')
        .then((text) => {
          cy.wrap(text).should('eq', 'Monthly payment');
        });
    },
    validateMonthlyPaymentInput() {
      cy.get(page.elements.monthlyPaymentTextBox).should('be.visible');
    },
    validateDownPaymentTitle() {
      cy.get('div p')
        .eq(21)
        .invoke('text')
        .then((text) => {
          cy.wrap(text).should('eq', 'Down payment');
        });
    },
    validateDownPaymentInput() {
      cy.get(page.elements.downPaymentTextBox).should('be.visible');
    },
    validateShopCarsButton() {
      cy.get('button span')
        .eq(0)
        .invoke('text')
        .then((text) => {
          cy.wrap(text).should('contain', 'Shop');
        });
    },
    validateEstimatedLoanDetailsButtonText() {
      cy.get('button span')
        .eq(1)
        .invoke('text')
        .then((text) => {
          cy.wrap(text).should('contain', 'Estimated loan details');
        });
    },
    clickOnEstimatedLoanDetailsButton() {
      cy.get('button span').eq(1).click();
    },
    validateEstimatedLoanDetailsModal() {
      cy.get('h4[class*=Typo]')
        .invoke('text')
        .then((text) => {
          cy.wrap(text).should('contain', 'Estimated loan details');
        });
    },
    closeEstimatedLoanDetailsModal() {
      cy.get('.Modal__close').click();
    },
  },
};

export default page;
