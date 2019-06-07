import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digidash';
  sideMenuStatus: boolean;
  selectedIndex: number = null;
  activeMenuNumber:number = 1;

  constructor() {
    this.sideMenuStatus = true;
    this.activeMenuNumber =1
  }
  setIndex(index: number) {
      this.selectedIndex = index;
   }
   public getMenuClass(){
    return "active cust-menu-box";
   }
   public activeMenu(){
    
     return this.activeMenuNumber;
   }
public activateMenu(menuId)   {
  this.activeMenuNumber=menuId;
}
  public openCloseNav() {
    if (this.sideMenuStatus) {
      document.getElementById("mySidenav").style.width = "120px";
      document.getElementById("main").style.marginRight = "250px";
      document.getElementById("main").style.paddingRight = "150px";
      this.sideMenuStatus=false;
    }
    else {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginRight = "0";
      document.getElementById("main").style.paddingRight = "0";

      this.sideMenuStatus=true;
    }
    //  document.getElementById("mySidenav").style.width == "0" ?  "250px" : "0";
    //  document.getElementById("main").style.marginLeft == "0" ?  "250px" : "0";

  }

  public closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

}
