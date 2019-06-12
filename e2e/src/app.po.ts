import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  
  getTitleText() {
    /*browser.wait(function() {
      return element(by.id('menu-option-1')).isPresent();
   }, 5000);
      debugger;*/
     element(by.id('menu-option-1')).click();
     browser.driver.sleep(2000); // wait for the animation
      
      console.log("Here",element.all(by.css('.flex-container')));
      browser.debugger();
      browser.driver.sleep(2000); // wait for the animation

      //return element.all(by.css('.flex-container')).getId();
      console.log(element(by.css('.ag-theme-balham')).getText());
      console.log(element(by.css('.testcls')).getId());
      return element(by.css('.testcls')).getId();
      
     //return 'agGridCustData';
  }
  
}
