import CommonActions from '../pages/CommonActions'
const commonActions = new CommonActions()

Given('I navigate to About Page with required login', () => {
    commonActions.envLogin('/about')
})

When('I validate About landing page text', () => {
    //our mission validation
    cy.get('h2').contains('Our mission is to make car purchase and ownership simple').should('be.visible')

    //what drives us validation
    cy.get('h1[class*=Typo]', { timeout: 72000 }).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'What Drives Us')
    })

    //what drives us - text validation
    cy.get('p div', { timeout: 72000 }).invoke('text').then((text) => {
        //cy.log('text: '+text)
        //cy.log('wrap: '+cy.wrap(text))
        cy.wrap(text).should('eq', 'We are building the platform to make buying and selling cars fun, fair, and accessible to everyone.')
    })

})

And('I validate Executive team section', () => {
    //validate execute team text
    cy.get('h3[class*=Typo]', { timeout: 72000 }).eq(0).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Executive team')
    })

    //George Arison
    //click on pic
    cy.get('.ProfileGrid__team-profile button').eq(0).click()
    //validate designation
    cy.get('.ProfileGrid__team-profile span').eq(0).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Co-founder and Co-CEO')
    })
    //validate the dialog
    cy.get('.ProfileGrid__team-profile div > img').eq(1).should('have.attr', 'alt', 'George Arison')
    //close the dialog
    cy.get('#Explorations').eq(0).click()

    //Toby Russell
    //click on pic
    cy.get('.ProfileGrid__team-profile button').eq(2).click()
    //validate designation
    cy.get('.ProfileGrid__team-profile span').eq(1).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Co-founder and Co-CEO')
    })
    //validate the dialog
    cy.get('.ProfileGrid__team-profile div > img').eq(2).should('have.attr', 'alt', 'Toby Russell')
    //close the dialog
    cy.get('#Explorations').click({ force: true })

    //Cindy Hanford
    //click on pic
    cy.get('.ProfileGrid__team-profile button').eq(4).click()
    //validate designation
    cy.get('.ProfileGrid__team-profile span').eq(2).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'CFO')
    })
    //validate the dialog
    cy.get('.ProfileGrid__team-profile div > img').eq(4).should('have.attr', 'alt', 'Cindy Hanford')
    //close the dialog
    cy.get('#Explorations').click({ force: true })

    //Sean Foy
    //click on pic
    cy.get('.ProfileGrid__team-profile button').eq(6).click()
    //validate designation
    cy.get('.ProfileGrid__team-profile span').eq(3).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'COO')
    })
    //validate the dialog
    cy.get('.ProfileGrid__team-profile div > img').eq(6).should('have.attr', 'alt', 'Sean Foy')
    //close the dialog
    cy.get('#Explorations').click({ force: true })

    //Christian Ohler
    //click on pic
    cy.get('.ProfileGrid__team-profile button').eq(8).click()
    //validate designation
    cy.get('.ProfileGrid__team-profile span').eq(4).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Co-founder')
    })
    //validate the dialog
    cy.get('.ProfileGrid__team-profile div > img').eq(8).should('have.attr', 'alt', 'Christian Ohler')
    //close the dialog
    cy.get('#Explorations').click({ force: true })

    //Karan M. Gupta
    //click on pic
    cy.get('.ProfileGrid__team-profile button').eq(10).click()
    //validate designation
    cy.get('.ProfileGrid__team-profile span').eq(5).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Sr. VP of Engineering')
    })
    //validate the dialog
    cy.get('.ProfileGrid__team-profile div > img').eq(10).should('have.attr', 'alt', 'Karan M. Gupta')
    //close the dialog
    cy.get('#Explorations').click({ force: true })

    //Tracy Lessin
    //click on pic
    cy.get('.ProfileGrid__team-profile button').eq(12).click()
    //validate designation
    cy.get('.ProfileGrid__team-profile span').eq(6).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'VP of Marketing')
    })
    //validate the dialog
    cy.get('.ProfileGrid__team-profile div > img').eq(12).should('have.attr', 'alt', 'Tracy Lessin')
    //close the dialog
    cy.get('#Explorations').click({ force: true })

    //Josh Pittman
    //click on pic
    cy.get('.ProfileGrid__team-profile button').eq(14).click()
    //validate designation
    cy.get('.ProfileGrid__team-profile span').eq(7).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'VP of Sales')
    })
    //validate the dialog
    cy.get('.ProfileGrid__team-profile div > img').eq(14).should('have.attr', 'alt', 'Josh Pittman')
    //close the dialog
    cy.get('#Explorations').click({ force: true })

    //validate execute team text
    cy.get('h3[class*=Typo]', { timeout: 72000 }).eq(1).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Latest Press Releases')
    })
})

And('I validate Latest Pre Releases section', () => {
    //validate execute team text
    cy.get('h3[class*=Typo]', { timeout: 72000 }).eq(1).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Latest Press Releases')
    })

    //essential worker program
    cy.get('div[id*=latest-press-releases] a[href*=essential]').should('be.visible').invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Essential Worker Program')
    })

    //New COVID-19 Procedures
    cy.get('div[id*=latest-press-releases] a[href*=covid]').should('be.visible').invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'New COVID-19 Procedures')
    })

    //Shift launches in Seattle
    cy.get('div[id*=latest-press-releases] a[href*=shift-launches-digital]').should('be.visible').invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Shift launches in Seattle')
    })

    //Online Purchasing, Repairs & Loan Tool
    cy.get('div[id*=latest-press-releases] a[href*=repairs]').should('be.visible').invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Online Purchasing, Repairs & Loan Tool')
    })

    //New Lenders & Finance Products Added
    cy.get('div[id*=latest-press-releases] a[href*=finance]').should('be.visible').invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'New Lenders & Finance Products Added')
    })

})

And('I validate In the news section', () => {
    //In the news Section
    cy.get('h3[class*=Typo]', { timeout: 72000 }).eq(2).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'In the news')
    })

    cy.get('img[alt="Time Magazine"]').should('be.visible')
    cy.get('img[alt="LA Times"]').should('be.visible')
    cy.get('img[alt="The Wall Street Journal"]').should('be.visible')
    cy.get('img[alt="Wall Street Journal"').should('be.visible')
    cy.get('img[alt="Tech Crunch"]').should('be.visible')
    cy.get('img[alt="CNBC"]').should('be.visible')
    cy.get('img[alt="Inc."]').should('be.visible')
    cy.get('img[alt="Fortune"]').should('be.visible')
    cy.get('img[alt="Entrepreneur"]').should('be.visible')

    //In the news Section
    cy.get('h3[class*=Typo]', { timeout: 72000 }).eq(3).invoke('text').then((text) => {
        cy.wrap(text).should('eq', 'Investors')
    })

    cy.get('img[alt="Threshold"]').should('be.visible')
    cy.get('img[alt="Highland Capital"]').should('be.visible')
    cy.get('img[alt="Goldman Sachs"]').should('be.visible')
    cy.get('img[alt="BMW i Ventures"]').should('be.visible')
    cy.get('img[alt="G2VP"]').should('be.visible')
    // cy.get('img[alt=dcm]').should('be.visible')
    // cy.get('img[data-src*=Renault]').should('be.visible')
})