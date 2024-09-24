/// <reference types="cypress" />

import BasePage from './BasePage';
class CartPage extends BasePage {
  get cartLink() {
    return cy.get('a[href="/view_cart"]');
  }

  get cartQuantity() {
    return cy.get('.cart_quantity');
  }

  get cartCheckoutBtn() {
    return cy.get('.check_out');
  }

  get cartRegisterLoginLink() {
    return cy.contains('u', 'Register / Login');
  }

  get commentCart() {
    return cy.get('textarea[name="message"]');
  }

  get placeOrderBtn() {
    return cy.contains('a', 'Place Order');
  }

  get deleteItemrBtn() {
    return cy.get('.cart_quantity_delete');
  }

  get addressDelivery() {
    return cy.get('#address_delivery');
  }

  get addressInvoice() {
    return cy.get('#address_invoice');
  }
}



export default new CartPage();
