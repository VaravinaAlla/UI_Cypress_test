/// <reference types="cypress" />
import { generateRandomUser } from '../support/dataGenerator';

import BasePage from './BasePage';
class LoginPage extends BasePage {
  get loginLink() {
    return cy.get('a[href="/login"]');
  }

  get logoutLink() {
    return cy.get('a[href="/logout"]');
  }

  get signupForm() {
    return cy.get('.signup-form');
  }

  get loginForm() {
    return cy.get('.login-form');
  }

  get signupName() {
    return cy.get('input[data-qa="signup-name"]');
  }

  get signupEmail() {
    return cy.get('input[data-qa="signup-email"]');
  }

  get signupBtn() {
    return cy.get('[data-qa="signup-button"]');
  }

  get loginBtn() {
    return cy.get('[data-qa="login-button"]');
  }

  get loginEmail() {
    return cy.get('input[data-qa="login-email"]');
  }

  get loginPassword() {
    return cy.get('input[data-qa="login-password"]');
  }

  open() {
    super.open('');
  }

  loginWithIncorrectEmailAndPass() {
    this.loginForm.should('be.visible');
    this.loginEmail.type('111@gmail.com');
    this.loginPassword.type('123');
    this.loginBtn.click();
  }

  loginWithEmptyEmail() {
    this.loginEmail.type(' ');
    this.loginPassword.type('123');
    this.loginBtn.click();
  }

  loginWithEmptyPass() {
    this.loginEmail.type('tetians125%@gmail.com');
    this.loginBtn.click();
  }

  loginWithIncorrectEmail() {
    this.loginEmail.type('Tanya');
    this.loginPassword.type('123');
    this.loginBtn.click();
  }

  openSignUpAndLoginForm() {
    this.loginLink.click();
  }

  fillSignupFormAndClick() {
    const user = generateRandomUser();
    this.signupName.type(user.name);
    this.signupEmail.type(user.email);
    this.signupBtn.click();
  }

  fillSignupFormExistUserAndClick() {
    cy.fixture('userData.json').then((user) => {
      this.signupName.type(user.name);
      this.signupEmail.type(user.email);
      this.signupBtn.click();
    });
  }

  fillLoginFormAndClick() {
    cy.fixture('userData.json').then((user) => {
      this.loginEmail.type(user.email);
      this.loginPassword.type(user.password);
      this.loginBtn.click();
    });
  }

  bodyIsVisible() {
    cy.get('body').should('be.visible');
  }

  titleHomePageIsVisible() {
    cy.title().should('include', 'Automation Exercise');
  }

  loginFormIsVisible(){
    this.loginForm.should('be.visible');
    cy.contains('h2', 'Login to your account').should('be.visible');
  }

  loggedInIsVisible(){
    cy.contains('a', 'Logged in as ').should('be.visible');
  }

}

export default new LoginPage();
