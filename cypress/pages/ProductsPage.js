/// <reference types="cypress" />
 

import BasePage from './BasePage';
class ProductsPage extends BasePage {
  get productsLink() {
    return cy.get('a[href="/products"]');
  }

  get productsList() {
    return cy.get('div.col-sm-4');
  }

  get productsItem() {
    return cy.get(' a[href^="/product_details/"]');
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
    return cy.get('.productinfo');;
  }

  get productSearchBtn() {
    return cy.get('#submit_search');
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
}

export default new ProductsPage();
