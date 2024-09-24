import CartPage from '../pages/CartPage';
import PaymentPage from '../pages/PaymentPage';
import ProductsPage from '../pages/ProductsPage';
import CreateAccountPage from '/cypress/pages/CreateAccountPage';
import LoginPage from '/cypress/pages/LoginPage';

describe('Verifying Checkout process', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it.only('Place Order: Register while Checkout', () => {
    ProductsPage.productsLink.click();
    ProductsPage.hoverOnItemAndClick();
    CartPage.cartLink.first().click();
    CartPage.cartCheckoutBtn.click();
    CartPage.cartRegisterLoginLink.click();
    LoginPage.fillSignupFormAndClick();
    CreateAccountPage.fillAccountInfoAndClickBtn();
    CreateAccountPage.continueBtn.click();
    CartPage.cartLink.first().click();
    CartPage.cartCheckoutBtn.click();
    cy.get('.step-one').should('contain.text', 'Address Details');
    cy.contains('h2', 'Address Details').should('be.visible');

    CartPage.commentCart.type('hdasjkdhsakjd gdhagsjd gdhasgdashgdj');
    CartPage.placeOrderBtn.click();
    PaymentPage.nameCard.type('4444 6666 7777 7777');
    PaymentPage.numberCard.type('Name Surname');
    PaymentPage.CVCCard.type('123');
    PaymentPage.monthCard.type('02');
    PaymentPage.yearCard.type('2026');
    PaymentPage.playAndConfirmBtn.click();
    PaymentPage.paymentContinueBtn.click();
  });

  it('Place Order: Login before Checkout', () => {
    LoginPage.openSignUpAndLoginForm();
    LoginPage.fillLoginFormAndClick();
    ProductsPage.productsLink.click();
    ProductsPage.hoverOnItemAndClick();
    CartPage.cartLink.first().click();
    CartPage.cartCheckoutBtn.click();
    CartPage.placeOrderBtn.click();
    PaymentPage.nameCard.type('4444 6666 7777 7777');
    PaymentPage.numberCard.type('Name Surname');
    PaymentPage.CVCCard.type('123');
    PaymentPage.monthCard.type('02');
    PaymentPage.yearCard.type('2026');
    PaymentPage.playAndConfirmBtn.click();
    PaymentPage.paymentContinueBtn.click();
    CreateAccountPage.deleteBtn.click();
    CreateAccountPage.continueBtn.click();
  });

  it('Remove Products From Cart', () => {
    ProductsPage.productsLink.click();
    ProductsPage.hoverOnItemAndClick();
    CartPage.cartLink.first().click();
    CartPage.deleteItemrBtn.click();
    cy.get('#empty_cart').should('contain.text', 'Cart is empty!');
  });
});
