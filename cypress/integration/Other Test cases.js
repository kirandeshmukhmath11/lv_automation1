//import { cred } from cypress

const { isAssertClause } = require("typescript")

it('Verify the messages for invalid logins.', function () {

    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password
        var reg_email2 = cred.reg_email2

        //valid email and invalid password
        cy.visit('https://testvillage.letsventure.com/signin')

        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password, { force: true })
        cy.wait(2000)

        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        cy.wait(2000)
        cy.get('.error_notify').should('have.text', 'Please re-enter your password. The password you entered is incorrect. Forgot your password? Request a new one.')
        cy.wait(2000)

        //invalid email and invalid password
        cy.visit('https://testvillage.letsventure.com/signin')

        cy.get('#email').type(cred.reg_email2, { force: true })
        cy.get('#password').type(cred.password, { force: true })
        cy.wait(2000)

        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        cy.wait(2000)
        cy.get('.error_notify').should('have.text', 'The email or password you entered is incorrect')
        cy.wait(2000)
    })
})

it('Verify if the data in the password field is visible as bullet signs.', function () {

    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password
        var reg_email2 = cred.reg_email2

        cy.visit('https://testvillage.letsventure.com/signin')

        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password, { force: true })
        cy.get('#password').should('have.attr', 'type', 'password')
        cy.wait(2000)
    })
})

it('Verify if the password is visible to the user after clicking on the show password button.', function () {

    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password
        var reg_email2 = cred.reg_email2

        cy.visit('https://testvillage.letsventure.com/signin')

        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password, { force: true })
        cy.wait(2000)
        cy.get('.field-icon > .fa').click({ force: true })
        cy.get('#password').should('have.attr', 'type', 'text')
        cy.wait(2000)

    })

})

it('Verify if the Enter key of the keyboard is working correctly on the login page.', function () {

    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password
        var password = cred.password1
        var reg_email2 = cred.reg_email2

        cy.visit('https://testvillage.letsventure.com/signin')

        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password, { force: true })
        cy.wait(2000)
        cy.get('.custom_sign_in').find('#sign_in_submit').type(`{enter}`, { force: true })

    })

})




Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})