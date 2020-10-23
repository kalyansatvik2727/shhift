import SellTradePage from '../pages/sell-trade.page'
import Actions from '../pages/common-actions'
import Utilities from '../pages/utilities'

const sellTradePage = new SellTradePage()
const actions = new Actions()
const utils = new Utilities()

describe('Sell or Trade Cars Page Test', () => {

  before(()=>{
    
  })

  it.only('launch shift', () => {
    cy.visit('https://shift.com/sell-my-car');
    sellTradePage.selectYear('2015');
    sellTradePage.selectMake('Honda');
    sellTradePage.selectModel('Civic');
    sellTradePage.clickGetEstimateButton();
    sellTradePage.enterZipcode('94112');
    sellTradePage.enterMileage('1000');
    sellTradePage.selectTrim('SE');
    sellTradePage.selectExteriorColor('Black');
    //sellTradePage.selectTransmission('5-Speed Manual');
    sellTradePage.isLeased('No');
    actions.clickOnContinue();
    actions.clickOnContinue();
    cy.get('button[value=no]').each(($e, index) => {
      cy.get('button[value=no]')
        .eq(index)
        .click();
    });

    cy.get('button span')
      .contains('Get')
      .click();
      //comment
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

  it('launch shift', () => {
    cy.visit('https://shift.com/sell-my-car');
  });

  it('select year', () => {
    sellTradePage.selectYear('2015');
  });

  it('select make', () => {
    sellTradePage.selectMake('Honda');
  });

  it('select model', () => {
    sellTradePage.selectModel('Civic');
  });

  it('click on estimate button', () => {
    sellTradePage.clickGetEstimateButton();
  });

  it('enter zipcode', () => {
    sellTradePage.enterZipcode('94112');
  });

  it('enter mileage', () => {
    sellTradePage.enterMileage('1000');
  });

  it('select trim', () => {
    sellTradePage.selectTrim('SE');
  });

  it('select ExteriorColor', () => {
    sellTradePage.selectExteriorColor('Black');
  });

  it.skip('select transmission', () => {
    sellTradePage.selectTransmission('5-Speed Manual');
  });

  it('select isLeased', () => {
    sellTradePage.isLeased('No');
  });

  it('click on continue', () => {
    actions.clickOnContinue();
  });

  it.skip('check additional features', () => {
    sellTradePage.selectAdditionalFeatures('My car has no additional features');
  });

  it.skip('click on continue', () => {
    actions.clickOnContinue();
  });

  it('click on vehicle history', () => {
    cy.get('button[value=no]').each(($e, index) => {
      cy.get('button[value=no]')
        .eq(index)
        .click();
    });
  });

  it('get my offer', () => {
    cy.get('button span')
      .contains('Get')
      .click();
  });

  // it('enter first name', () => {
  //   sellTradePage.enterFirstName('Test');
  // });

  // it('enter last name', () => {
  //   sellTradePage.enterLastName('Test');
  // });

  // it('enter email', () => {
  //   sellTradePage.enterEmail('test@shift.com');
  // });

  // it('enter phone number', () => {
  //   sellTradePage.enterPhoneNumber('256-789-0123');
  // });

  // it('click on Submit button', () => {
  //   sellTradePage.clickSubmitButton();
  // });

  // it('validate confirmation text', () => {
  //   sellTradePage.checkEstimateFlowComplete('Thanks for requesting an estimate');
  // });

  it('validate $amount', () => {
    cy.get('div[id*=Pick] span',{timeout:100000}).eq(0).invoke('text').then((dollar)=>{
      cy.log(dollar)
      const value = utils.splitDollar(dollar)
      cy.log(value)
      //const dollarAmount = Number(value)
      if(!(value>0)){
        cy.log('Invalid borrow amount displayed'+value)
      }
      else{
            cy.log('borrow amount is greater than zero: '+value)
      }

      // cy.wrap(utils.splitDollar(dollar)).then((value)=>{
      //   if(value!>0){
      //     cy.log('Invalid borrow amount displayed')
      //   }else{
      //     cy.log('borrow amount is greater than zero: '+value)
      //   }
      // })
  
    })
    });
});
