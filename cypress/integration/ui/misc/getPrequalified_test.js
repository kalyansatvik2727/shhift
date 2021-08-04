import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CommonActions from '../pages/CommonActions'
import Utilities from '../pages/utilities'
const page = require('../pages/getPrequalified_page')
const pageActions = page.actions

const commonActions = new CommonActions()
const util = new Utilities()
//const email = 'umar.mohammad' + util.randomNumber() + '@shift.com'
const email = 'test-buyer' + util.randomNumber() + '@shift.com'
const password = 'Test123#'

Given(/^I navigate to Finance Page with required loginn$/, () => {
	//commonActions.envLogin('/finance')
	cy.visit('https://shift.com/finance')
});

And(/^I click on Get pre-qualified button$/, () => {

	pageActions.clickOnGetPreQualifiedButton()
});

And(/^I validate Intro page$/, () => {
	pageActions.validateIntroPageText()
});

And(/^I click on Get my terms button$/, () => {
	pageActions.clickOnGetMyTermsButton()

});

And(/^I enter Email$/, () => {
	cy.visit('https://shift.com/prequalify-for-financing/account')
	pageActions.enterEmail(email)
});

And(/^I enter Phone Number$/, () => {
	pageActions.enterPhoneNumber('7077071234')
});

And(/^I enter password$/, () => {
	pageActions.enterPassword(password)
});

And(/^I check I agree checkbox$/, () => {
	pageActions.checkIAgreeCheckbox()
});

And(/^I click on Continue button$/, () => {
	pageActions.clickOnContinueButton()
});

And(/^I enter Monthly rent$/, () => {
	pageActions.enterMonthlyRent('800')
	pageActions.clickOnContinueButton()
});

And(/^I enter Total Income$/, () => {
	pageActions.enterIncome('100000')

});

And(/^I select Year$/, () => {
	pageActions.selectYear()
});

And(/^I click on Continue button$/, () => {
	pageActions.clickOnContinueButton()
});

And(/^I enter Credit Score$/, () => {
	pageActions.enterCreditScore('800')
});

And(/^I click on Continue button$/, () => {
	pageActions.clickOnContinueButton()
});

And(/^I check Accept Terms checkbox$/, () => {
	pageActions.checkAcceptTermsCheckbox()
});

When(/^I click on Continue button$/, () => {
	pageActions.clickOnContinueButton()
});

Then(/^I validate borrow amount is greater than zero$/, () => {
	cy.contains('$0.00').should('not.be.visible')
});

And(/^I validate APR range is greater than zero$/, () => {
	cy.contains('0.00%*').should('not.be.visible')
});
