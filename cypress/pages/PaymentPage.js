/// <reference types="cypress" />
import { generateRandomDataCard } from '../support/dataGenerator';

import BasePage from './BasePage';
class PaymentPage extends BasePage {
  get placeOrderLink() {
    return cy.get('a[href="/payment"]');
  }

  get nameCard() {
    return cy.get('[data-qa="name-on-card"]');
  }
  get numberCard() {
    return cy.get('[data-qa="card-number"]');
  }

  get CVCCard() {
    return cy.get('[data-qa="cvc"]');
  }

  get monthCard() {
    return cy.get('[data-qa="expiry-month"]');
  }

  get yearCard() {
    return cy.get('[data-qa="expiry-year"]');
  }

  get playAndConfirmBtn() {
    return cy.get('[data-qa="pay-button"]');
  }

  get paymentContinueBtn() {
    return cy.get('[data-qa="continue-button"]');
  }

  fillDataCreditCardAndClick() {
    const creditCardData = generateRandomDataCard();
    this.numberCard.type(creditCardData.cardNumber);
    this.nameCard.type(creditCardData.cardName);
    this.CVCCard.type(creditCardData.cardCVV);
    this.monthCard.type(creditCardData.cardMonth);
    this.yearCard.type(creditCardData.cardYear);
    this.playAndConfirmBtn.click();
  }
}

export default new PaymentPage();
