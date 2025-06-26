describe('Checkout', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('.btn_inventory').eq(0).click();
      cy.get('.shopping_cart_link').click();
      cy.get('.checkout_button').click();
    });
  
    it('Preencher dados obrigatórios e continuar', () => {
      cy.get('#first-name').type('Igor');
      cy.get('#last-name').type('Brandao');
      cy.get('#postal-code').type('70300-000');
      cy.get('.cart_button').click();
      cy.url().should('include', 'checkout-step-two');
    });
  
    it('Validar resumo da compra', () => {
      cy.get('#first-name').type('Igor');
      cy.get('#last-name').type('Brandao');
      cy.get('#postal-code').type('70300-000');
      cy.get('.cart_button').click();
      cy.get('.summary_info').should('be.visible');
    });
  
    it('Finalizar compra com sucesso', () => {
      cy.get('#first-name').type('Igor');
      cy.get('#last-name').type('Brandao');
      cy.get('#postal-code').type('70300-000');
      cy.get('.cart_button').contains('Continue').click();
      cy.get('.cart_button').contains('Finish').click();
      cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
    });
  });
  