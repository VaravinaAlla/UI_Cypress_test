/// <reference types="cypress" />
import { generateRandomUser } from '../support/dataGenerator';

import BasePage from './BasePage';
class LoginPage extends BasePage {
  get loginLink() {
    return cy.get('a[href="/login"]');
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

  openSignUpAndLoginForm() {
    this.loginLink.click();
  }

  fillSignupFormAndClick() {
    const user = generateRandomUser();
    this.signupName.type(user.name);
    this.signupEmail.type(user.email);
    this.signupBtn.click();
  }

  fillLoginFormAndClick() {
    cy.fixture('userData.json').then((user) => {
      this.loginEmail.type(user.email);
      this.loginPassword.type(user.password);
      this.loginBtn.click();
    });
  }
}

export default new LoginPage();
