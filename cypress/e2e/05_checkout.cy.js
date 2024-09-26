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
    CartPage.fillCommentInCheckoutAndClick();
    PaymentPage.fillDataCreditCardAndClick();
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
    PaymentPage.fillDataCreditCardAndClick();
    PaymentPage.paymentContinueBtn.click();
    CreateAccountPage.deleteBtn.click();
    CreateAccountPage.continueBtn.click();
  });

  it('Remove Products From Cart', () => {
    ProductsPage.productsLink.click();
    ProductsPage.hoverOnItemAndClick();
    CartPage.cartLink.first().click();
    CartPage.deleteItemrBtn.click();
    CartPage.cartIsEmptyIsDisplayed();
  });
});
