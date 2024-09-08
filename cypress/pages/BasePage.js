/// <reference types="cypress" />

export default class BasePage {
  constructor() {
    this.baseURL = Cypress.env('BASE_URL');
  }

  open(url) {
    cy.visit(`${this.baseURL}${url}`);
  }

  get loginUrl() {
    return `${this.baseURL}/login`;
  }

  get signUpUrl() {
    return `${this.baseURL}/signup`;
  }

  get contactUsUrl() {
    return `${this.baseURL}/contact_us`;
  }

  get productsUrl() {
    return `${this.baseURL}/products`;
  }
}
