//Navigate to https://shift.com/prequalify-for-financing?&financing.prequalificationClearerCommunicationVariation=PrequalificationClearerCommunicationVariationControl
//Click on Get started
//enter email: umar.mohammad+randomnumber@shift.com
// enter phone number: 3759874567
//enter password: test123#
//click checkbox
//click continue
//enter 1000 for rent and click continue
//enter 150,000 per year for income and click continue
//enter 799 as credit score and continue
//click checkbox and continue
//assert text: Congrats! You’re pre-qualified.
// Click on Shop with my terms, it navigates to cars page: https://shift.com/cars/

// select any car from the options ( save this car name make and model to cross check in later steps)
//Click on Apply for financing link above date calendar
// click on get started


// Assert that the car selected in above step is shown at the top left of the page and that it matches
// Assert left menu items are shown: 

// YOUR LOAN TERMS
// Loan
// Gap Coverage
// Protection Plan
// YOUR APPLICATION
// Personal
// Housing
// Income
// Legal
// Review

// Assert header: Choose your loan terms
//hover on trade in quesiton mark circle and assert the text matches
// change the downpayment to some lower or higer value. Change it by few hundreds
// Click on loan length dropdown and change the loan length
//Click on continue with these terms
// Assert the header and text: "Protect your purchase Safeguard yourself from the unexpected costs of car ownership. Adding protection to your financed total makes it easy and affordable to get the peace of mind you need. Shift offers: Gap coverage In the event your car is totalled, this covers the difference between what you owe on your car loan and the value your insurance company will pay for the car. Vehicle protection plan Our protection plan provides comprehensive coverage against the mechanical and electrical problems your car may face.

//Click on continue with plans button
// assert the header and text : Gap Insurance. Don’t get stuck owing money if your car is totaled
// Click on link See whats covered and check that a modal shows up
// assert the header and text on this pop up page and click on Got it button
// Click on Save & Continue
//Assert the header and text: Vehicle Protection Plan Rest easy with coverage that rivals new car warranties
// Click on link See whats covered and check that a modal shows up
// assert the header and text on this pop up page and click on Got it button
//Click on save and continue button
// assert the header: Are you applying on your own?
// Click on Yes I am and click continue
// assert header: First, tell us about yourself
// enter firstname: test
// enter last name: test
//enter phone number: 7480982948
//enter social security number: 887-88-9000
//enter date of birth: 05/22/1990
//Click continue
//asseet header: Where do you currently live?
//enter address:2525 16th st 
// enter city: san francisco
// enter zipcode: 94112
//enter years: 10
//enter months:5
// click continue
//Clcik I own it and enter $1000 for payment

//Clcik continue

//Clcik Full time and click continue


//Enter employer name: Tech Company
//Enter job title: IT Analyst
// Enter phone number: 4789037659
//enter 5 years and enter 5 months
//enter 150,000 for income and click continue
// Check two agreeemnt boxes
// Assert header:Almost there, please confirm this is all correct
// assert the Button Apply for loan is present and displayed

// DO NOT CLICK ON APPLY FOR LOAN BUTTON AS THIS IS PROD.
import Utilities from '../pages/utilities'
const utils = new Utilities()
const randomNumber = utils.randomNumber();

