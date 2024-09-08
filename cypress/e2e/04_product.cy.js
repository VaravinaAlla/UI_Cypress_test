import BasePage from '../pages/BasePage';
import ProductsPage from '../pages/ProductsPage';
import LoginPage from '/cypress/pages/LoginPage';

const basePage = new BasePage();

describe('Verifying All Products and product detail page', () => {
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
    cy.log('Verify that detail detail is visible');
  });
});
