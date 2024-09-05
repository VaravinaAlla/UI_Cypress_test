import { faker } from '@faker-js/faker';

class DataGenerator {
  static getRandomPassword() {
    return faker.internet.password();
  }

  static getRandomFirstName() {
    return faker.person.firstName();
  }

  static getRandomLastName() {
    return faker.person.lastName();
  }

  static getRandomCompanyName() {
    return faker.company.name();
  }

  static getRandomAddress() {
    return faker.location.streetAddress();
  }

  static getRandomAddress2() {
    return faker.location.streetAddress();
  }

  static getRandomCity() {
    return faker.location.city();
  }

  static getRandomState() {
    return faker.location.state();
  }

  static getRandomZipcode() {
    return faker.location.zipCode();
  }

  static getRandomMobileNumber() {
    return faker.phone.number('+48 91 ### ## ##');
  }
}

export default DataGenerator;
