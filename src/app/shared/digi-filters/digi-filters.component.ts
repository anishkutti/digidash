import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-digi-filters',
  templateUrl: './digi-filters.component.html',
  styleUrls: ['./digi-filters.component.css']
})
export class DigiFiltersComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  makeControl = new FormControl();
  modelControl = new FormControl();
  submodelControl = new FormControl();

  makeList: string[] = ['Apple', 'Microsoft', 'Google', 'Amazon', 'Oracle', 'IBM', 'Morgan Stanley', 'JP Morgan', 'Citi'];
  modelList: string[] = ['USA', 'Canada', 'Mexico', 'Bahamas'];
  submodelList: string[] = ['Ford', 'Tesla', 'Honda', 'Toyota', 'Dodge', 'Lincoln', 'Jeep', 'Chevrolet', 'Chrysler'];

  makeOptions: Observable<string[]>;
  modelOptions: Observable<string[]>;
  submodelOptions: Observable<string[]>;

  custDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor() { }

  ngOnInit() {
    this.subscribeControls();
  }

  private _filter(value: string, ctrl: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(ctrl);
    console.log(filterValue);
    switch (ctrl) {
      case 'make': {
        console.log(this.makeList);
        return this.makeList.filter(option => option.toLowerCase().includes(filterValue));
        break;
      }
      case 'model': {
        console.log(this.modelList);
        return this.modelList.filter(option => option.toLowerCase().includes(filterValue));
        break;
      }
      case 'submodel': {
        return this.submodelList.filter(option => option.toLowerCase().includes(filterValue));
        break;
      }
      default: {
        //statements; 
        break;
      }
    }


  }

  public subscribeControls() {

    this.makeOptions = this.makeControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value, 'make'))
      );

      this.modelOptions = this.modelControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value, 'model'))
      );

      this.submodelOptions = this.submodelControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value, 'submodel'))
      );

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value,''))
      );

  }
}
