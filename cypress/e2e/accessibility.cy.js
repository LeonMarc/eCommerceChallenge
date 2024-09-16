import "../support/commands"
import 'cypress-axe';

describe('Accessibility Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationexercise.com/')
      cy.injectAxe()
    })
  
    it('Should have no detectable accessibility violations', () => {
      cy.checkA11y()
    })
  
    it('Should check accessibility for a specific section', () => {
      cy.get('.my-specific-section').checkA11y()
    })
  })
  