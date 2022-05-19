// <reference types="cypress" />

it('Verify if a user will be able to log in with a valid username and valid password', function () {

    cy.visit('https://testvillage.letsventure.com/')
    cy.wait(4000)
    cy.get('.signin').click()
    cy.wait(2000)
    // Sign in page will be diplayed

    cy.get('#email').type('kirandeshmukhmath@gmail.com', { force: true })
    cy.get('#password').type('Arun11@%', { force: true })
    cy.wait(3000)
    cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
    cy.wait(5000)
    //logging out now
    cy.get('.jss19').click()
    cy.get(':nth-child(5) > .MuiListItemText-root > .MuiTypography-root > span').click()


})

it('Verify if a user cannot log in with a valid username and an invalid password.', function () {

    cy.visit('https://testvillage.letsventure.com/signin')

    cy.get('#email').type('kirandeshmukhmath@gmail.com', { force: true })
    cy.get('#password').type('Arun21@%', { force: true })
    cy.wait(3000)

    cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
    cy.wait(5000)


})

it('Verify if a user cannot log in with an invalid username and a valid password', function () {

    cy.visit('https://testvillage.letsventure.com/signin')

    cy.get('#email').type('kirandeshmukhmath1@gmail.com', { force: true })
    cy.get('#password').type('Arun11@%', { force: true })
    cy.wait(3000)

    cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
    cy.wait(5000)


})

it('Verify the login page for both, when the field is blank and the Sign-in button is clicked', function () {

    cy.visit('https://testvillage.letsventure.com/signin')

    cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
    cy.wait(5000)

})




























//it('google test', function () {

//cy.visit('https://testvillage.letsventure.com/')
//cy.wait(4000)
//cy.get('.signup').click()
//cy.wait(2000)
//cy.get('.investor-signup-btn').click()
//cy.wait(2000)
//cy.get('.signup-btn').click()
//cy.wait(2000)
//cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').type('Bhooshan')
//cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').type('Kiran')
//cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type('Deshmukhmath')
//cy.get(':nth-child(6) > .edit__profile_form-item').type('https://www.linkedin.com/in/kiran-deshmukhmath-a8ab86193/')
//cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click()

//cy.get('.PhoneInputInput').type('9999999999')
//cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').type('kirandeshmukhmath1@gmail.com')
//cy.get('#react-select-18--value > .Select-placeholder').filter('react-select-6--value-item')
//cy.get('[style="width: 304px; height: 78px;"] > div > iframe', '[type="checkbox"]').check()
//cy.get('#react-select-18--value > .Select-placeholder').select('react-select-6--value-item').should('have.value', 'India')
// cy.get('.gLFyf').type('cypress automation tool{enter}')


//})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
it