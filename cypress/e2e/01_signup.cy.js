/// <reference types="cypress" />
import LoginPage from '/cypress/pages/LoginPage';
import CreateAccountPage from '/cypress/pages/CreateAccountPage';

describe('Verifying Registration', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('Creationt account', () => {
    cy.get('body').should('be.visible');
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.title().should('include', 'Automation Exercise');
    cy.log('Verify that home page is visible successfully');

    LoginPage.openSignUpAndLoginForm();
    LoginPage.signupForm.should('be.visible');
    cy.contains('h2', 'New User Signup!').should('be.visible');
    cy.log('Verify "New User Signup!" is visible');

    LoginPage.fillSignupFormAndClick();
    cy.url().should('eq', 'https://automationexercise.com/signup');
    cy.contains('h2', 'Enter Account Information').should('be.visible');
    cy.log('Verify that "ENTER ACCOUNT INFORMATION" is visible');

    CreateAccountPage.fillAccountInfoAndClickBtn();
    cy.contains('h2', 'Account Created!').should('be.visible');
    cy.log('Verify that "ACCOUNT CREATED!" is visible');

    CreateAccountPage.continueBtn.click();
    cy.contains('a', 'Logged in as ').should('be.visible');
    cy.log('Verify that "Logged in as username" is visible');
  });
});
