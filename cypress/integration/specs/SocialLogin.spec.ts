describe('Login', () => {
    it('Login through Google', () => {
      // const username = Cypress.env('test@test.com')
      // const password = Cypress.env('test123')
      // const loginUrl = Cypress.env('https://shift-training1.a.shiftdev.io/')
      const username = 'test-buyer@shift.com'
      const password = 'forensic-mildew-coif-proper'
      const loginUrl = 'https://shift-training1.a.shiftdev.io/'
      //const cookieName = Cypress.env('cookieName')
      //const cookieName = 'cookieName'
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
    })
  })