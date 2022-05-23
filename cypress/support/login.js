Cypress.Commands.add('login', (mail, password)=>{
    cy.fixture('login').then((login)=>{
        cy.get(login.loginLink).click();
        cy.get(login.email).type('email');
        cy.get(login.password).type('password');
        cy.get(login.loginButton).click();
    })
})