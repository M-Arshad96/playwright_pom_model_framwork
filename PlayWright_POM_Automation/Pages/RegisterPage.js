const {test,expect}= require('@playwright/test')






exports.RegisterPage=class RegisterPage {

  constructor(page) {
    this.page = page;

this.firstName=page.locator("//input[@id='vfb-5']")
this.lastName=page.locator("//input[@id='vfb-7']")
this.MaleRadioBtn =page.locator("//input[@id='vfb-31-1']")
this.SeleniumWebDriver=page.locator("//input[@id='vfb-20-0']")
this.TestNG=page.locator("//input[@id='vfb-20-3']")
this.StreetAddress=page.locator('#vfb-13-address')
this.Aptaddress=page.locator('#vfb-13-address-2')
this.City=page.locator('#vfb-13-city')
this.PostalCode=page.locator('#vfb-13-zip')
this.Region=page.locator('#vfb-13-country')
this.state=page.locator('#vfb-13-state')
this.emailToBeEnter=page.locator('#vfb-14')
this.DateOfDemo=page.locator('#vfb-18')
this.Hours=page.locator('#vfb-16-hour')
this.Minuts=page.locator('#vfb-16-min')
this.PhNo=page.locator('#vfb-19')
this.Query=page.locator('#vfb-23')
this.exampleValueExample=page.locator('//*[contains(text(),"Example: 33")]')
this.InputTextBox=page.locator('#vfb-3')
this.submitButton=page.locator('#vfb-4')


}
//Methods

async enterFirstNamevalue(param){

await this.firstName.fill(param)
}

async enterLastNameValue(param){
await this.lastName.fill(param)

}
async selectMaleRadioBtn(){

  await this.MaleRadioBtn.click()
}

async checkSeleniumWebDriver(){
  await this.SeleniumWebDriver.check()

}

async unCheckTestNG(){
  await this.TestNG.uncheck()
}

async enterStreetAddress(param){

  await this.StreetAddress.fill(param)

}


async enterAptAddress(param){
  await this.Aptaddress.fill(param)
}

async enterCity(param){
  await this.City.fill(param)
}

async enterPostalCode(param){
 await this.PostalCode.fill(param)
}

async selectRegionDropDown(param){


await this.Region.selectOption(param)

await expect(this.Region).toHaveValue(param)
}

async enterState(param){
  await this.state.fill(param)
}

async enterEmail(param){

  await this.emailToBeEnter.fill(param)
}

async enterDateOfDemo(param){

  await this.DateOfDemo.fill(param)
}

async enterHours(param){

  await this.Hours.selectOption(param)
  await expect(this.Hours).toHaveValue(param)
}

async enterMinuts(param){

  await this.Minuts.selectOption(param)
   await expect(this.Minuts).toHaveValue(param)
}


async enterPhNo(param){

  await this.PhNo.fill(param)
}


async enterQuery(param){

  await this.Query.fill(param)



}
async enterExampleValue(){

 
const exampleValue=  await this.exampleValueExample.textContent()

const splitedValue= exampleValue.split(':');
const valueToBeInput=(splitedValue[1].trim());


await this.InputTextBox.fill(valueToBeInput)
console.log(valueToBeInput)


}
async clickSubmitButton(){

  await this.submitButton.click()



}



}







