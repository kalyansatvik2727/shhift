import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CommonActions from '../pages/CommonActions'
import Utilities from '../pages/utilities'
const page = require('../pages/carfinder_page')

const commonActions = new CommonActions()
const util = new Utilities()
const email = 'umar.mohammad'+util.randomNumber+'@shift.com'

Given(/^I navigate to Finance Page with required login$/, () => {
	return true;
});

And(/^I click on Get pre-qualified button$/, () => {
	return true;
});

And(/^I validate Intro page$/, () => {
	return true;
});

And(/^I click on Get my terms button$/, () => {
	return true;
});

And(/^I enter Email$/, () => {
	return true;
});

And(/^I enter Phone Number$/, () => {
	return true;
});

And(/^I enter password$/, () => {
	return true;
});

And(/^I check I agree checkbox$/, () => {
	return true;
});

And(/^I click on Continue button$/, () => {
	return true;
});

And(/^I enter Monthly rent$/, () => {
	return true;
});

And(/^I enter Total Income$/, () => {
	return true;
});

And(/^I select Year$/, () => {
	return true;
});

And(/^I click on Continue button$/, () => {
	return true;
});

And(/^I enter Credit Score$/, () => {
	return true;
});

And(/^I click on Continue button$/, () => {
	return true;
});

And(/^I check I agree checkbox$/, () => {
	return true;
});

When(/^I click on Continue button$/, () => {
	return true;
});

Then(/^I validate borrow amount is greater than zero$/, () => {
	return true;
});

And(/^I validate APR range is greater than zero$/, () => {
	return true;
});
