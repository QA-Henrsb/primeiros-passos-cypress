import UserData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import MenuPage from '../pages/menuPage.js'
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()
describe('Orange HRM  Test', () => {

  
  

  it(' User Info Update - Sucess', () => {

    loginPage.acessLoginPage()
    loginPage.loginWithUser(UserData.userSucess.username, UserData.userSucess.password)
    dashboardPage.verifyDashboardPage()
    menuPage.clickMyInfoButton()
    myInfoPage.updateMyPersonalDetails('Henrique', 'Biver')
    myInfoPage.updateMyEmployeeDetails('333','666','999','2025-06-10','1994-20-06')
    myInfoPage.updateCountry()
    myInfoPage.updateMarital()
    myInfoPage.submitButton()
    
    
  })

  it('Login - Failure', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(UserData.userFailure.username, UserData.userFailure.password)
    
  })
})

