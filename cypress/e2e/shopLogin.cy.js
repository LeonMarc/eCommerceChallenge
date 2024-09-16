import "../support/commands"

context("eCommerce Shop", () => {
  beforeEach(() => {
    cy.visitShop()
  })

describe('eCommerce challenge', () => {
  it.only('shop and login happy path - Desktop', () => {
    cy.viewport(1280, 720);
    cy.assertThirdProduct()
    cy.assertProductsCart()
    cy.assertCheckout()
    cy.assertSignUp()
    cy.assertAccountCreated()
    cy.assertOrderPlace()
    cy.assertLogOut()
    })
})
it('shop and login happy path - Iphone', () => {
  cy.viewport('iphone-6');
  cy.assertThirdProduct()
  cy.assertProductsCart()
  cy.assertCheckout()
  cy.assertSignUp()
  cy.assertAccountCreated()
  cy.assertOrderPlace()
  cy.assertLogOut()
  })
})
