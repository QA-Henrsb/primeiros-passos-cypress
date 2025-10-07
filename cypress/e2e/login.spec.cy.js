import LoginPage from '../pages/loginPage.js'
import UserData from '../fixtures/users/user-data.json'
import DashboardPage from '../pages/dashboardPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Login Orange HRM  Test', () => {

       
  it('Login - Failure', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(UserData.userFailure.username, UserData.userFailure.password)
    loginPage.checkAcessInvalid()
  })

  it('Login - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(UserData.userSucess.username, UserData.userSucess.password)
    dashboardPage.verifyDashboardPage()
  })
})

