//5
it('Verify the ‘Forgot Password’ functionality.', function () {

    cy.visit('https://testvillage.letsventure.com/signin')

    // Sign in page will be diplayed

    cy.get('#email').type('kirandeshmukhmath@gmail.com', { force: true })
    cy.get('#password').type('A', { force: true })
    cy.wait(3000)
    cy.get('.btn-align').click({ force: true })
    cy.wait(2000)


})
//6
it('Verify the message if the user is not registered on the platform.', function () {

    cy.visit('https://testvillage.letsventure.com/signin')

    // Sign in page will be diplayed

    cy.get('#email').type('kirandeshmukhmath@gmail.com', { force: true })
    cy.get('#password').type('A', { force: true })
    cy.wait(3000)
    cy.get('.btn-align').click({ force: true })
    //forgot password page is displayed
    cy.get('#email').type('hello@gmail.com', { force: true })
    cy.wait(30000)
    cy.get('.btn').click({ force: true })
    cy.wait(2000)

})

//7
it('Verify the message if the user is registered on the platform but not Approved by the LV admins.', function () {

    cy.visit('https://testvillage.letsventure.com/signin')

    // Sign in page will be diplayed

    cy.get('#email').type('kirandeshmukhmath@gmail.com', { force: true })
    cy.get('#password').type('A', { force: true })
    cy.wait(3000)
    cy.get('.btn-align').click({ force: true })
    //forgot password page is displayed
    cy.get('#email').type('ashavince@gmail.com', { force: true })
    cy.wait(30000)
    cy.get('.btn').click({ force: true })
    cy.wait(2000)

})

//8
it('Verify if after giving valid email the reset password link has to came to the users email id', function () {

    cy.visit('https://testvillage.letsventure.com/signin')

    // Sign in page will be diplayed

    cy.get('#email').type('kirandeshmukhmath@gmail.com', { force: true })
    cy.get('#password').type('A', { force: true })
    cy.wait(3000)
    cy.get('.btn-align').click({ force: true })
    //forgot password page is displayed
    cy.get('#email').type('kirandeshmukhmath@gmail.com', { force: true })
    cy.wait(30000)
    cy.get('.btn').click({ force: true })
    cy.wait(2000)

})

it('Verify if a user can log in with a new password only after he/she has changed the password.', function () {

    cy.visit('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzGpFzsrQdHDTBLxgVkCCZtcbsvf')

    cy.get('#email').type('kirandeshmukhmath@gmail.com', { force: true })
    cy.get('#password').type('Kiran11@%', { force: true })
    cy.wait(3000)

    cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
    cy.wait(5000)
})


it('Verify if a user can log in with a new password only after he/she has changed the password.', function () {

    cy.visit('https://testvillage.letsventure.com/signin')

    cy.get('#email').type('kirandeshmukhmath@gmail.com', { force: true })
    cy.get('#password').type('Kiran11@%', { force: true })
    cy.wait(3000)

    cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
    cy.wait(5000)
})



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})