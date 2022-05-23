describe('login', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Login with incorrect mail', ()=>{
        cy.fixture('login').then((login)=>{
            cy.login('something', 'other');

            //cy.get(login.loginLink).click();
            //cy.get(login.email).type('something');
            //cy.get(login.password).type('other');
            //cy.get(login.loginButton).click();
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');
        })
    })
})
