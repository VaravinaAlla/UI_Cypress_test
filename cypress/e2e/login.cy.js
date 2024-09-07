import LoginPage from '/cypress/pages/LoginPage';
import CreateAccountPage from '/cypress/pages/CreateAccountPage';

describe('Test case 2 - Verify Login', () => {
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
  });

  afterEach(() => {
    CreateAccountPage.deleteBtn.click();
    cy.contains('h2', 'Account Deleted!').should('be.visible');
    cy.log('Verify that "ACCOUNT DELETED!" is visible');
    CreateAccountPage.continueBtn.click();
  });
});
