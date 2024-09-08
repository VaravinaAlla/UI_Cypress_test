import BasePage from '../pages/BasePage';
import LoginPage from '/cypress/pages/LoginPage';
import ContactUsPage from '/cypress/pages/ContactUsPage';

const basePage = new BasePage();

describe('Verifying "Contact us" Form', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('Sending "Contact us" From', () => {
    cy.get('body').should('be.visible');
    cy.title().should('include', 'Automation Exercise');
    cy.log('Verify that home page is visible successfully');

    ContactUsPage.openContactUsForm();
    cy.url().should('eq', basePage.contactUsUrl);
    cy.contains('h2', 'Get In Touch').should('be.visible');
    cy.log('Verify "Get In Touch" is visible');
    ContactUsPage.fillContactFormAndClick();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Press OK to proceed!');
    });
    cy.get('.alert-success').should(
      'contain.text',
      'Success! Your details have been submitted successfully.'
    );
  });
});
