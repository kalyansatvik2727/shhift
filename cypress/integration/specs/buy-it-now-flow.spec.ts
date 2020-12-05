//nabigate to https://shift.com/cars/san-francisco?page=1
// select any car in the browse page
// store the price of the car select on this page to cross check later in the summary section
// click on buy online tab on the right side below the price
// click on buy online now button 
// validate the header is correct and contains name of whatever car is selected for example: Buy this Jeep( this will change based on what you select) today!
// assert the text below header : Don’t forget to take advantage of $600 off on Vehicle Protection Plans! Ask your Purchase Advisor about available plans.
// assert steps header 1: Place a deposit. The deposit will be $250, which will allow us to hold the car. Deposits are non-refundable and will go towards your purchase.
// assert steps header 2: Finalize payment over the phone Your Purchase Advisor will reach out to set up payment and review next steps. If you’re interested in financing, we can help with that, too.
// assert steps header 3: Delivered to your door Your vehicle should arrive in 7-10 days,and every Shift vehicle comes with our free 7-day return policy.
// assert the header: Where should we ship your car? In an effort to help during these tough times, we will cover $200 towards shipping. Select an address below to get shipping fee.
// assert the price is same as the price we saw in browse page: No-haggle list price
// Enter first name: Test
// Enter last name: Test
// enter email address: umar.mohammad+random@shift.com
// enter phone number: any random ten digits
// enter shipping address: 2525 16th Street, San Francisco, CA, USA
// assert header: Enter your billing information
// enter name on card: Test Test
// enter card number: 4242 4242 4242 4242
// enter MM YY : 04 24
// enter cvc: 424
// enter post code: 94112
// click on Place $250 deposit button
// you should see error message: Your card was declined. Your request was in live mode, but used a known test card.
import Utilities from '../pages/utilities'
const utils = new Utilities()
const randomNumber = utils.randomNumber();


describe('Shift | Buy it now page',()=>{
    it('Buy it now page validations',()=>{
        cy.visit('https://shift.com/car/2011-silver-honda-pilot/c101531')

        //select any car
        //cy.get('a img',{timeout:100000}).eq(1).click()

        //let carPrice=''

        cy.get('div[class*=CarProfilePage] div span',{timeout:100000}).eq(1).invoke('text').then((text)=>{
            const carPrice = cy.wrap(text)
            
        })
        //cy.log(carPrice)
        cy.get('button span',{timeout:100000}).contains('Buy online now').click()

        cy.get('h3',{timeout:100000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Buy this Honda today!')
            
        })

        cy.get('h6',{timeout:100000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Place a deposit to hold your car')
            
        })

        cy.get('p[class*=Typography__root--bluishgray]',{timeout:100000}).eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Deposits are non-refundable and will go toward your purchase.')
            
        })

        cy.get('h6',{timeout:100000}).eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Finalize payment over the phone')
            
        })

        cy.get('p[class*=Typography__root--bluishgray]',{timeout:100000}).eq(2).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Your Purchase Advisor will reach out to set up payment and review next steps. If you’re interested in financing, we can help with that, too.')
            
        })

        cy.get('h6',{timeout:100000}).eq(2).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Delivered to your door')
            
        })

        // cy.get('p[class*=Typography__root--bluishgray]',{timeout:100000}).eq(3).invoke('text').then((text)=>{
        //     cy.wrap(text).should('contain','Your vehicle should arrive in 7-10 days, and every Shift vehicle comes with our free 7-day return policy.')
            
        // })

        cy.get('#ModelFormInput__firstName').type('John',{force:true,delay: 100 })
        cy.get('#ModelFormInput__lastName').type('Smith',{force:true,delay: 100})
        cy.get('div[class*=AccountInformation__form] input[id=ModelFormInput__email]').type('umar.mohammad+' + randomNumber + '@shift.com',{force:true,delay: 100})
        cy.get('div[class*=AccountInformation__form] input[id=ModelFormInput__phone]').type('7017012345',{force:true,delay: 100})
        cy.get('#shipping-address').type('2525 16th Street, San Francisco, CA, USA',{force:true,delay: 100})
        cy.wait(2000)
        cy.get('ol li').eq(4).click()
        cy.get('#name').type('Test Test',{force:true,delay: 100})
        cy.wait(3000)
        // document.get
        // document.getElementsByClassName("CardField-number-fakeNumber").
        
        // .setAttribute('aria-hidden', 'false');
        //cy.get('div[class*=CardNumberField] input[name=cardnumber]').type('4242 4242 4242 4242')
        // cy.get('form[class="ElementsApp is-empty"]').within(()=>{
        //     cy.get('#root > form > div > div.CardField-input-wrapper.is-ready-to-slide > span.CardField-number.CardField-child > span.CardField-number-fakeNumber > span.CardField-number-fakeNumber-number').type('4242 4242 4242 4242',{force:true, delay: 100})
        // })
        cy.get('iframe[title*="Secure card payment"]').its('0.contentDocument.body').find('div[class*=CardNumberField] input[name=cardnumber]').type('4242 4242 4242 4242')
        cy.get('iframe[title*="Secure card payment"]').its('0.contentDocument.body').find('span[class*=CardField-expiry] input').type('04 24')
        cy.get('iframe[title*="Secure card payment"]').its('0.contentDocument.body').find('span[class*=CardField-cvc] input').type('424')
        cy.get('iframe[title*="Secure card payment"]').its('0.contentDocument.body').find('span[class*=CardField-postalCode] input').type('94112')
        cy.get('button[class*=CardForm__submit]').click()
        cy.get('.Input__error').invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Your card was declined. Your request was in live mode, but used a known test card.')
        })   
    })
})
