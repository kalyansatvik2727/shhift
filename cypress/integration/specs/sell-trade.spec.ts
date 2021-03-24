import SellTradePage from '../pages/sell-trade.page'
import Actions from '../pages/common-actions'
import Utilities from '../pages/utilities'
import CommonActions from '../../support/CommonActions'
const commonActions = new CommonActions()

const sellTradePage = new SellTradePage()
const actions = new Actions()
const utils = new Utilities()

describe('Sell or Trade Cars Page Test', () => {
  before(() => {
    commonActions.envLogin('/sell-my-car')
  })

  it('Sell Trade Car', () => {
    sellTradePage.selectYear('2015');
    sellTradePage.selectMake('Honda');
    sellTradePage.selectModel('Civic');
    sellTradePage.clickGetEstimateButton('Get my estimate');
    sellTradePage.enterZipcode('94112');
    sellTradePage.enterMileage('1000');
    sellTradePage.selectTrim('SE');
    sellTradePage.selectExteriorColor('Black');
    cy.get('[value="LienStatusLease"] > .TypographyParagraph__root').click()
    //sellTradePage.selectTransmission('5-Speed Manual');
    // sellTradePage.isLeased('No');
    actions.clickOnContinue('Continue');
    actions.clickOnContinue('Continue');
    cy.get('button[value=no]').each(($e, index, $list) => {
      cy.get('button[value=no]')
        .eq(index)
        .click();
    });

    sellTradePage.clickGetMyOfferButton('Get');

  });

  it('Validate Dollar Value', () => {
    cy.get('div[id*=Pick] span', { timeout: 100000 }).eq(0).invoke('text').then((dollar) => {
      cy.wrap(utils.splitDollar(dollar)).then((value) => {
        if (parseInt(value) <= 0) {
          cy.log('Invalid borrow amount displayed')
        } else {
          cy.log('borrow amount is greater than zero: ' + value)
        }
      })

    })

  })


});
