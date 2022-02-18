import CommonActions from '../pages/CommonActions';
const commonActions = new CommonActions();

Given('I navigate to About Page with required login', () => {
  // commonActions.envLogin('/about');
  commonActions.stageLogin('/about');
});

When('I validate About landing page text', () => {
  //our mission validation
  cy.get('h2.heading')
    .contains('Our mission is to make car purchase and ownership simple')
    .should('be.visible');

});

And('I validate Executive team section', () => {
  //validate execute team text
  cy.get('h3.heading', { timeout: 72000 })
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('eq', 'Executive team');
    });

  cy.get('.team-member-card a.link-button').then(teamMembers => {
    cy.wrap(teamMembers).its('length').then(len => {
      for (let i = 0; i < len - 1; i++) {
        cy.get('.team-member-card a.link-button').eq(i).click({ force: true });
        cy.get('.team-member-modal-content').eq(i).contains(/[A-Za-z0-9]/);
        cy.get('.modal-close-button').eq(i).click();
      }
    })
  })
});


And('I validate In the news section', () => {
  //In the news Section
  cy.get('h3.heading', { timeout: 72000 }).contains('In the news');
  cy.get('div.news-brands img').then(images=>{
    cy.wrap(images).its('length').then(len=>{
      for(let i=0;i<len-1;i++){
        cy.get('div.news-brands img').eq(i).should('have.attr','alt');
      }
    })
  })
});
