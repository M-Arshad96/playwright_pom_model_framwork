const {test,expect,}= require('@playwright/test')
const{HomePage} =require('../Pages/HomePage')
const {RegisterPage}=require('../Pages/RegisterPage')
const{TransactionPage}=require('../Pages/TransactionPage')

test.use({
  launchOptions: {
    args: ['--start-maximized'],
  },
  viewport: null, // must be null if you want the browser window to define size
});




test('Register Demo flow ', async ({page})=>{

const homePage = new HomePage(page)
const registerDemo = new RegisterPage(page)
const transaction= new TransactionPage(page)




//Launch the Application

await page.goto('https://vinothqaacademy.com/')


//naviagte To Register Demo
await homePage.navigationToRegisterDemoPage()



//fill the form 

//enter first name

await registerDemo.enterFirstNamevalue('arshad')

//enter last name

await registerDemo.enterLastNameValue('Rasheed')

await registerDemo.selectMaleRadioBtn()

await registerDemo.checkSeleniumWebDriver()

await registerDemo.unCheckTestNG()

await registerDemo.enterStreetAddress('MohNakasa')

await registerDemo.enterAptAddress('Delhi54')

await registerDemo.enterCity('Delhi')

await registerDemo.enterPostalCode('110053')

await registerDemo.selectRegionDropDown('India')


await registerDemo.enterState('uttar pradesh')

await registerDemo.enterEmail('marshad@gmail.com')

await registerDemo.enterDateOfDemo('09/28/2025')

await registerDemo.enterHours('04')

await registerDemo.enterMinuts('20')

await registerDemo.enterPhNo('9999999999')

await registerDemo.enterQuery('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')

await registerDemo.enterExampleValue()

await registerDemo.clickSubmitButton()


await transaction.retriveTranscationNumber()




})