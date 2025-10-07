class DashboardPage {

    selectorsList(){

        const selectors = {

            dashboardGrid: ".orangehrm-dashboard-grid"

        }

        return selectors
    }
    
    
    verifyDashboardPage(){
    cy.location('pathname', { timeout: 10000}).should('eq', '/web/index.php/dashboard/index')
    cy.get(this.selectorsList().dashboardGrid)
}
 
    




}


export default DashboardPage