describe('Shift | Credit Application Flow',()=>{
    it('Credit Application Flow validations',()=>{
        cy.visit('https://shift.com/prequalify-for-financing?&financing.prequalificationClearerCommunicationVariation=PrequalificationClearerCommunicationVariationControl')

        // cy.get('div[class*=CarProfilePage] div span',{timeout:72000}).eq(1).invoke('text').then((text)=>{
        //     const carPrice = cy.wrap(text)
            
        // })
        //click on Get Started
        cy.get('button[class*=FinancingPrequalificationScreen]',{timeout:50000}).click()
        //enter email
        cy.get('#email',{timeout:50000}).type('umar.mohammad+' + randomNumber + '@shift.com')
        //enter phone
        cy.get('#phone',{timeout:50000}).type('3759874567')
        //enter password
        cy.get('#password',{timeout:50000}).type('test123#')
        //check I agree checkbox
        cy.get('#terms_terms').check()
        //click on Continue
        cy.get('button[class*=AccountFormContainer]').click()
        //enter rent or mortgage
        cy.get('#MonthlyDebt').type('1000')
        //click on Continue
        cy.get('button[class*=FinancingPrequalificationScreen]').click()
        //enter total income
        cy.get('#Income').type('150000')
        //click on year
        cy.get('div[class*=PrequalIncomeInput] button').eq(0).click()
        //click on Continue
        cy.get('button[class*=FinancingPrequalificationScreen]').click()
        //enter credit score
        cy.get('#CreditScore').type('799')
        //click on Continue
        cy.get('button[class*=FinancingPrequalificationScreen]').click()
        cy.wait(5000)
        //check I agree checkbox
        cy.get('#AgreeToTerms_AgreedToTerms').check()
        //click on Continue
        cy.get('button[class*=FinancingPrequalificationScreen]').click()
        //assert success message
        cy.get('h3 div',{timeout:50000}).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Congrats!You’re pre-qualified.')
        })
        //click on Shop with my terms
        cy.get('button[class*=GenericApprovalBody]').click()
        //select any car
        cy.get('div[class*=CarBrowserListSection] a',{timeout:50000}).eq(0).click()
        //click on apply finance link
        //cy.get('div[class*=CarProfilePage__leader-nav] a',{timeout:50000}).contains('Apply for financing').click({force:true})

        cy.visit('https://shift.com/apply-to-finance?pid=fpub10pdX9pby3UqEZGiRWGPo')

        //click on Get Started button]
        cy.get('button[class*=FinancingCreditEducation]').click()

        //assert the side bar headers
        //Your Loan terms
        cy.get('div[class*=FinancingSidebar] div div').eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq', 'Your Loan Terms')
        })

        //Loan
        cy.get('div[class*=FinancingSidebar] div li span').eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq', 'Loan')
        })

        //Gap Coverage
        cy.get('div[class*=FinancingSidebar] div li span').eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('eq', 'Gap Coverage')
        })

        //Protection Plan
        cy.get('div[class*=FinancingSidebar] div li span').eq(2).invoke('text').then((text)=>{
            cy.wrap(text).should('eq', 'Protection Plan')
        })

        //Your Loan terms
        cy.get('div[class*=FinancingSidebar] div div').eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('eq', 'Your Application')
        })

        //Personal
        cy.get('div[class*=FinancingSidebar] div li span').eq(3).invoke('text').then((text)=>{
            cy.wrap(text).should('eq', 'Personal')
        })

        //Housing
        cy.get('div[class*=FinancingSidebar] div li span').eq(4).invoke('text').then((text)=>{
            cy.wrap(text).should('eq', 'Housing')
        })

        //Income
        cy.get('div[class*=FinancingSidebar] div li span').eq(5).invoke('text').then((text)=>{
            cy.wrap(text).should('eq', 'Income')
        })

        //Legal
        cy.get('div[class*=FinancingSidebar] div li span').eq(6).invoke('text').then((text)=>{
            cy.wrap(text).should('eq', 'Legal')
        })

        //Review
        cy.get('div[class*=FinancingSidebar] div li span').eq(7).invoke('text').then((text)=>{
            cy.wrap(text).should('eq', 'Review')
        })

         //Choose your plan terms
         cy.get('h1[class=FinancingForm__section-title]').invoke('text').then((text)=>{
            cy.wrap(text).should('eq', 'Choose your loan terms')
        })

        //mouse hover
        cy.get('a[class*=FinancingLoanForm__link]').click()

        //assert mouse hover text
        cy.get('div[class=FinancingForm__tooltip-content]').invoke('text').then((text)=>{
            cy.wrap(text).should('eq', 'If you have a trade-in vehicle, continue this application as if you didn’t. We’ll apply your trade-in credit later on in the process.')
        })

        //enter down payment
        cy.get('input[id=ModelFormInput__downPaymentCents]').clear().type('18000',{delay:100})

        //select loan length
        cy.get('a[class=chosen-single]').click()
        //cy.get('li[class=active-result]').eq(1).click({force:true})

        //click on continue with the terms
        cy.get('button[class*=FinancingForm__button]').click()

        //assert Protect your purchase text
        cy.get('div[class*=AddOnEducationScreen__subheading]').invoke('text').then((text)=>{
            cy.wrap(text).should('eq', 'Safeguard yourself from the unexpected costs of car ownership. Adding protection to your financed total makes it easy and affordable to get the peace of mind you need. Shift offers:')
        })






    })
})























