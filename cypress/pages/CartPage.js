/// <reference types="cypress" />

import BasePage from './BasePage';
class CartPage extends BasePage {
  get cartLink() {
    return cy.get('a[href="/view_cart"]');
  }

  get cartQuantity() {
    return cy.get('.cart_quantity');
  }
  
}

export default new CartPage();