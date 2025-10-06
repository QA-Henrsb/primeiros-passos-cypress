import UserData from '../fixtures/users/user-data.json'
describe('Orange HRM  Test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField : ".oxd-input--active",
    submitButton : "[type='submit']"

  }

  

  it.only(' User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(UserData.userSucess.username)
    cy.get(selectorsList.passwordField).type(UserData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Henrique')
    cy.get(selectorsList.lastNameField).clear().type('Biver')
    cy.get(selectorsList.genericField).eq(3).clear().type('333')
    cy.get(selectorsList.genericField).eq(4).clear().type('666')
    cy.get(selectorsList.genericField).eq(5).clear().type('999')
    cy.get(selectorsList.genericField).eq(6).clear().click().type('10-2025-06')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-toast-close')
  })

  it('Login - Failure', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(UserData.userFailure.username)
    cy.get(selectorsList.passwordField).type(UserData.userFailure.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})

