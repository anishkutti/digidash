import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import AccessibilityModule from 'highcharts/modules/accessibility';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  chartOptions: any;
  title = 'app';
  highcharts: any;
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  ChartCallbackFunction: string;

  //chartCallback: any;null; //function (chart) { return true; } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private rowData;
  private components;
  private defaultColDef;
  /*
  
  columnDefs = [
      {headerName: 'Make', field: 'make' },
      {headerName: 'Model', field: 'model' },
      {headerName: 'Price', field: 'price'}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
*/
  chartCallback() {
    console.log("in callback");
  }


  constructor() {
    this.highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: "spline"
      },
      title: {
        text: "Monthly Average Temperature"
      },
      subtitle: {
        text: "Source: WorldClimate.com"
      },
      xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {
        title: {
          text: "Temperature °C"
        }
      },
      tooltip: {
        valueSuffix: " °C"
      },
      series: [
        {
          name: 'Tokyo',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        },
        {
          name: 'New York',
          data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        },
        {
          name: 'Berlin',
          data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        },
        {
          name: 'London',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }
      ]
    };
    // ag grid
    this.columnDefs = [
      { field: "localTime" },
      {
        field: "show",
        cellRenderer: "showCellRenderer",
        rowSpan: function (params) {
          if (params.data.show) {
            return 4;
          } else {
            return 1;
          }
        },
        cellClassRules: { "show-cell": "value !== undefined" },
        width: 200
      },
      { field: "a" },
      { field: "b" },
      { field: "c" },
      { field: "d" },
      { field: "e" }
    ];
    this.rowData = [
      {
        localTime: "5:00am",
        show: {
          name: "Wake Up Dublin",
          presenter: "Andrew Connell"
        },
        a: 0.231,
        b: 0.523,
        c: 0.423,
        d: 0.527,
        e: 0.342
      },
      {
        localTime: "5:15am",
        a: 0.423,
        b: 0.452,
        c: 0.523,
        d: 0.543,
        e: 0.452
      },
      {
        localTime: "5:30am",
        a: 0.537,
        b: 0.246,
        c: 0.426,
        d: 0.421,
        e: 0.523
      },
      {
        localTime: "5:45am",
        a: 0.893,
        b: 0.083,
        c: 0.532,
        d: 0.983,
        e: 0.543
      },
      {
        localTime: "6:00am",
        show: {
          name: "Pure Back In The Day",
          presenter: "Kevin Flanagan"
        },
        a: 0.231,
        b: 0.523,
        c: 0.423,
        d: 0.527,
        e: 0.342
      },
      {
        localTime: "6:15am",
        a: 0.423,
        b: 0.452,
        c: 0.523,
        d: 0.543,
        e: 0.452
      },
      {
        localTime: "6:30am",
        a: 0.537,
        b: 0.246,
        c: 0.426,
        d: 0.421,
        e: 0.523
      },
      {
        localTime: "6:45am",
        a: 0.893,
        b: 0.083,
        c: 0.532,
        d: 0.983,
        e: 0.543
      },
      {
        localTime: "7:00am",
        show: {
          name: "The Queens Breakfast",
          presenter: "Tony Smith"
        },
        a: 0.231,
        b: 0.523,
        c: 0.423,
        d: 0.527,
        e: 0.342
      },
      {
        localTime: "7:15am",
        a: 0.423,
        b: 0.452,
        c: 0.523,
        d: 0.543,
        e: 0.452
      },
      {
        localTime: "7:30am",
        a: 0.537,
        b: 0.246,
        c: 0.426,
        d: 0.421,
        e: 0.523
      },
      {
        localTime: "7:45am",
        a: 0.893,
        b: 0.083,
        c: 0.532,
        d: 0.983,
        e: 0.543
      },
      {
        localTime: "8:00am",
        show: {
          name: "Cosmetic Surgery",
          presenter: "Niall Crosby"
        },
        a: 0.231,
        b: 0.523,
        c: 0.423,
        d: 0.527,
        e: 0.342
      },
      {
        localTime: "8:15am",
        a: 0.423,
        b: 0.452,
        c: 0.523,
        d: 0.543,
        e: 0.452
      },
      {
        localTime: "8:30am",
        a: 0.537,
        b: 0.246,
        c: 0.426,
        d: 0.421,
        e: 0.523
      },
      {
        localTime: "8:45am",
        a: 0.893,
        b: 0.083,
        c: 0.532,
        d: 0.983,
        e: 0.543
      },
      {
        localTime: "8:00am",
        show: {
          name: "Brickfield Park Sessions",
          presenter: "Bricker McGee"
        },
        a: 0.231,
        b: 0.523,
        c: 0.423,
        d: 0.527,
        e: 0.342
      },
      {
        localTime: "8:15am",
        a: 0.423,
        b: 0.452,
        c: 0.523,
        d: 0.543,
        e: 0.452
      },
      {
        localTime: "8:30am",
        a: 0.537,
        b: 0.246,
        c: 0.426,
        d: 0.421,
        e: 0.523
      },
      {
        localTime: "8:45am",
        a: 0.893,
        b: 0.083,
        c: 0.532,
        d: 0.983,
        e: 0.543
      }
    ];
    this.components = { showCellRenderer: createShowCellRenderer() };
    this.defaultColDef = {
      resizable: true,
      width: 100
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  ngOnInit() {
  }
}

function createShowCellRenderer() {
  function ShowCellRenderer() { }
  ShowCellRenderer.prototype.init = function (params) {
    var cellBlank = !params.value;
    if (cellBlank) {
      return null;
    }
    this.ui = document.createElement("div");
    this.ui.innerHTML =
      '<div class="show-name">' +
      params.value.name +
      "" +
      "</div>" +
      '<div class="show-presenter">' +
      params.value.presenter +
      "</div>";
  };
  ShowCellRenderer.prototype.getGui = function () {
    return this.ui;
  };
  return ShowCellRenderer;
}
function ShowCellRenderer(){}

ShowCellRenderer.prototype.init = function(params) {
    var cellBlank = !params.value;
    if (cellBlank) { return null; }

    this.ui = document.createElement('div');
    this.ui.innerHTML =
        '<div class="show-name">'
            +params.value.name+'' +
        '</div>' +
        '<div class="show-presenter">'
            +params.value.presenter +
        '</div>';
};

ShowCellRenderer.prototype.getGui = function() {
    return this.ui;
};
