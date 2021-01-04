describe('Sell or Trade Cars Page Test', () => {
  it('login', () => {
    cy.visit('https://shift-training1.a.shiftdev.io/');
    cy.get('div a').then(function($a) {
      // extract the fully qualified href property
      const href = $a.prop('href');
      cy.log('before clicking: ' + href);

      // and now visit the href directly
      //cy.visit(href)
      //cy.url().should('include', 'users.html')
    });
  });

  it('click on sign in', () => {
    cy.get('div a').then(function($a) {
      // extract the fully qualified href property
      const href = $a.prop('href');
      cy.log('after clicking: ' + href);

      // and now visit the href directly
      cy.visit(href);
      //cy.url().should('include', 'users.html')
    });
  });
});
