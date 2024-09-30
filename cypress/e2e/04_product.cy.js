import BasePage from '../pages/BasePage';
import ProductsPage from '../pages/ProductsPage';
import LoginPage from '/cypress/pages/LoginPage';
import CartPage from '../pages/CartPage';

const basePage = new BasePage();

describe('Verifying Products page', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('Verify All Products and product detail page', () => {
    LoginPage.bodyIsVisible();
    LoginPage.titleHomePageIsVisible();
    ProductsPage.productsLink.click();
    cy.url().should('eq', basePage.productsUrl);
    ProductsPage.productCardIsDisplayed();
    ProductsPage.clickRandomViewProduct();
    ProductsPage.productInfoIsVisibleAndEql();
    ProductsPage.priceIsEql();
  });

  it('Verify Searching Product', () => {
    ProductsPage.productsLink.click();
    cy.url().should('eq', basePage.productsUrl);
    ProductsPage.productSearchIsRelevanted();
  });

  it('Verify Adding Products in Cart', () => {
    ProductsPage.productsLink.click();
    ProductsPage.hoverOnItemAndClick();
    ProductsPage.hoverOnItemAndClick();
    CartPage.cartLink.first().click();
    CartPage.productPriceInCartIsEql();
  });

  it('Verify Product quantity in Cart', () => {
    ProductsPage.clickRandomViewProduct();
    ProductsPage.typequantity(4);
    ProductsPage.addToCartBtn.click();
    ProductsPage.viewCart.click();
    cy.get('button.disabled').should('contain.text', '4');
  });

  it('Verify View Category Products', () => {
    ProductsPage.productsLink.click();
    ProductsPage.productCategoryIsOpened();
  });

  it('Verify View & Cart Brand Products', () => {
    ProductsPage.productsLink.click();
    ProductsPage.productBrandIsOpened();
  });

  it('Add review on product', () => {
    ProductsPage.productsLink.click();
    cy.url().should('eq', basePage.productsUrl);
    ProductsPage.productCardIsDisplayed();
    ProductsPage.clickRandomViewProduct();
    ProductsPage.fillReviewFieldAndSubmit();
    ProductsPage.successAlertIsAppear();
  });

  it('Add to cart from Recommended items', () => {
    ProductsPage.recommendProduct.scrollIntoView();
    ProductsPage.clickRecommendRandomItem();
    ProductsPage.viewCart.click();
    CartPage.recommendItemIsDisplayedinCart();
  });
});
