/// <reference types="cypress" />
import { generateRandomData } from '../support/dataGenerator';
import 'cypress-file-upload';

import BasePage from './BasePage';
class ContactUsPage extends BasePage {
  get contactUsLink() {
    return cy.get('a[href="/contact_us"]');
  }
  get contactName() {
    return cy.get('input[data-qa="name"]');
  }
  get contactEmail() {
    return cy.get('input[data-qa="email"]');
  }
  get contactSubject() {
    return cy.get('input[data-qa="subject"]');
  }
  get contactMsg() {
    return cy.get('[data-qa="message"]');
  }
  get contactFile() {
    return cy.get('input[name="upload_file"]');
  }
  get contactSubmitBtn() {
    return cy.get('input[data-qa="submit-button"]');
  }

  openContactUsForm() {
    this.contactUsLink.click();
  }

  fillContactFormAndClick() {
    const contactData = generateRandomData();
    this.contactName.type(contactData.contactName);
    this.contactEmail.type(contactData.contactEmail);
    this.contactSubject.type(contactData.contactSubject);
    this.contactMsg.type(contactData.contactMsg);
    this.contactFile.attachFile('../fixtures/images/Screenshot_181.png');
    this.contactSubmitBtn.click();
  }

  successAlertIsAppeared() {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Press OK to proceed!');
    });
    cy.get('.alert-success').should(
      'contain.text',
      'Success! Your details have been submitted successfully.'
    );
  }
}

export default new ContactUsPage();
