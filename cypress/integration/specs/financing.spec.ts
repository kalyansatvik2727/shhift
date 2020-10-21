//- navigate to https://shift.com/finance
//- Check that Get Pre qualified cta is present
//- Check that How it works section text is present
//- assert that the step 1,2 & 3 text is present and matches with expected text
//- Check that Get Pre qualified link in step 1 is clickable
//- Check Protect your purchase section text and asset it
//- Check that Learn more Cta is present
//- Check that Get Pre quailifed cta in the bottom is clickable and navigates user to this url "https://shift.com/prequalify-for-financing" when clicked

import Financing from '../pages/financing.page'
import Actions from '../pages/common-actions'

const financing = new Financing()


const hiw_h1 = 'Get pre-qualified without penalty'
const hiw_p1 = 'Apply in a few minutes to see your estimated terms.'

const hiw_h2 = 'Discover cars in your budget'
const hiw_p2 = 'See what your monthly payment and terms would be for each car.'

const hiw_h3 = 'Finance your favorite one'
const hiw_p3 = 'Apply for financing online to get an official loan from our network of trusted lenders.'


describe('Financing Car', () => {

  it('Launch SHIFT-financing page',()=>{
    cy.visit('https://shift.com/finance');
  })

  it('Verify Get Pre-qualified button',()=>{
    cy.get('button span',{timeout: 50000}).contains('Get pre-qualified').should('be.visible')
    //financing.clickOnGetPreQualifiedButton()
  })

  it('Check - How it works text',()=>{
    cy.get('h3',{timeout:50000}).contains('How it works').should('be.visible')
  })

  it.skip('Validate text available How it works - 1, 2 & 3 points',()=>{
    cy.get('h6',{timeout:50000}).eq(0).should('eq',hiw_h1)
  })

  it('Validate How it works text - Step 1 text',()=>{
    cy.get('div',{timeout:50000}).contains('Step 1').should('be.visible')
    
    cy.get('h4').eq(0).invoke('text').should('eq',hiw_h1)

    cy.get('p span a').invoke('text').should('eq', 'Get pre-qualified')
    
  })

  it('Validate How it works text - Step 2 text',()=>{
    cy.get('div',{timeout:50000}).contains('Step 2').should('be.visible')
    
    cy.get('h4').eq(1).invoke('text').should('eq',hiw_h2)

    cy.get('p span').eq(1).invoke('text').should('eq', hiw_p2)
    
  })

  it('Validate How it works text - Step 3 text',()=>{
    cy.get('div',{timeout:50000}).contains('Step 3').should('be.visible')
    
    cy.get('h4').eq(2).invoke('text').should('eq',hiw_h3)

    cy.get('p span').eq(2).invoke('text').should('eq', hiw_p3)
    
  })
  

  it('Validate Vehicle Protection Plan',()=>{
    cy.get('div',{timeout:50000}).contains('Vehicle Protection Plan').should('be.visible')
    
    
  })

  it('Validate Gap Coverage',()=>{
    cy.get('div',{timeout:50000}).contains('Gap Coverage').should('be.visible')
    
    
  })

  it('Validate Learn more',()=>{
    cy.get('a button span',{timeout:50000}).contains('Learn more').should('be.visible')
    
    
  })

 

})