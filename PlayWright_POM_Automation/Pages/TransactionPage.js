const{test,expect}=require('@playwright/test')


exports.TransactionPage=class TransactionPage{

// Constructor
    constructor(page){
this.page=page;

this.transactionNumber=page.locator('#messageContainer')



    }




//Methods
 async retriveTranscationNumber(){

const tNumber=await this.transactionNumber.textContent()

const splitedValue= tNumber.split(':');
const trimNumber=(splitedValue[1].trim());

console.log(trimNumber)

 }



}