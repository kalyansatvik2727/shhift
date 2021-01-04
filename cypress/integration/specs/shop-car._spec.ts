import ShopCarPage from '../pages/shop-car.page'
import Actions from '../pages/common-actions';
import Utilities from '../pages/utilities';

const shopCarPage = new ShopCarPage()
const actions = new Actions()
const utils = new Utilities()

const randomNumber = utils.randomNumber();

describe('Shop Cars Page Test', () => {

  it('launch Shop cars page', () => {
    //shopCarPage.launchShopCarsURL();
    cy.clearCookies();
    cy.visit('https://shift.com/cars/oregon')
  });

  it.skip('enter zipcode', () => {
    shopCarPage.enterZipcode('94080');
  });

  it.skip('update zipcode', () => {
    cy.get('button[type=submit]').click();
  });

  it.skip('close popup', () => {
    cy.get('.ub-emb-scroll-wrapper > .ub-emb-visible > .ub-emb-iframe', { timeout: 50000 }).should('be.visible');
    cy.get('.ub-emb-scroll-wrapper').click();
  });

  it.skip('click on Shop cars link', () => {
    actions.clickOnLink('Shop cars');
  });

  it('select make', () => {
    //shopCarPage.enterMake('Cadillac');
    cy.get('input[id=Make]').click()
    cy.get('div[class*=Dropdown__options] li').contains('Cadillac').click()
    
    shopCarPage.clickOnCarDetails();
    cy.get('div[class*=CarProfilePage] a[class*=Link]',{timeout:100000}).eq(3).should('be.visible').click()
    //cy.get('a div',{timeout:100000}).contains('Test drive').should('be.visible').click()
    cy.pause()
  });

  it.skip('click on first search result', () => {
    shopCarPage.clickOnCarDetails();
  });

  it.skip('scroll to center to focus on Book test drive', () => {
    cy.get('button.Selector__choice:nth-child(1)', { timeout: 100000 }).should('be.visible');
    cy.scrollTo('center');
  });

  it('click on Book test drive', () => {
    cy.wait(10000);
    cy.get('.Button__root > .Button__content', { timeout: 25000 })
      .contains('Book test drive')
      .should('be.visible')
      .click();
  });

  it('enter email', () => {
    shopCarPage.enterEmail('umar.mohammad+' + randomNumber + '@shift.com');
    
  });

  it('click on continue', () => {
    actions.clickOnContinue('Continue');
  });

  it('click on Bring it to me link', () => {
    cy.get('h5', { timeout: 50000 })
      .contains('Bring it to me')
      .click();
  });

  it('enter street', () => {
    cy.get('input#street', { timeout: 10000 }).type('185 Channel St');
  });

  it('enter city', () => {
    cy.get('input#city').type('San Francisco');
  });

  it('select state', () => {
    cy.get('select#state_mobile').select('CA');
  });

  it('enter zipcode', () => {
    cy.get('input#zip').type('94158');
  });

  it('click on continue', () => {
    actions.clickOnContinue('Continue');
  });
  it('click on confirm address link', () => {
    cy.get('h5', { timeout: 50000 }).click();
  });

  it('click on time slot', () => {
    cy.get('button[class*=TimeGridItem]', { timeout: 10000 })
      .eq(0)
      .should('be.visible')
      .click();
  });

  it('click on continue', () => {
    actions.clickOnContinue('Continue');
  });

  it('click on Yes, I’d be interested', () => {
    cy.wait(5000);
    cy.get('button span')
      .contains('Yes, I’d be interested')
      .click();
  });

  it('enter first name', () => {
    cy.get('input[name=firstName]', { timeout: 50000 })
      .should('be.visible')
      .type('TEST');
  });

  it('enter last name', () => {
    cy.get('input[name=lastName]', { timeout: 50000 }).type('TEST');
  });

  it('enter phone', () => {
    cy.get('input[name=phone]', { timeout: 50000 }).type('(232) 792-3939');
  });

  it('select TV', () => {
    cy.get('select[id*=Howdid]').select('TV', { force: true });
  });

  it('click on Reserve', () => {
    cy.get('span div')
      .contains('Reserve')
      .click();
  });

  it('validate Test Drive Booking title', () => {
    cy.get('h1[class=TestDriveBookingScreen__title]', { timeout: 50000 }).should('be.visible');
  });

  it('click on i will do this later', () => {
    cy.get('a', { timeout: 50000 })
      .contains('I’ll do this later')
      .click();
  });

  it('click on SHIFT logo', () => {
    cy.get('div.MultiScreenForm__logo', { timeout: 50000 }).click();
  });
});
