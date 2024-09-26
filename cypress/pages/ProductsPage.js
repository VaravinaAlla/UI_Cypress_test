/// <reference types="cypress" />

import BasePage from './BasePage';
import { getRandomSearchTerm } from '../support/dataGenerator';
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
    return cy.contains('button', 'Add to cart');
  }

  get viewCart() {
    return cy.contains('u', 'View Cart');
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

  get quantity() {
    return cy.get('#quantity');
  }

  get nameReview() {
    return cy.get('#name');
  }

  get emailReview() {
    return cy.get('#email');
  }

  get commentReview() {
    return cy.get('#review');
  }

  get reviewBtn() {
    return cy.get('#button-review');
  }

  get recommendProduct() {
    return cy.get('#recommended-item-carousel');
  }

  productCategoryIsOpened(){
    cy.contains('h2', 'Category').should('be.visible');
    cy.contains('Women').click();
    cy.contains('Dress').click();
    cy.contains('h2', 'Women - Dress Products').should('be.visible');
    cy.contains('Men').click();
    cy.contains('Tshirts').click();
    cy.contains('h2', 'Men - Tshirts Products').should('be.visible');
  }

  productBrandIsOpened(){
    cy.contains('h2', 'Brands').should('be.visible');
    cy.contains('Polo').click();
    cy.url().should('eq', 'https://automationexercise.com/brand_products/Polo');
    cy.contains('h2', 'Brand - Polo Products').should('be.visible');
    cy.contains('Babyhug').click();
    cy.url().should(
      'eq',
      'https://automationexercise.com/brand_products/Babyhug'
    );
    cy.contains('h2', 'Brand - Babyhug Products').should('be.visible');
  }

  productCardIsDisplayed() {
    this.productsList.should('have.length.greaterThan', 0);
  }

  fillReviewFieldAndSubmit(){
    this.nameReview.type('Alla');
    this.emailReview.type('test@gmail.com');
    this.commentReview.type('dghsgdhsjagdjhgsadsad');
    this.reviewBtn.click();
  }

  

  successAlertIsAppear(){
    cy.get('.alert-success.alert')
      .should('be.visible')
      .and('contain', 'Thank you for your review.');
  }

  productInfoIsVisibleAndEql() {
    this.productsInfo
      .should('contain.text', 'Category')
      .and('contain.text', 'Availability')
      .and('contain.text', 'Condition')
      .and('contain.text', 'Brand')
      .and('be.visible');
  }

  priceIsEql() {
    this.productPrice.invoke('text').then((priceText) => {
      const trimmedPrice = priceText.trim();
      expect(trimmedPrice).to.match(/Rs\. \d+/);
    });
  }

  productSearchIsRelevanted(){
    cy.fixture('searchTerms').then((data) => {
      const terms = data.terms;
      const searchTerm = getRandomSearchTerm(terms);
      this.typeSearchProductAndClickSearchBtn(searchTerm);
      cy.url().should('include', `?search=${searchTerm}`);
      cy.contains('h2', 'Searched Products').should('be.visible');
      this.productSearchedList.each(($el) => {
        cy.wrap($el).find('p').should('contain.text', searchTerm);
      });
    });
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

  hoverOnItemAndClick() {
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

  clickRecommendRandomItem() {
    cy.get('.carousel-inner .item.active .product-image-wrapper').then(
      ($links) => {
        const itemCount = $links.length;
        const randomIndex = Math.floor(Math.random() * itemCount);
        const selectedLink = $links[randomIndex];
        cy.wrap($links.eq(randomIndex)).find('.add-to-cart').click();
        cy.wrap(selectedLink)
          .find('p')
          .then((nameElement) => {
            const productName = nameElement.text().trim();
            cy.writeFile('cypress/fixtures/recommend_product.json', {
              name: productName,
            });
          });
      }
    );
  }
}

export default new ProductsPage();
