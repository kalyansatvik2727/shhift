class CommonActions{
    googleLogin(){
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        const loginUrl = Cypress.env('loginUrl')
        const socialLoginOptions = {
          username: username,
          password: password,
          loginUrl: loginUrl,
          headless: false,
          logs: false,
          //loginSelector: '[href="/auth/auth0/google-oauth2"]',
          loginSelector: '[href*="google"]',
          postLoginSelector: '.account-panel'
        }
    
        return cy.task('GoogleSocialLogin', socialLoginOptions).then(({cookies}) => {
          cy.clearCookies()
    
          const cookie = cookies.filter(cookie => cookie.name === cookieName).pop()
          if (cookie) {
            cy.setCookie(cookie.name, cookie.value, {
              domain: cookie.domain,
              expiry: cookie.expires,
              httpOnly: cookie.httpOnly,
              path: cookie.path,
              secure: cookie.secure
            })
    
            Cypress.Cookies.defaults({
              preserve: cookieName
            })
          }
        })
    }

}
export default CommonActions