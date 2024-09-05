/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const randomName = faker.name.firstName();
const randomEmail = faker.internet.email();

import BasePage from './BasePage';
class LoginPage extends BasePage {
  get loginLink() {
    return cy.get('a[href="/login"]');
  }
  get signupForm() {
    return cy.get('.signup-form');
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

  open() {
    super.open('');
  }

  signup() {
    this.signupName.type(randomName);
    this.signupEmail.type(randomEmail);
    this.signupBtn.click();
  }
}

export default new LoginPage();
