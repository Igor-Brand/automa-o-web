describe('Testes de Login na Saucedemo', () => {
  const URL = 'https://www.saucedemo.com/v1/';
  const USUARIO_OK = 'standard_user';
  const SENHA_OK = 'secret_sauce';

  beforeEach(() => {
    cy.visit(URL);
  });

  it('Login com sucesso', () => {
    cy.get('#user-name').type(USUARIO_OK);
    cy.get('#password').type(SENHA_OK);
    cy.get('#login-button').click();

    cy.contains('Products').should('be.visible');
  });

  it('Logout após login com sucesso', () => {
    cy.get('#user-name').type(USUARIO_OK);
    cy.get('#password').type(SENHA_OK);
    cy.get('#login-button').click();

    cy.contains('Products').should('be.visible');

    cy.get('.bm-burger-button').click();
    cy.get('#logout_sidebar_link').click();

    cy.get('#login-button').should('be.visible');
  });

  it('Login com usuário ou senha inválidos', () => {
    cy.get('#user-name').type('usuario_invalido');
    cy.get('#password').type('senha_errada');
    cy.get('#login-button').click();

    // Verifica se aparece a mensagem de erro
    cy.get('[data-test=error]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });
});
