import LoginPage from '/cypress/pages/LoginPage';
import CreateAccountPage from '/cypress/pages/CreateAccountPage';

describe('Verifying Login with correct and incorrect data', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('Login with correct email and password', () => {
    cy.get('body').should('be.visible');
    cy.title().should('include', 'Automation Exercise');
    cy.log('Verify that home page is visible successfully');

    LoginPage.openSignUpAndLoginForm();
    LoginPage.loginForm.should('be.visible');
    cy.contains('h2', 'Login to your account').should('be.visible');
    cy.log('Verify "Login to your account" is visible');

    LoginPage.fillLoginFormAndClick();
    cy.contains('Logged in as').should('be.visible');

    LoginPage.logoutLink.click();
    cy.url().should('eq', 'https://automationexercise.com/login');
    cy.log('Verify that user is navigated to login page');
  });

  it('Login with incorrect email and password', () => {
    LoginPage.openSignUpAndLoginForm();
    LoginPage.loginForm.should('be.visible');
    LoginPage.loginEmail.type('111@gmail.com');
    LoginPage.loginPassword.type('123');
    LoginPage.loginBtn.click();
    cy.get('p').should('contain.text', 'Your email or password is incorrect!');
  });

  it('Login with empty email', () => {
    LoginPage.openSignUpAndLoginForm();
    LoginPage.loginForm.should('be.visible');
    LoginPage.loginEmail.type(' ');
    LoginPage.loginPassword.type('123');
    LoginPage.loginBtn.click();
    LoginPage.loginEmail.then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      expect($input[0].validationMessage).to.eq('Please fill out this field.');
    });
  });

  it('Login with empty password', () => {
    LoginPage.openSignUpAndLoginForm();
    LoginPage.loginForm.should('be.visible');
    LoginPage.loginEmail.type('tetians125%@gmail.com');
    LoginPage.loginBtn.click();
    LoginPage.loginPassword.then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      expect($input[0].validationMessage).to.eq('Please fill out this field.');
    });
  });

  it('Login with incorrect Email', () => {
    LoginPage.openSignUpAndLoginForm();
    LoginPage.loginForm.should('be.visible');
    LoginPage.loginEmail.type('Tanya');
    LoginPage.loginPassword.type('123');
    LoginPage.loginBtn.click();
    LoginPage.loginEmail.then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      expect($input[0].validationMessage).to.include(
        "Please include an '@' in the email address."
      );
    });
  });

  it('Registration with existing email', () => {
    LoginPage.openSignUpAndLoginForm();
    LoginPage.loginForm.should('be.visible');
    LoginPage.fillSignupFormExistUserAndClick();
    cy.get('p').should('contain.text', 'Email Address already exist!');
    cy.log('Verify error "Email Address already exist!" is visible');
  });

  it('Delete account', () => {
    LoginPage.openSignUpAndLoginForm();
    LoginPage.loginForm.should('be.visible');
    cy.contains('h2', 'Login to your account').should('be.visible');
    cy.log('Verify "Login to your account" is visible');

    LoginPage.fillLoginFormAndClick();
    cy.contains('Logged in as').should('be.visible');

    CreateAccountPage.deleteBtn.click();
    cy.contains('h2', 'Account Deleted!').should('be.visible');
    cy.log('Verify that "ACCOUNT DELETED!" is visible');
    CreateAccountPage.continueBtn.click();
  });
});
