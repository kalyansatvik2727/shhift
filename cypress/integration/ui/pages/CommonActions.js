const trainingUrl = 'https://forcebase1.a.shiftdev.io';
const liveUrl = 'https://shift.com';
class CommonActions {
  login(relativeUrl) {
    cy.visit(
      Cypress.env('baseUrl') + '/admin/devops/crypto/refresh_token_login'
    );
    var token = `${Cypress.env('token')}`;

    cy.get('input[name=auth_token]').type(token, { log: false });
    cy.get('form').submit();

    // TODO to speed up subsequent tests, you should save the cookie value
    // and then reuse it other tests in the same run.

    cy.visit(Cypress.env('baseUrl') + relativeUrl);
  }

  envLogin(relativeUrl) {
    if (Cypress.env('baseUrl') !== trainingUrl) {
      // cy.log(Cypress.env('baseUrl'))
      // cy.log(liveUrl)
      cy.visit(Cypress.env('baseUrl') + relativeUrl);
    } else if (Cypress.env('baseUrl') === trainingUrl) {
      // cy.log(Cypress.env('baseUrl'))
      // cy.log(trainingUrl)
      this.login(relativeUrl);
    }
  }

  stageLogin(relativeUrl) {
    cy.log(Cypress.env('baseUrl'))
    cy.log(Cypress.env('username'))
    cy.log(Cypress.env('password'))
    cy.visit(`${Cypress.env('baseUrl')}${relativeUrl}`,{
      auth: {
        username: Cypress.env('username'),
        password: Cypress.env('password')
      }
    })
  }

  verifyText(text){
    cy.contains(text)
  }

  enterDataInInput(locator,text){
    cy.get(locator).clear().type(text);
  }

  clickOnButton(locator){
    cy.get(locator).click();
  }

  clickOnLink(locator){
    cy.get(locator).click();
  }

}
export default CommonActions;
