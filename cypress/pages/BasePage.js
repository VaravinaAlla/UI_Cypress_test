/// <reference types="cypress" />

export default class BasePage {
  constructor() {
    this.baseURL = Cypress.env('BASE_URL');
  }

  open(url) {
    cy.visit(`${this.baseURL}${url}`);
  }
}
