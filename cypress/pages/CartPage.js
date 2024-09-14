/// <reference types="cypress" />

import BasePage from './BasePage';
class CartPage extends BasePage {
  get cartLink() {
    return cy.get('a[href="/view_cart"]');
  }
}

export default new CartPage();