import { productSelectors } from '../support/constants'
  
  Cypress.Commands.add("visitShop", () => {
    cy.visit("https://automationexercise.com/")
  })

  Cypress.Commands.add('getProductsHeader', () => {
    return cy.get('.nav.navbar-nav > li').eq(1)
  })

  Cypress.Commands.add('clickProductsHeader', () => {
    cy.getProductsHeader().click()
  })

  Cypress.Commands.add('getNthProduct', (n) => {
    return cy.get(productSelectors.productItems).eq(n)
  })

  Cypress.Commands.add('clickNthProductDetails', (n) => {
    cy.getNthProduct(n).within(() => {
      cy.get('.nav.nav-pills.nav-justified a').click()
    })
  })

  Cypress.Commands.add('quantityProduct', () => {
    return cy.get('#quantity')
  })

  Cypress.Commands.add('getAddCartButton', () => {
    return cy.get('.btn.btn-default.cart')
  })

  Cypress.Commands.add('clickAddCartButton', () => {
    cy.getAddCartButton().click()
  })

  Cypress.Commands.add('addedProductCart', () => {
    cy.get('.modal-content').within(() => {
      cy.get('.text-center').should('contain', 'Your product has been added to cart.')
    })
  })

  Cypress.Commands.add('getContinueShoppingButton', () =>{
    return cy.get('.btn.btn-success.close-modal.btn-block')
  })

  Cypress.Commands.add('clickContinueShoppingButton', () => {
    cy.getContinueShoppingButton().click()
  })

  Cypress.Commands.add('getCartHeader', () => {
    return cy.get('.nav.navbar-nav > li').eq(2)
  })

  Cypress.Commands.add('clickGetCartHeader', () => {
    cy.getCartHeader().click()
  })

  Cypress.Commands.add('getCheckoutButton', () =>{
    return cy.get('.btn.btn-default.check_out')
  })

  Cypress.Commands.add('clickGetCheckoutButton', () => {
    cy.getCheckoutButton().click()
  })

  Cypress.Commands.add('clickRegisterLoginModal', () => {
  cy.get('.modal-content').within(() => {
    cy.get('a[href="/login"]').click()
  })
})

Cypress.Commands.add('getSignUpName', () =>{
    return cy.get('[data-qa="signup-name"]')
})

Cypress.Commands.add('getSignEmail', () =>{
    return cy.get('[data-qa="signup-email"]')
})

Cypress.Commands.add('getSignUpButton', () => {
    return cy.get('[data-qa="signup-button"]')
})

Cypress.Commands.add('clickSingUpButton', () => {
    cy.getSignUpButton().click()
})

Cypress.Commands.add('getTitleBoolean', () => {
    return cy.get('.clearfix input[type="radio"]')
})

Cypress.Commands.add('getNameForm', () => {
    return cy.get('[data-qa="name"]')
})

Cypress.Commands.add('getEmailForm', () => {
    return cy.get('[data-qa="email"]')
})

Cypress.Commands.add('getPassForm', () => {
    return cy.get('[data-qa="password"]')
})

Cypress.Commands.add('getDaysForm', () => {
    return cy.get('[data-qa="days"]')
})

Cypress.Commands.add('getMonthsForm', () => {
    return cy.get('[data-qa="months"]')
})

Cypress.Commands.add('getYearsForm', () => {
    return cy.get('[data-qa="years"]')
})

Cypress.Commands.add('getNewsletterChecboxForm', () => {
    return cy.get('#newsletter')
})

Cypress.Commands.add('getOffersCheckboxForm', () => {
    return cy.get('#optin')
})

Cypress.Commands.add('getFirstNameForm', () => {
    return cy.get('[data-qa="first_name"]')
})

Cypress.Commands.add('getLastNameForm', () => {
    return cy.get('[data-qa="last_name"]')
})

Cypress.Commands.add('getCompanyForm', () => {
    return cy.get('[data-qa="company"]')
})

Cypress.Commands.add('getAddress1Form', () => {
    return cy.get('[data-qa="address"]')
})

Cypress.Commands.add('getAddress2Form', () => {
    return cy.get('[data-qa="address2"]')
})

Cypress.Commands.add('getCountryForm', () => {
    return cy.get('[data-qa="country"]')
})

Cypress.Commands.add('getStateForm', () => {
    return cy.get('[data-qa="state"]')
})

Cypress.Commands.add('getCityForm', () => {
    return cy.get('[data-qa="city"]')
})

Cypress.Commands.add('getZipcodeForm', () => {
    return cy.get('[data-qa="zipcode"]')
})

Cypress.Commands.add('getMobileNumberForm', () => {
    return cy.get('[data-qa="mobile_number"]')
})

Cypress.Commands.add('getCreateAccountButton', () => {
  return cy.get('[data-qa="create-account"]')
})

Cypress.Commands.add('clickGetCreateAccountButton', () => {
  cy.getCreateAccountButton().click()
})

Cypress.Commands.add('getAccountCreated', () =>{
  return cy.get('[data-qa="account-created"]')
})

Cypress.Commands.add('getContinueAccountButton', () =>{
  return cy.get('[data-qa="continue-button"]')
})

Cypress.Commands.add('clickContinueButton', () => {
  cy.getContinueAccountButton().click()
})

Cypress.Commands.add('getPlaceOrderButton', () => {
  cy.get('a[href="/payment"]')
})

Cypress.Commands.add('clickPlaceOrderButton', () => {
  cy.getPlaceOrderButton().click()
})

Cypress.Commands.add('getCardName', () => {
  return cy.get('[data-qa="name-on-card"]')
})

Cypress.Commands.add('getCardNumber', () => {
  return cy.get('[data-qa="card-number"]')
})

Cypress.Commands.add('getCardCVC', () => {
  return cy.get('[data-qa="cvc"]')
})

Cypress.Commands.add('getCardExpireMonth', () => {
  return cy.get('[data-qa="expiry-month"]')
})

Cypress.Commands.add('getCardExpireYear', () => {
  return cy.get('[data-qa="expiry-year"]')
})

Cypress.Commands.add('getPayButton', () => {
  return cy.get('[data-qa="pay-button"]')
})

Cypress.Commands.add('getOrderPlaced', () => {
  return cy.get('[data-qa="order-placed"]')
})

Cypress.Commands.add('getContinueButton', () => {
  return cy.get('[data-qa="continue-button"]')
})

Cypress.Commands.add('clickContinueButton', () => {
  cy.getContinueButton().click()
})

Cypress.Commands.add('getLogOut', () => {
  return cy.get('a[href="/logout"]')
})

Cypress.Commands.add('clickGetLogOut', () => {
  cy.getLogOut().click()
})

Cypress.Commands.add('getLogin', () => {
  return cy.get('a[href="/login"]')
})
