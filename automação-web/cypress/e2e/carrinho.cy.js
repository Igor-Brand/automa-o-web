describe('Carrinho de compras', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    });
  
    it('Adicionar produto ao carrinho', () => {
      cy.get('.btn_inventory').first().click();
      cy.get('.shopping_cart_badge').should('contain', '1');
    });
  
    it('Remover produto do carrinho', () => {
      cy.get('.btn_inventory').first().click();
      cy.get('.btn_secondary').first().click();
      cy.get('.shopping_cart_badge').should('not.exist');
    });
  
    it('Validar produtos adicionados', () => {
      cy.get('.btn_inventory').eq(0).click();
      cy.get('.btn_inventory').eq(1).click();
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').should('have.length', 2);
    });
  });
  