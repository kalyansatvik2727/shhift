import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CommonActions from '../pages/commonActions';
import Utilities from '../pages/utilities';
const page = require('../pages/prequal_page');
const pageActions = page.actions;

const commonActions = new CommonActions();
const util = new Utilities();
const email = 'umar.mohammad' + util.randomNumber() + '@shift.com';
const password = 'Test123#';

Given(/^I navigate to Finance Page with required login$/, () => {

  cy.clearCookie('session');
  cy.clearCookie('loginToken');
  cy.clearLocalStorage();
  // cy.visit('https://shift.com/finance');
  commonActions.envLogin('/finance');
});

And(/^I click on Get pre-qualified button$/, () => {
  pageActions.clickOnGetPreQualifiedButton();
});

And(/^I validate Intro page$/, () => {
  pageActions.validateIntroPageText();
});

And(/^I click on Get my terms button$/, () => {
  cy.wait(500);
  pageActions.clickOnGetMyTermsButton();
});

And(/^I enter Email$/, () => {
  cy.wait(500);
  pageActions.enterEmail(email);
});

And(/^I enter Phone Number$/, () => {
  pageActions.enterPhoneNumber('7077071234');
});

And(/^I enter password$/, () => {
  pageActions.enterPassword(password);
});

And(/^I check I agree checkbox$/, () => {
  cy.wait(500);
  pageActions.checkIAgreeCheckbox();
});

And(/^I click on Continue button$/, () => {
  pageActions.clickOnContinueButton();
});

And(/^I enter Monthly rent$/, () => {
  pageActions.enterMonthlyRent('800');
  cy.wait(500);
  pageActions.clickOnContinueButton();
});

And(/^I enter Total Income$/, () => {
  pageActions.enterIncome('100000');
});

And(/^I select Year$/, () => {
  cy.wait(500);
  pageActions.selectYear();
});

And(/^I click on Continue button$/, () => {
  cy.wait(500);
  pageActions.clickOnContinueButton();
});

And(/^I enter Credit Score$/, () => {
  pageActions.enterCreditScore('800');
});

And(/^I click on Continue button$/, () => {
  pageActions.clickOnContinueButton();
});

And(/^I check Accept Terms checkbox$/, () => {
  pageActions.checkAcceptTermsCheckbox();
});

When(/^I click on Continue button$/, () => {
  pageActions.clickOnContinueButton();
});

Then(/^I validate borrow amount is greater than zero$/, () => {
  // TODO: think on a better solution for matching this
  cy.wait(7000)
  cy.get('div[class]').eq(18).invoke('text').then((text) => {
    const dollarAmt = text;
    const amt = parseInt(dollarAmt.substring(1))
    cy.log(amt)
    cy.log(amt > 0)
  })  
});

And(/^I validate APR range is greater than zero$/, () => {
  cy.get('div[class]').eq(21).invoke('text').then((text) => {
    const aprPercentage = text;
    cy.log(aprPercentage)
    const apr = aprPercentage.substring(0, 1)
    cy.log(apr)
    cy.log(apr > 0)
  })
});
