import { Component,OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'digidash';
  private sideMenuStatus: boolean;
  private showFilterStatus: boolean;
  selectedIndex: number = null;
  activeMenuNumber: number;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  panelOpenState = false;
  
  constructor() {
    this.sideMenuStatus = true;
    this.showFilterStatus = true;
    //this.activeMenuNumber =0
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  setIndex(index: number) {
    this.selectedIndex = index;
  }
  public getMenuClass() {
    return "active cust-menu-box";
  }
  public activeMenu() {

    return this.activeMenuNumber;
  }
  public activateMenu(menuId) {
    this.activeMenuNumber = menuId;
  }
  public openCloseNav() {
    if (this.sideMenuStatus) {
      document.getElementById("mySidenav").style.width = "120px";
      //document.getElementById("main").style.marginRight = "122px";
      document.getElementById("mySidenav").style.visibility = "";
      this.sideMenuStatus = false;
    }
    else {
      document.getElementById("mySidenav").style.width = "0px";
      //document.getElementById("main").style.marginRight = "50px";
      document.getElementById("main").style.paddingRight = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("main").style.paddingLeft = "0";
      document.getElementById("mySidenav").style.visibility = "hidden";

      this.sideMenuStatus = true;
    }

  }

  public mouseLeave() {
    this.sideMenuStatus = false;
    this.openCloseNav();
    //document.getElementById("mySidenav").style.visibility="hidden";
  }

  public mouseEnter(event) {
    console.log(event);
    this.sideMenuStatus = true;
    this.openCloseNav();
  }

  public showFilter() {

    if (this.showFilterStatus) {
      document.getElementById("filterBox").style.width = "180px";
      document.getElementById("main").style.marginRight = "170px";
      document.getElementById("filterBox").style.visibility = "";
      this.showFilterStatus = false;
    }
    else {
      document.getElementById("filterBox").style.width = "0px";
      document.getElementById("main").style.marginRight = "0px";
      document.getElementById("main").style.paddingRight = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("main").style.paddingLeft = "0";
      document.getElementById("filterBox").style.visibility = "hidden";

      this.showFilterStatus = true;
    }

  }
}
