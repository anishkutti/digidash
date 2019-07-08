import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import AccessibilityModule from 'highcharts/modules/accessibility';
import { portfolioTypeList } from '../../model/portfolioTypeList';
import { BackendApiService } from '../../services/backend-api.service'
import { EventRaiserService } from '../../services/event-raiser.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  selectedPortfolio: portfolioTypeList = new portfolioTypeList(1, 'My Bookmarked');
  portfolioList = [
    new portfolioTypeList(1, 'My Bookmarked'),
    new portfolioTypeList(2, 'Recently Viewed'),
    new portfolioTypeList(3, 'Team Viewed'),
    new portfolioTypeList(4, 'Recommended (AI)')
  ];

  chartOptions: any;
  chartOptions2: any;
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
  private rowSelection;
  

public  displayData(error, data, ctx) {
    let s=parent;
console.log(s);
    console.log('Data Received', data);
    
    if (error) {
      console.error(error);
      return;
    }
    ctx.chartOptions = data;
    //this.chartOptions = data;
    //this.chartOptions2= data;
  }
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

  chartOptions22: any;
  sayMyName:any;
  constructor(private backendApiService: BackendApiService, private eventRaiser: EventRaiserService) {
    
    this.highcharts = Highcharts;
    this.rowSelection = "single";
    this.chartOptions = {
      chart: {
        zoomType: 'xy'
      },
      title: {
        text: 'Average Monthly Temperature and Rainfall in Tokyo'
      },
      subtitle: {
        text: 'Source: WorldClimate.com'
      },
      xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
      }],
      yAxis: [{ // Primary yAxis
        labels: {
          format: '{value}°C',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        title: {
          text: 'Temperature',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        }
      }, { // Secondary yAxis
        title: {
          text: 'Rainfall',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        labels: {
          format: '{value} mm',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        opposite: true
      }],
      tooltip: {
        shared: true
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || // theme
          'rgba(255,255,255,0.25)'
      },
      series: [{
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
          valueSuffix: ' mm'
        }

      }, {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
          valueSuffix: '°C'
        }
      }]
    };

    this.chartOptions22 = {
      chart: {
        type: "spline"
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
    this.chartOptions2 = {
      chart: {
        type: "spline"
      },
      xAxis: {
        categories: ["Aan", "Feb", "Mar", "Apr", "May", "Jun",
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
          data: [3.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        },
        {
          name: 'New York',
          data: [-0.3, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        },
        {
          name: 'Berlin',
          data: [-0.6, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        },
        {
          name: 'London',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }
      ]
    };

    // ag grid
    this.columnDefs = [
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
        a: 0.423,
        b: 0.452,
        c: 0.523,
        d: 0.543,
        e: 0.452
      },
      {
        a: 0.537,
        b: 0.246,
        c: 0.426,
        d: 0.421,
        e: 0.523
      },
      {
        a: 0.893,
        b: 0.083,
        c: 0.532,
        d: 0.983,
        e: 0.543
      },
      {
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
        a: 0.423,
        b: 0.452,
        c: 0.523,
        d: 0.543,
        e: 0.452
      },
      {
        a: 0.537,
        b: 0.246,
        c: 0.426,
        d: 0.421,
        e: 0.523
      },
      {
        a: 0.893,
        b: 0.083,
        c: 0.532,
        d: 0.983,
        e: 0.543
      },
      {
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
        a: 0.423,
        b: 0.452,
        c: 0.523,
        d: 0.543,
        e: 0.452
      },
      {
        a: 0.537,
        b: 0.246,
        c: 0.426,
        d: 0.421,
        e: 0.523
      },
      {
        a: 0.893,
        b: 0.083,
        c: 0.532,
        d: 0.983,
        e: 0.543
      },
      {
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
        a: 0.423,
        b: 0.452,
        c: 0.523,
        d: 0.543,
        e: 0.452
      },
      {
        a: 0.537,
        b: 0.246,
        c: 0.426,
        d: 0.421,
        e: 0.523
      },
      {
        a: 0.893,
        b: 0.083,
        c: 0.532,
        d: 0.983,
        e: 0.543
      },
      {
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
        a: 0.423,
        b: 0.452,
        c: 0.523,
        d: 0.543,
        e: 0.452
      },
      {
        a: 0.537,
        b: 0.246,
        c: 0.426,
        d: 0.421,
        e: 0.523
      },
      {
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
    this.gridApi.selectIndex(0, false, false);
  }

  // ag-grid functions

  onSelectionChanged() {
    console.log('here2');
    this.getData();
    //this.chartOptions = this.chartOptions2;
    //this.highcharts.redraw();

    var selectedRows = this.gridApi.getSelectedRows();
    var selectedRowsString = "";
    selectedRows.forEach(function (selectedRow, index) {
      if (index !== 0) {
        selectedRowsString += ", ";
      }
      selectedRowsString += selectedRow.athlete;
    });
    //document.querySelector("#selectedRows").innerHTML = selectedRowsString;
  }


  getData() {
    //this.sayMyName = this.sayMyName.bind(this);

    this.backendApiService.getChartData(this.displayData, this);
    this.eventRaiser.triggerEvent('CLIENT_CHANGED', 'anish');
  }
  ngOnInit() {
    
    this.eventRaiser.eventClientTChange.subscribe(message => {
      console.log(message);
    });
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
function ShowCellRenderer() { }

ShowCellRenderer.prototype.init = function (params) {
  var cellBlank = !params.value;
  if (cellBlank) { return null; }

  this.ui = document.createElement('div');
  this.ui.innerHTML =
    '<div class="show-name">'
    + params.value.name + '' +
    '</div>' +
    '<div class="show-presenter">'
    + params.value.presenter +
    '</div>';
};

ShowCellRenderer.prototype.getGui = function () {
  return this.ui;
};
