import { faker } from '@faker-js/faker';

export function generateRandomUser() {
  const user = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    company: faker.company.name(),
    address: faker.address.streetAddress(),
    address2: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    mobileNum: faker.phone.number('+1 ### ### ####'),
  };

  cy.writeFile('cypress/fixtures/userData.json', user);
  return user;
}

export function generateRandomData() {
  return {
    contactName: faker.name.firstName(),
    contactEmail: faker.internet.email(),
    contactSubject: faker.lorem.sentence(),
    contactMsg: faker.lorem.paragraph(),
  };
}


export function generateRandomComment() {
  return {
    chekoutComment: faker.lorem.sentence(),
  };
}

export function getRandomSearchTerm(terms) {
  const randomIndex = Math.floor(Math.random() * terms.length);
  return terms[randomIndex];
}

export function generateRandomDataCard() {
  return {
    cardName: faker.name.fullName(),
    cardNumber: faker.finance.creditCardNumber('visa'),
    cardMonth: faker.date.future(5).toLocaleDateString('en-GB', {
      month: '2-digit',
    }),
    cardYear: faker.date.future(5).toLocaleDateString('en-GB', {
      year: '2-digit',
    }),
    cardCVV: faker.finance.creditCardCVV(),
  };
}
