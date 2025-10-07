class MyInfoPage {

    selectorsList() {
        const selectors = {
        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        genericField : ".oxd-input--active",
        submitButton : "[type='submit']",
        genericArrow : ".oxd-select-text",
        countryBox : ".oxd-select-dropdown > :nth-child(27)",
        maritalBox : ".oxd-select-dropdown > :nth-child(3)"


        }

        return selectors
    }

    

    updateMyPersonalDetails(firstName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        
    }

    updateMyEmployeeDetails(employeeId, otherId, driversLicense, driversLicenseData, birthDate){
        
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().genericField).eq(6).clear().click().type(driversLicenseData)
        cy.get(this.selectorsList().genericField).eq(7).clear().click().type(birthDate)
        
    }

    updateCountry(){
        cy.get(this.selectorsList().genericArrow).eq(0).click({force: true})
        cy.get(this.selectorsList().countryBox).click()
        
    }

    updateMarital(){
        cy.get(this.selectorsList().genericArrow).eq(1).click({force: true})
        cy.get(this.selectorsList().maritalBox).click()
    }

    submitButton(){
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('.oxd-toast-close')
    }

}








export default MyInfoPage