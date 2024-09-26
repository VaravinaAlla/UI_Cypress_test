import BasePage from '../pages/BasePage';
import LoginPage from '/cypress/pages/LoginPage';
import CreateAccountPage from '/cypress/pages/CreateAccountPage';

const basePage = new BasePage();

describe('Verifying Login with correct and incorrect data', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('Login with correct email and password', () => {
    LoginPage.bodyIsVisible();
    LoginPage.titleHomePageIsVisible();
    LoginPage.openSignUpAndLoginForm();
    LoginPage.loginFormIsVisible();
    LoginPage.fillLoginFormAndClick();
    LoginPage.logoutLink.click();
  });

  it('Login with incorrect email and password', () => {
    LoginPage.openSignUpAndLoginForm();
    LoginPage.loginWithIncorrectEmailAndPass();
    cy.get('p').should('contain.text', 'Your email or password is incorrect!');
  });

  it('Login with empty email', () => {
    LoginPage.openSignUpAndLoginForm();
    LoginPage.loginWithEmptyEmail();
    LoginPage.loginEmail.then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      expect($input[0].validationMessage).to.eq('Please fill out this field.');
    });
  });

  it('Login with empty password', () => {
    LoginPage.openSignUpAndLoginForm();
    LoginPage.loginWithEmptyPass();
    LoginPage.loginPassword.then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      expect($input[0].validationMessage).to.eq('Please fill out this field.');
    });
  });

  it('Login with incorrect Email', () => {
    LoginPage.openSignUpAndLoginForm();
    LoginPage.loginWithIncorrectEmail();
    LoginPage.loginEmail.then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      expect($input[0].validationMessage).to.include(
        "Please include an '@' in the email address."
      );
    });
  });

  it('Registration with existing email', () => {
    LoginPage.openSignUpAndLoginForm();
    LoginPage.fillSignupFormExistUserAndClick();
    cy.get('p').should('contain.text', 'Email Address already exist!');
  });

  it('Delete account', () => {
    LoginPage.openSignUpAndLoginForm();
    LoginPage.fillLoginFormAndClick();
    CreateAccountPage.deleteBtn.click();
    CreateAccountPage.continueBtn.click();
  });
});
