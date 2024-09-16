import { randomData } from '../support/constants'
import "../support/getCommands"

Cypress.Commands.add('assertThirdProduct', () => {
  cy.clickProductsHeader();
  cy.getNthProduct(2).should('exist')
  cy.clickNthProductDetails(2)
});

Cypress.Commands.add('enterRandomQuantity', () => {
    const randomQuantity = randomData.getRandomQuantity()
    cy.get('#quantity')
      .clear()
      .type(randomQuantity.toString())
  })

Cypress.Commands.add('assertProductsCart', () => {
  cy.enterRandomQuantity()
  cy.clickAddCartButton()
  cy.addedProductCart()
})

Cypress.Commands.add('fillSingupForm', () => {
    const randomName = randomData.generateRandomName()
    const randomEmail = randomData.generateRandomEmail()
    cy.getSignUpName().type(randomName)
    cy.getSignEmail().type(randomEmail)
})

Cypress.Commands.add('assertCheckout', () => {
  cy.clickContinueShoppingButton()
  cy.clickGetCartHeader()
  cy.clickGetCheckoutButton().should('exist')
  cy.clickRegisterLoginModal()
})

Cypress.Commands.add('assertSignUp', () => {
  cy.fillSingupForm()
  cy.getSignUpButton().should('exist')
  cy.clickSingUpButton()
})

Cypress.Commands.add('fillCompleteForm', () => {
  const randomPass = randomData.generateRandomPassword()
  const randomFirstName = randomData.generateRandomFirstName()
  const randomLastName = randomData.generateRandomName()
  const randomCompany = randomData.generateRandomCompanyName()
  const randomAddress = randomData.generateRandomAddress()
  const randomAddress2 = randomData.generateRandomAddress2()
  const randomState = randomData.generateRandomState()
  const randomCity = randomData.generateRandomCity()
  const randomZipcode = randomData.generateRandomZipcode()
  const randomMobileNumber = randomData.generateRandomMobileNumber()

  cy.getPassForm().type(randomPass)
  cy.getFirstNameForm().type(randomFirstName)
  cy.getLastNameForm().type(randomLastName)
  cy.getCompanyForm().type(randomCompany)
  cy.getAddress1Form().type(randomAddress)
  cy.getAddress2Form().type(randomAddress2)
  cy.getStateForm().type(randomState)
  cy.getCityForm().type(randomCity)
  cy.getZipcodeForm().type(randomZipcode)
  cy.getMobileNumberForm().type(randomMobileNumber)
  cy.getNewsletterChecboxForm().check()
  cy.getOffersCheckboxForm().check()
  cy.selectRandomBoolean()
  cy.selectRandomDate()
  cy.selectCountry()
  cy.clickGetCreateAccountButton()
});

Cypress.Commands.add('selectRandomBoolean', () => {
  cy.getTitleBoolean().then(($radios) => {
  const randomIndex = Math.floor(Math.random() * $radios.length)
  cy.wrap($radios[randomIndex]).check()
  })
})

Cypress.Commands.add('selectRandomDate', () => {
  cy.getDaysForm().then($dropdown => {
    const dayOptions = $dropdown.find('option');
    const dayRandomIndex = Math.floor(Math.random() * dayOptions.length);
    const selectedDay = dayOptions.eq(dayRandomIndex).val();
    cy.getDaysForm().select(selectedDay);
  });

  cy.getMonthsForm().then($dropdown => {
    const monthOptions = $dropdown.find('option');
    const monthRandomIndex = Math.floor(Math.random() * monthOptions.length);
    const selectedMonth = monthOptions.eq(monthRandomIndex).val();
    cy.getMonthsForm().select(selectedMonth);
  });

  cy.getYearsForm().then($dropdown => {
    const yearOptions = $dropdown.find('option');
    const yearRandomIndex = Math.floor(Math.random() * yearOptions.length);
    const selectedYear = yearOptions.eq(yearRandomIndex).val();
    cy.getYearsForm().select(selectedYear);
  });
});

Cypress.Commands.add('selectCountry', () => {
  cy.getCountryForm().then($dropdown => {
    const options = $dropdown.find('option');
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options.eq(randomIndex).val();
    cy.getCountryForm().select(selectedOption);
  });
});

Cypress.Commands.add('assertAccountCreated', () => {
  cy.fillCompleteForm()
  cy.getAccountCreated().should('exist').should('be.visible')
})

Cypress.Commands.add('proceedToCheckout', () => {
  cy.clickContinueButton()
  cy.clickGetCartHeader()
  cy.clickGetCheckoutButton()
  cy.clickPlaceOrderButton()
})

Cypress.Commands.add('compleatePayFrom', () => {
  const randomCardName = randomData.generateRandomName()
  const randomCardNumber = randomData.generateRandomCardNumber()
  const randomCardCvc = randomData.generateRandomCvc()
  const randomCardExpireMonth = randomData.generateRandomExpireMonth()
  const randomCardExpireYear = randomData.generateRandomExpireYear()

  cy.getCardName().type(randomCardName)
  cy.getCardNumber().type(randomCardNumber)
  cy.getCardCVC().type(randomCardCvc)
  cy.getCardExpireMonth().type(randomCardExpireMonth)
  cy.getCardExpireYear().type(randomCardExpireYear)
  cy.getPayButton().click()
})

Cypress.Commands.add('assertOrderPlace', () => {
  cy.proceedToCheckout()
  cy.compleatePayFrom()
  cy.getOrderPlaced().should('exist').should('be.visible')
})

Cypress.Commands.add('assertLogOut', () => {
  cy.clickContinueButton()
  cy.clickGetLogOut()
  cy.getLogin().should('exist').should('be.visible')
})