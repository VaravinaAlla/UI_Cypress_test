import BasePage from '../pages/BasePage';
import ProductsPage from '../pages/ProductsPage';
import LoginPage from '/cypress/pages/LoginPage';
import { getRandomSearchTerm } from '../support/dataGenerator';
import CartPage from '../pages/CartPage';

const basePage = new BasePage();

describe('Verifying Products page', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('Verify All Products and product detail page', () => {
    cy.get('body').should('be.visible');
    cy.title().should('include', 'Automation Exercise');
    cy.log('Verify that home page is visible successfully');

    ProductsPage.productsLink.click();
    cy.url().should('eq', basePage.productsUrl);
    cy.contains('h2', 'All Products').should('be.visible');
    cy.log('Verify user is navigated to ALL PRODUCTS page successfully');

    ProductsPage.productsList.should('have.length.greaterThan', 0);
    cy.log('The products list is visible');

    ProductsPage.clickRandomViewProduct();
    cy.log('Click on "View Product" of random product');

    ProductsPage.productsInfo
      .should('contain.text', 'Category')
      .and('contain.text', 'Availability')
      .and('contain.text', 'Condition')
      .and('contain.text', 'Brand')
      .and('be.visible');
    ProductsPage.productPrice.invoke('text').then((priceText) => {
      const trimmedPrice = priceText.trim();
      expect(trimmedPrice).to.match(/Rs\. \d+/);
    });
    cy.log('Verify that Product detail is visible');
  });

  it('Verify Searching Product', () => {
    ProductsPage.productsLink.click();
    cy.url().should('eq', basePage.productsUrl);
    cy.contains('h2', 'All Products').should('be.visible');
    cy.log('Verify user is navigated to ALL PRODUCTS page successfully');

    cy.fixture('searchTerms').then((data) => {
      const terms = data.terms;
      const searchTerm = getRandomSearchTerm(terms);
      ProductsPage.typeSearchProductAndClickSearchBtn(searchTerm);
      cy.url().should('include', `?search=${searchTerm}`);
      cy.log('Verify Searching result url');

      cy.contains('h2', 'Searched Products').should('be.visible');
      cy.log('Verify "SEARCHED PRODUCTS" is visible');

      ProductsPage.productSearchedList.each(($el) => {
        cy.wrap($el).find('p').should('contain.text', searchTerm);
      });
      cy.log('Verify all the products related to search are visible');
    });
  });

  it.only('Verify Adding Products in Cart', () => {
    cy.get('body').should('be.visible');
    cy.title().should('include', 'Automation Exercise');
    cy.log('Verify that home page is visible successfully');

    ProductsPage.productsLink.click();
    ProductsPage.hoverAndClick();
    ProductsPage.hoverAndClick();
    CartPage.cartLink.first().click();
    cy.fixture('product.json').then((product) => {
      cy.get('a[href^="/product_details/"]').should('contain.text', product.name);
      cy.get('.cart_price').should('contain.text', product.price);
    });
  });
});
