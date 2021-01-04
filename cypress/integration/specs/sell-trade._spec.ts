import SellTradePage from '../pages/sell-trade.page'
import Actions from '../pages/common-actions'
import Utilities from '../pages/utilities'

const sellTradePage = new SellTradePage()
const actions = new Actions()
const utils = new Utilities()

describe('Sell or Trade Cars Page Test', () => {

  it('Sell Trade Car', () => {
    cy.visit('https://shift.com/sell-my-car');
    sellTradePage.selectYear('2015');
    sellTradePage.selectMake('Honda');
    sellTradePage.selectModel('Civic');
    sellTradePage.clickGetEstimateButton('Get my estimate');
    sellTradePage.enterZipcode('94112');
    sellTradePage.enterMileage('1000');
    sellTradePage.selectTrim('SE');
    sellTradePage.selectExteriorColor('Black');
    //sellTradePage.selectTransmission('5-Speed Manual');
    sellTradePage.isLeased('No');
    actions.clickOnContinue('Continue');
    actions.clickOnContinue('Continue');
    cy.get('button[value=no]').each(($e, index,$list) => {
      cy.get('button[value=no]')
        .eq(index)
        .click();
    });

    sellTradePage.clickGetMyOfferButton('Get');
    cy.get('div[id*=Pick] span',{timeout:100000}).eq(0).invoke('text').then((dollar)=>{
        cy.log(dollar)
        const value = utils.splitDollar(dollar)
        cy.log(value)
        const dollarAmount = parseInt(value)
        if(!(value>0)){
          cy.log('Invalid borrow amount displayed '+value)
        }
        else{
              cy.log('borrow amount is greater than zero: '+value)
        }
      })

  });


});
