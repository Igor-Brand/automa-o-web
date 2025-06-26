describe('Login e Logout', () => {
    const url = 'https://www.saucedemo.com/v1/';
  
    it('Login com credenciais corretas', () => {
      cy.visit(url);
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
    });
  
    it('Login com credenciais incorretas', () => {
      cy.visit(url);
      cy.get('#user-name').type('usuario_invalido');
      cy.get('#password').type('senha_invalida');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('be.visible');
    });
  
    it('Logout após login', () => {
      cy.visit(url);
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('.bm-burger-button > button').click(); // abre menu lateral
      cy.get('#logout_sidebar_link').click();
      cy.url().should('eq', url);
    });
  });
  