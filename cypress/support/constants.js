import { faker } from '@faker-js/faker'

export const productSelectors = {
    productItems: '.features_items .col-sm-4'
  }

export const randomData = {
getRandomQuantity: () => faker.number.int({ min: 1, max: 20 }),
generateRandomName: () => faker.person.fullName(),
generateRandomEmail: () => faker.internet.email(),
generateRandomPassword: (length = 12) => faker.internet.password(length, true, /[a-zA-Z0-9]/),
generateRandomFirstName: () => faker.person.firstName(),
generateRandomLastName: () => faker.person.lastName(),
generateRandomCompanyName: () => faker.company.name(),
generateRandomAddress: () => faker.address.streetAddress(),
generateRandomAddress2: () => faker.address.streetAddress(),
generateRandomState: () => faker.address.state(),
generateRandomCity: () => faker.address.city(),
generateRandomZipcode: () => faker.address.zipCode(),
generateRandomMobileNumber: () => faker.phone.number('###-###-####'),
generateRandomCardNumber: () => faker.finance.creditCardNumber(),
generateRandomCvc: () => faker.finance.creditCardCVV(),
generateRandomExpireMonth: () => faker.number.int({ min: 1, max: 12 }),
generateRandomExpireYear: () => new Date().getFullYear() + faker.number.int({ min: 1, max: 10 })
}