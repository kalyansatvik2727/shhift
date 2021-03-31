import CommonActions from '../../support/CommonActions'
const commonActions = new CommonActions()

describe('Shift | Car Loan Calculator page',()=>{
    before(()=>{
        commonActions.envLogin('/car-loan-calculator')
    })
    it('About page validations',()=>{
        
        cy.get('h1[class*=Typo]',{timeout:72000}).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','How much can I afford?')
        })

        cy.get('h5[class*=Typo]',{timeout:72000}).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Estimate monthly payment or maximum car price with a loan calculator')
        })

        //credit score estimated APR section
        cy.get('label[class*=Selector__label] p[class*=Typo]').eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Credit score · Estimated APR')
        })
        //rebuilding button
        cy.get('button').eq(0).click().should('have.attr', 'aria-selected','true')
        //good button
        cy.get('button').eq(1).click().should('have.attr', 'aria-selected','true')
        //excellent button
        cy.get('button').eq(2).click().should('have.attr', 'aria-selected','true')

        //loan length section
        cy.get('label[class*=Selector__label] p[class*=Typo]').eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Loan length')
        })
        //24mo button
        cy.get('button').eq(3).click().should('have.attr', 'aria-selected','true')
        //36mo button
        cy.get('button').eq(4).click().should('have.attr', 'aria-selected','true')
        //48mo button
        cy.get('button').eq(5).click().should('have.attr', 'aria-selected','true')
        //60mo button
        cy.get('button').eq(6).click().should('have.attr', 'aria-selected','true')
        //72mo button
        cy.get('button').eq(7).click().should('have.attr', 'aria-selected','true')

        //car price section
        cy.get('div p').eq(13).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Car price')
        })
        //car price input field
        cy.get('input[id=Carprice]').should('be.visible')

        //monthly payment section
        cy.get('div p').eq(17).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Monthly payment')
        })
        //car price input field
        cy.get('input[id=Monthlypayment]').should('be.visible')

        //down payment section
        cy.get('div p').eq(21).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Down payment')
        })
        //car price input field
        cy.get('input[id=Downpayment]').should('be.visible')

        cy.get('.Slider__handle').its('length').should('eq',3)

        //shop cars button
        cy.get('button span').eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Shop')
        })

        //Estimated loan details
        cy.get('button span').eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Estimated loan details')
        })

        cy.get('button span').eq(1).click()
        
        cy.get('h4[class*=Typo]').invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Estimated loan details')
        })
        cy.get('.Modal__close').click()
    })
})
