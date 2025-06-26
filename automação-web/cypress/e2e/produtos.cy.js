describe('Produtos', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    });
  
    it('Exibe lista de produtos', () => {
      cy.get('.inventory_item').should('have.length.greaterThan', 0);
    });
  
    it('Visualizar detalhes de um produto', () => {
      cy.get('.inventory_item').first().find('.inventory_item_name').click();
      cy.get('.inventory_details_name').should('be.visible');
      cy.get('.inventory_details_price').should('be.visible');
    });
  
    it('Ordenar produtos por nome (A a Z)', () => {
      cy.get('.product_sort_container').select('Name (A to Z)');
      cy.get('.inventory_item_name').then((items) => {
        const names = [...items].map(el => el.innerText);
        const sorted = [...names].sort();
        expect(names).to.deep.equal(sorted);
      });
    });
  
    it('Ordenar produtos por preço (baixo para alto)', () => {
      cy.get('.product_sort_container').select('Price (low to high)');
      cy.get('.inventory_item_price').then((items) => {
        const prices = [...items].map(el => parseFloat(el.innerText.replace('$', '')));
        const sorted = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sorted);
      });
    });
  });
  