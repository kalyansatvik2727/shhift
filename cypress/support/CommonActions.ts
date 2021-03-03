class CommonActions{
    login(relativeUrl){
        cy.visit('/admin/devops/crypto/refresh_token_login');
        var token = Cypress.env('token');

        cy.get('input[name=auth_token]').type(token);
        cy.get('form').submit();

        // TODO to speed up subsequent tests, you should save the cookie value
        // and then reuse it other tests in the same run.

        cy.visit(relativeUrl);
    }

}
export default CommonActions