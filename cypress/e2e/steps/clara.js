import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("access clara.cc", () => {
  cy.visit('https://clara.cc')
})

When("select Mexico language", () => {
  cy.get('#pwr-header-top .menu-language a[href*="es-mx"]').click({force: true})
})

Then("url should contain es-mx", () => {
  cy.url().should('include', '/es-mx/')
})