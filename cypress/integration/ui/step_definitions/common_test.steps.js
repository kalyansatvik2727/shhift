import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import CommonActions from '../pages/CommonActions';
const commonActions = new CommonActions();

Given(
  'I navigate to shift home page with forcebase url and required login',
  () => {
    return commonActions.envLogin('/');
  }
);

And('I validate Modal {string}', (text) => {
  return cy.get('div[class*=Modal__is-open]').contains(text);
});

And('I go to {string}', (url) => {
  cy.log("baseurl:"+Cypress.config().baseUrl);
  cy.visit(url);
});

And('I close Modal', (text) => {
  return cy.get('div[class*=Modal__close]').click();
});

And('I validate {string} section', (text) => {
  return cy.contains(text);
});

And('I validate {string} text', (text) => {
  return cy.contains(text);
});

And('I validate {string} text is not exist', (text) => {
  return cy.contains(text).should('not.exist');
});

And('I validate {string} link', (text) => {
  return cy.contains(text);
});

And('I click on {string} link', (text) => {
  return cy.contains(text).click().wait(5000);
});

And('I end session', (text) => {
  cy.clearCookies();
});

And('I set geolocation cookies', () => {
  //geolocation cookies for San Francisco
  cy.setCookie('override_longitude', '-121.4636294', {path: '/'});
  cy.setCookie('override_latitude', '38.5989784', {path: '/'});
  cy.setCookie('override_zipcode', '94118', {path: '/'});
  cy.reload();
});

And(/^I set login cookies$/, () => {
  cy.log('STAGING_TOKEN: '+Cypress.env('STAGING_TOKEN'));
  cy.setCookie('STAGING_TOKEN', Cypress.env('STAGING_TOKEN'));
});

Given(/^I update the env to staging$/, () => {
  cy.visit('https://staging.shift.com');
});

And(/^I navigate to staging cars page$/, () => {
  cy.visit('https://staging.shift.com/cars');
});

And('I navigate to favorites cars page', () => {
  cy.visit('https://staging.shift.com/favorites');
});

And('I enter data {string} in {string}', (text,locator) => {
  cy.get(locator).clear().type(text);
});

And('I navigate back', () => {
  cy.go('back')
});