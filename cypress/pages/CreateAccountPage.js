/// <reference types="cypress" />
import DataGenerator from '../support/testData/dataGenerator';
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

  get adress() {
    return cy.get('[data-qa="address"]');
  }

  get adress2() {
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

  typePassword() {
    this.password.type(DataGenerator.getRandomPassword());
  }

  checkCheckboxSignup() {
    this.checkboxSignup.check();
  }
  checkcheckboxOffers() {
    this.checkboxOffers.check();
  }

  typeFistName() {
    this.firstName.type(DataGenerator.getRandomFirstName());
  }

  typeLastName() {
    this.lastName.type(DataGenerator.getRandomLastName());
  }

  typeCompany() {
    this.company.type(DataGenerator.getRandomCompanyName());
  }

  typeAddress() {
    this.adress.type(DataGenerator.getRandomAddress());
  }

  typeAdress2() {
    this.adress2.type(DataGenerator.getRandomAddress2());
  }
  selectCountry() {
    this.countries.then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomValue = options[randomIndex].value;
      this.countries.select(randomValue);
    });
  }

  typeCity() {
    this.city.type(DataGenerator.getRandomCity());
  }

  typeState() {
    this.state.type(DataGenerator.getRandomState());
  }

  typeZipcode() {
    this.zipcode.type(DataGenerator.getRandomZipcode());
  }

  typeMobileNum() {
    this.mobileNum.type(DataGenerator.getRandomMobileNumber());
  }
}

export default new CreateAccountPage();
