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
    mobileNum: faker.phone.number('+1 ### ### ####')
  };
 
  cy.writeFile('cypress/fixtures/userData.json', user);
  return user;
}

 export function generateRandomData(){
   return {
    contactName: faker.name.firstName(),
    contactEmail: faker.internet.email(),
    contactSubject: faker.lorem.sentence(),
    contactMsg: faker.lorem.paragraph()
   };
}