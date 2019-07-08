import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-summary-grid',
  templateUrl: './summary-grid.component.html',
  styleUrls: ['./summary-grid.component.css']
})
export class SummaryGridComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData: any;
  public searchValue: string;
  private popupParent;

  ngOnInit() {

 }
  constructor(private http: HttpClient) {
    this.popupParent = document.body;    
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        sort: "desc",
        chartDataType: "category"
      },
      {
        headerName: "Age",
        field: "age",
        width: 90,
        chartDataType: "category"
      },
      {
        headerName: "Country",
        field: "country",
        width: 120,
        chartDataType: "category"
      },
      {
        headerName: "Year",
        field: "year",
        width: 90,
        unSortIcon: true,
        chartDataType: "series"
      },
      {
        headerName: "Date",
        field: "date",
        width: 110,
        comparator: dateComparator,
        chartDataType: "series"
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110,
        chartDataType: "series"
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 100,
        chartDataType: "series"
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100,
        chartDataType: "series"
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100,
        chartDataType: "series"
      },
      {
        headerName: "Total",
        field: "total",
        width: 100,
        chartDataType: "series"
      }
    ];
    this.defaultColDef = { sortable: true };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }
  quickSearch() {
    this.gridApi.setQuickFilter(this.searchValue);
  }
}

function dateComparator(date1, date2) {
  var date1Number = monthToComparableNumber(date1);
  var date2Number = monthToComparableNumber(date2);
  if (date1Number === null && date2Number === null) {
    return 0;
  }
  if (date1Number === null) {
    return -1;
  }
  if (date2Number === null) {
    return 1;
  }
  return date1Number - date2Number;
}
function monthToComparableNumber(date) {
  if (date === undefined || date === null || date.length !== 10) {
    return null;
  }
  var yearNumber = date.substring(6, 10);
  var monthNumber = date.substring(3, 5);
  var dayNumber = date.substring(0, 2);
  var result = yearNumber * 10000 + monthNumber * 100 + dayNumber;
  return result;
}