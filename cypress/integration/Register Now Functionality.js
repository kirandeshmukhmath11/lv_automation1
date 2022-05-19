// <reference types="cypress" />

it('Verify the Register Now functionality if the button is clickable.', function () {

    cy.visit('https://testvillage.letsventure.com/signin')
    cy.wait(2000)
    cy.get('.join-now-link').click({ force: true })


})

it('Verify if after clicking on the Register now it is taking the user to Join user Page.', function () {

    cy.visit('https://testvillage.letsventure.com/signin')
    cy.wait(2000)
    cy.get('.join-now-link').click({ force: true })
    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join')
    cy.wait(2000)


})

it('Verify if the Join user page has two options to Sign up as Investor and Startup.', function () {

    cy.visit('https://testvillage.letsventure.com/signin')
    cy.wait(2000)
    cy.get('.join-now-link').click({ force: true })
    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join')
    cy.wait(2000)
    cy.get('.investor-signup-btn > .btn-lable').click({ force: true })
    cy.wait(1000)
    cy.visit('https://testvillage.letsventure.com/join')
    cy.get('.startup-signup-btn > .btn-lable').click({ force: true })
    cy.wait(1000)
    cy.visit('https://testvillage.letsventure.com/join')





})











Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})