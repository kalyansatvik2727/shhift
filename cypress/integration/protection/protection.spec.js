import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CommonActions from '../../support/CommonActions'

const commonActions = new CommonActions()
//const pageActions = page.actions

Given('I navigate to Page with required login', () => {
    commonActions.envLogin('/protection')
})

Then('I validate Peace of mind now comes standard section', () => {
    //Peace of mind now comes standard header validation
    cy.get('h1', { timeout: 72000 }).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Peace of mind now comes standard')
    })

    //Peace of mind now comes standard header text validation
    cy.get('div p', { timeout: 72000 }).eq(0).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Safeguard yourself from the unexpected costs of car ownership with a vehicle protection plan and gap coverage')
    })
})

And('I validate Vehicle Protection Plan section', () => {
    //Vehicle Protection Plan header validation
    cy.get('h3', { timeout: 72000 }).eq(0).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Vehicle Protection Plan')
    })

    //Vehicle Protection Plan header text validation
    cy.get('div p', { timeout: 72000 }).eq(1).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Most warranties last for less than a third of a car’s lifetime when it’s least likely to have issues. Our protection plans provide comprehensive coverage against mechanical and electrical problems so you don’t have to pay out of pocket.')
    })

})

And('I validate GAP COVERAGE section', () => {
    //GAP COVERAGE header validation
    cy.get('h3', { timeout: 72000 }).eq(1).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Gap Coverage')
    })

    //GAP COVERAGE header text validation
    cy.get('div p', { timeout: 72000 }).eq(2).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Gap coverage covers the “gap” between what your auto insurance pays and what you still owe on the car if you ever experience an accident or theft.')
    })

})

And('I validate What does it cover? section', () => {
    //What does it cover? button
    //cy.get('button span').contains('What does it cover?').click()

    //How does it work? button
    //cy.get('button span').contains('How does it work?').click()

    //cy.scrollTo('top')

    //Protection against the unexpected header
    cy.get('h4', { timeout: 72000 }).eq(1).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Protection against the unexpected')
    })
})

And('I validate Key lockout section', () => {
    //Key lockout header
    cy.get('h5', { timeout: 72000 }).eq(0).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Key lockout')
    })

    //Key lockout header text
    cy.get('li p', { timeout: 72000 }).eq(0).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Get reimbursed when you need a locksmith to save you from a lockout jam')
    })

})

And('I validate Rental reimbursement section', () => {
    //Rental reimbursement header
    cy.get('h5', { timeout: 72000 }).eq(1).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Rental reimbursement')
    })

    //Rental reimbursement header text
    cy.get('li p', { timeout: 72000 }).eq(1).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Get reimbursed for a rental while your car’s in the shop')
    })
})

And('I validate Free towing section', () => {
    //Free towing header
    cy.get('h5', { timeout: 72000 }).eq(2).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Free towing')
    })

    //Free towing header text
    cy.get('li p', { timeout: 72000 }).eq(2).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'No-charge tow service to any ASE-certified repair facility within 150 miles')
    })

})

And('I validate Flat tire change section', () => {
    //Flat tire change header
    cy.get('h5', { timeout: 72000 }).eq(3).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Flat tire change')
    })

    //Flat tire change header text
    cy.get('li p', { timeout: 72000 }).eq(3).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Get a lift to the tire shop if your spare won’t work')
    })
})

And('I validate Battery jump section', () => {
    //Battery jump header
    cy.get('h5', { timeout: 72000 }).eq(4).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Battery jump')
    })

    //Battery jump header text
    cy.get('li p', { timeout: 72000 }).eq(4).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Need some juice? Have a technician come to you to help get your car started')
    })
})

And('I validate Emergency fuel section', () => {
    //Emergency fuel header
    cy.get('h5', { timeout: 72000 }).eq(5).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Emergency fuel')
    })

    //Emergency fuel header text
    cy.get('li p', { timeout: 72000 }).eq(5).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Get the gas you need to get you to the pump')
    })
})

And('I validate Gap Coverage section', () => {
    //Gap Coverage header validation
    cy.get('div[class=WarrantyPage__gap-content] >div > div:nth-child(1)', { timeout: 72000 }).eq(0).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Gap coverage')
    })

    //Gap Coverage header validation
    cy.get('div[class=WarrantyPage__gap-content] >div > div:nth-child(2)', { timeout: 72000 }).eq(0).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Never owe more than your car is worth')
    })
})

And('I validate What does it cover? section', () => {
    //What does it cover? button
    cy.get('button span').contains('What does it cover?').click()

    //How does it work? button
    cy.get('button span').contains('How does it work?').click()
})
