/// <reference types="cypress" />
import BasePage from './BasePage';

class CreateAccountPage extends BasePage {
  get gender() {
    return cy.get('#uniform-id_gender2');
  }
  get password() {
    return cy.get('#password');
  }

  get days() {
    return cy.get('#days');
  }

  get months() {
    return cy.get('#months');
  }

  get years() {
    return cy.get('#years');
  }

  get checkboxSignup() {
    return cy.get('#newsletter');
  }
  get checkboxOffers() {
    return cy.get('#optin');
  }

  get firstName() {
    return cy.get('[data-qa="first_name"]');
  }

  get lastName() {
    return cy.get('[data-qa="last_name"]');
  }

  get company() {
    return cy.get('[data-qa="company"]');
  }

  get address() {
    return cy.get('[data-qa="address"]');
  }

  get address2() {
    return cy.get('[data-qa="address2"]');
  }

  get countries() {
    return cy.get('[data-qa="country"]');
  }

  get state() {
    return cy.get('[data-qa="state"]');
  }

  get city() {
    return cy.get('[data-qa="city"]');
  }

  get zipcode() {
    return cy.get('[data-qa="zipcode"]');
  }

  get mobileNum() {
    return cy.get('[data-qa="mobile_number"]');
  }

  get createAccountBtn() {
    return cy.get('[data-qa="create-account"]');
  }

  get continueBtn() {
    return cy.get('[data-qa="continue-button"]');
  }

  get deleteBtn() {
    return cy.get('a[href="/delete_account"]');
  }

  selectDays() {
    this.days.then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomValue = options[randomIndex].value;
      this.days.select(randomValue);
    });
  }

  selectMonths() {
    this.months.then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomValue = options[randomIndex].value;
      this.months.select(randomValue);
    });
  }

  selectYears() {
    this.years.then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomValue = options[randomIndex].value;
      this.years.select(randomValue);
    });
  }

  checkCheckboxSignup() {
    this.checkboxSignup.check();
  }
  checkcheckboxOffers() {
    this.checkboxOffers.check();
  }

  selectCountry() {
    this.countries.then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomValue = options[randomIndex].value;
      this.countries.select(randomValue);
    });
  }

  fillAccountInfoAndClickBtn() {
    cy.fixture('userData.json').then((user) => {
      this.gender.click();
      this.password.type(user.password);
      this.selectDays();
      this.selectMonths();
      this.selectYears();
      this.checkboxSignup.check();
      this.checkboxOffers.check();
      this.firstName.type(user.firstName);
      this.lastName.type(user.lastName);
      this.company.type(user.company);
      this.address.type(user.address);
      this.address2.type(user.address2);
      this.selectCountry();
      this.state.type(user.state);
      this.city.type(user.city);
      this.zipcode.type(user.zipcode);
      this.mobileNum.type(user.mobileNum);
      this.createAccountBtn.click();
    });
  }
}

export default new CreateAccountPage();
