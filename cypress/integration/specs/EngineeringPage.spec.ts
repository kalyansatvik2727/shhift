// Navigate to https://shift.com/engineering

// assert the header text and button are displayed
// assert the header Marketplace & consumer products and the text under it
//assert that clicking on A self-driven purchase process open a modal
// assert the header Logistics platforms and the text under it
//assert that clicking on Efficient field staffing open a modal and verify the modal text
// asert that clicking on Extended workflow app open a modal and verifuy the modal text
// assert the header Pricing engine and text under it
// asert that clicking on Pricing engine open a modal and verify the modal text

// assert the header Our Stack and text under it
// assert the header Meet the Team and text under it
// asssert the button read our experiences is displayed and clickable
//assert the header Join us and text under it
// assert the header Engineering, Product, and Design and text under it
import CommonActions from '../../support/CommonActions'
const commonActions = new CommonActions()

describe('Shift | Engineering page',()=>{
    before(()=>{
        commonActions.envLogin('/engineering')
    })
    it('Engineering page validations',()=>{

        //Engineering header validation
        cy.get('section > div > div > div > div > div',{timeout:50000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Engineering @ Shift')
        })

        //Engineering header text validation
        cy.get('section > div > div > div > div:nth-child(2) > div',{timeout:50000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','At Shift, we empower engineers to solve high-impact problems that drive our business. Our platform serves both customers and our operational team, providing a plethora of engineering challenges.')
        })

        //join the team button
        cy.get('button span',{timeout:50000}).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Join the team')
        })

        //Marketplace & consumer products
        cy.get('div[class*=ContentToggle__link]',{timeout:50000}).eq(0).click()
        cy.get('.ContentToggle__content',{timeout:50000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Buying and selling a car are complex transactions with many moving parts.')
        })

        //A self-driven purchase process link
        cy.get('a',{timeout:50000}).contains('A self-driven purchase process').click()

        //modal validation        
        cy.get('div[class*=Modal__content] h2',{timeout:50000}).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','A self-driven purchase process')
        })
        cy.get('.Modal__close').click({force:true})

        //Logistics platforms
        cy.get('div[class*=ContentToggle__link]',{timeout:50000}).eq(1).click()
        cy.get('.ContentToggle__content',{timeout:50000}).eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','It’s a classic computer science problem: how can we create the optimal schedule for drivers AND customers')
        })
        //Efficient field staffing link
        cy.get('a',{timeout:50000}).contains('Efficient field staffing').click({force:true})

        //modal validation        
        cy.get('div[class*=Modal__content] h2',{timeout:50000}).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Efficient field staffing')
        })
        cy.get('.Modal__close').click({force:true})

        //Extended workflow app link
        cy.get('a',{timeout:50000}).contains('Extended workflow app').click({force:true})

        //modal validation        
        cy.get('div[class*=Modal__content] h2',{timeout:50000}).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Extended workflow app')
        })
        cy.get('.Modal__close').click({force:true})

        //Pricing engine
        cy.get('div[class*=ContentToggle__link]',{timeout:50000}).eq(2).click()
        cy.get('.ContentToggle__content',{timeout:50000}).eq(2).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Because no two cars are the same, pricing is a huge algorithmic challenge that’s at the core of our business.')
        })
        //Targeted inventory & pricing link
        cy.get('a',{timeout:50000}).contains('Targeted inventory & pricing').click({force:true})

        //modal validation        
        cy.get('div[class*=Modal__content] h2',{timeout:50000}).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','Targeted inventory & pricing')
        })
        cy.get('.Modal__close').click({force:true})

        //our stack
        cy.get('h2',{timeout:50000}).eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Our Stack')
        })

        //our stack text 
        cy.get('section div p',{timeout:50000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Challenging the status quo means we need every advantage we can get. This is our toolkit for building great software.')
        })

        //Meet the Team
        cy.get('h4[class*=Typo]',{timeout:50000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Meet the Team')
        })

        //Meet the Team text 
        cy.get('div > div > p',{timeout:50000}).eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Our mission to transform the experience of buying and selling cars is an ambitious one. It can only be achieved by a team of diverse problem solvers dedicated to understanding our varied customers.')
        })

        //Read about our experiences
        cy.get('div > a > span',{timeout:50000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Read about our experiences')
        })
        cy.get('a[target=_blank]').eq(7).should('have.attr','href','https://blog.shift.com/')

        //join us
        cy.get('div[class*=ContentWidth__root] h2',{timeout:50000}).eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Join us!')
        })

        //join us text
        cy.get('section div p',{timeout:50000}).eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('contain','We’ve accomplished a lot with a small and talented team, but there’s more to be done.')
        })

        cy.get('div',{timeout:50000}).contains('Engineering, Product, and Design').should('be.visible')
        cy.get('div',{timeout:50000}).contains('You work on exciting, meaningful products.').should('be.visible')

    })
})