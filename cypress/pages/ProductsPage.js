/// <reference types="cypress" />

import BasePage from './BasePage';
import CartPage from '../pages/CartPage';
class ProductsPage extends BasePage {
  get productsLink() {
    return cy.get('a[href="/products"]');
  }

  get productsList() {
    return cy.get('div.col-sm-4');
  }

  get productsItem() {
    return cy.get('a[href^="/product_details/"]');
  }

  get addToCartBtn() {
    return cy.get('.add-to-cart');
  }

  get productsInfo() {
    return cy.get('.product-information');
  }

  get productPrice() {
    return cy.get('span > span');
  }

  get productSearch() {
    return cy.get('#search_product');
  }

  get productSearchedList() {
    return cy.get('.productinfo');
  }

  get productSearchBtn() {
    return cy.get('#submit_search');
  }
  get continueBtn() {
    return cy.contains('button', 'Continue Shopping');
  }

  typeSearchProductAndClickSearchBtn(searchTerms) {
    this.productSearch.clear().type(searchTerms);
    this.productSearchBtn.click();
  }

  clickRandomViewProduct() {
    this.productsItem.then(($links) => {
      const itemCount = $links.length;
      const randomIndex = Math.floor(Math.random() * itemCount);
      cy.wrap($links[randomIndex]).click();
    });
  }

  hoverAndClick() {
    cy.get('.productinfo').then(($links) => {
      const itemCount = $links.length;
      const randomIndex = Math.floor(Math.random() * itemCount);
      const selectedLink = $links[randomIndex];
      cy.wrap(selectedLink).trigger('mouseover');
      cy.wrap(selectedLink).find('.add-to-cart').first().click();
      cy.wrap(selectedLink)
        .find('h2')
        .then((priceElement) => {
          const productPrice = priceElement.text().trim();
          cy.wrap(selectedLink)
            .find('p')
            .then((nameElement) => {
              const productName = nameElement.text().trim();
              cy.writeFile('cypress/fixtures/product.json', {
                name: productName,
                price: productPrice,
              });
          this.continueBtn.click();
            });
        });
    });
  }
}
export default new ProductsPage();
