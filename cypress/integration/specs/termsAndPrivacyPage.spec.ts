//Navigate to https://shift.com/terms

// Assert the header >>> "Terms of Use and Privacy Policy"

//assert that user can click on side menu items : back to top, terms, privacy policy, financial privacy policy, applicant privacy policy

// assert that when user click on the side menu item, the page scrolls to that section and assert some header text there that it landed in the proper place

// please asset and test whatever you think is relevant. there is not much in this page except matter

describe('Shift | Terms and Privacy page',()=>{
    it('Terms and Privacy page validations',()=>{
        cy.visit('https://shift.com/terms')

        //our mission validation
        cy.get('h1',{timeout:72000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Terms of Use and Privacy Policy')
        })

        //validate side menu items
        //Terms link
        cy.get('aside li a',{timeout:72000}).eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Terms')
        })
        cy.get('aside li a',{timeout:72000}).eq(1).click()
        cy.get('p strong',{timeout:72000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','IMPORTANT NOTICE: THIS AGREEMENT CONTAINS A BINDING ARBITRATION PROVISION AND CLASS ACTION WAIVER. IT AFFECTS YOUR LEGAL RIGHTS AS DETAILED IN THE ARBITRATION AND CLASS ACTION WAIVER SECTION BELOW. PLEASE READ CAREFULLY.')
        })

        //Privacy Policy link
        cy.get('aside li a',{timeout:72000}).eq(2).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Privacy Policy')
        })
        cy.get('aside li a',{timeout:72000}).eq(2).click()
        cy.get('div[id=privacy-policy] div[class=category-items] div p',{timeout:72000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Financial Privacy Policy')
        })

        //Financial Privacy Policy link
        cy.get('aside li a',{timeout:72000}).eq(3).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Financial Privacy Policy')
        })
        cy.get('aside li a',{timeout:72000}).eq(3).click()
        cy.get('div[id=financial-privacy-policy] div[class=category-items] div p',{timeout:72000}).eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','This Financial Privacy Notice supplements the information in our general Privacy Policy, and applies solely to information we collect in Shift’s capacity as a financial institution (e.g., in connection with our loan application and pre-qualification processes).')
        })

        //Applicant Privacy Policy link
        cy.get('aside li a',{timeout:72000}).eq(4).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Applicant Privacy Policy')
        })
        cy.get('aside li a',{timeout:72000}).eq(4).click()
        cy.get('div[id=applicant-privacy-policy] div[class=category-items] div p a',{timeout:72000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Shift Privacy Policy')
        })
    })
})
