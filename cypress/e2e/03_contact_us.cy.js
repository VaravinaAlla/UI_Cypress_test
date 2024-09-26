import BasePage from '../pages/BasePage';
import LoginPage from '/cypress/pages/LoginPage';
import ContactUsPage from '/cypress/pages/ContactUsPage';

const basePage = new BasePage();

describe('Verifying "Contact us" Form', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('Sending "Contact us" From', () => {
    LoginPage.bodyIsVisible();
    LoginPage.titleHomePageIsVisible();
    ContactUsPage.openContactUsForm();
    ContactUsPage.fillContactFormAndClick();
    ContactUsPage.successAlertIsAppeared();
  });
});
