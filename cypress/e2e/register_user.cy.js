/// <reference types="cypress" />
import LoginPage from '/cypress/pages/LoginPage';
import CreateAccountPage from '/cypress/pages/CreateAccountPage';

describe('Test case 1', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('Verify Registration', () => {
    //Verify that home page is visible successfully
    cy.get('body').should('be.visible');
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.title().should('include', 'Automation Exercise');
    //Verify 'New User Signup!' is visible
    LoginPage.loginLink.click();
    LoginPage.signupForm.should('be.visible');
    cy.contains('h2', 'New User Signup!').should('be.visible');
    //Verify that "ENTER ACCOUNT INFORMATION" is visible
    LoginPage.signup();
    cy.url().should('eq', 'https://automationexercise.com/signup');
    cy.contains('h2', 'Enter Account Information').should('be.visible');
    //Verify that 'ACCOUNT CREATED!' is visible
    CreateAccountPage.gender.click();
    CreateAccountPage.typePassword();
    CreateAccountPage.selectDays();
    CreateAccountPage.selectMonths();
    CreateAccountPage.selectYears();
    CreateAccountPage.checkCheckboxSignup();
    CreateAccountPage.checkcheckboxOffers();
    CreateAccountPage.typeFistName();
    CreateAccountPage.typeLastName();
    CreateAccountPage.typeCompany();
    CreateAccountPage.typeAddress();
    CreateAccountPage.typeAdress2();
    CreateAccountPage.selectCountry();
    CreateAccountPage.typeState();
    CreateAccountPage.typeCity();
    CreateAccountPage.typeZipcode();
    CreateAccountPage.typeMobileNum();
    CreateAccountPage.createAccountBtn.click();
    cy.contains('h2', 'Account Created!').should('be.visible');
    //Verify that 'Logged in as username' is visible
    CreateAccountPage.continueBtn.click();
    cy.contains('a', ' Logged in as').should('be.visible');
    //Verify that 'ACCOUNT DELETED!' is visible
    CreateAccountPage.deleteBtn.click();
    cy.contains('h2', 'Account Deleted!').should('be.visible');
    CreateAccountPage.continueBtn.click();
  });
});