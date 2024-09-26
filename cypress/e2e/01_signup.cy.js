/// <reference types="cypress" />
import BasePage from '../pages/BasePage';
import LoginPage from '/cypress/pages/LoginPage';
import CreateAccountPage from '/cypress/pages/CreateAccountPage';

const basePage = new BasePage();

describe('Verifying Registration', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('Creationt account', () => {
    LoginPage.bodyIsVisible();
    LoginPage.titleHomePageIsVisible();
    LoginPage.openSignUpAndLoginForm();
    LoginPage.fillSignupFormAndClick();
    CreateAccountPage.fillAccountInfoAndClickBtn();
    CreateAccountPage.continueBtn.click();
    LoginPage.loggedInIsVisible();
  });
});
