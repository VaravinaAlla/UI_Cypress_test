/// <reference types="cypress" />

import { generateRandomComment } from '../support/dataGenerator';
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

  recommendItemIsDisplayedinCart() {
    cy.fixture('recommend_product.json').then((product) => {
      cy.get('a[href^="/product_details/"]').should(
        'contain.text',
        product.name
      );
    });
  }

  cartIsEmptyIsDisplayed() {
    cy.get('#empty_cart').should('contain.text', 'Cart is empty!');
  }

  fillCommentInCheckoutAndClick() {
    const comment = generateRandomComment();
    this.commentCart.type(comment.chekoutComment);
    this.placeOrderBtn.click();
  }

  productPriceInCartIsEql() {
    cy.fixture('product.json').then((product) => {
      cy.get('a[href^="/product_details/"]').should(
        'contain.text',
        product.name
      );
      cy.get('.cart_price').should('contain.text', product.price);
    });
  }
}

export default new CartPage();
