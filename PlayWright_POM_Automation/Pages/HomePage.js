// pages/HomePage.js
const { test,expect } = require('@playwright/test');

exports.HomePage = class HomePage {


//Constrctor

  constructor(page) {
    this.page = page;
    this.demoSiteLink= page.locator("(//a[contains(text(),'Demo Sites')])[2]")
   // this.practiceAutomation = page.locator("(//a[contains(text(),'Practice Automation')])[2]");
   
   this.practiceAutomation=page.getByText('Practice Automation').nth(1)
  //this.registerationFrom = page.locator('a href="https://vinothqaacademy.com/demo-site/">Registration Form</a');
  this.registerationFrom=page.getByRole('link', { name: 'Registration Form' })

    
  }

  //Methods
  async navigationToRegisterDemoPage(){


    await this.demoSiteLink.hover();
   await this.practiceAutomation.waitFor({ state: 'visible' });
  await this.practiceAutomation.scrollIntoViewIfNeeded();
    await this.practiceAutomation.hover()
     await this.registerationFrom.waitFor({ state: 'visible'});
    await this.registerationFrom.click()
  }
}
