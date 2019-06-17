
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData;

  constructor(private http: HttpClient) {
    this.rowData = [
      { Portfolio: 'Mango Inc',Percentage: 23,risk: 'Critical',year: 2008,date: '24/08/2008',sport: 'Swimming',gold: 8,silver: 0,bronze: 0,total: 8	},
      {Portfolio: 'Aqua Really Inc',Percentage: 19,risk: 'Critical',year: 2004,date: '29/08/2004',sport: 'Swimming',gold: 6,silver: 0,bronze: 2,total: 8	},
      {Portfolio: 'Mango Inc',Percentage: 27,risk: 'Critical',year: 2012,date: '12/08/2012',sport: 'Swimming',gold: 4,silver: 2,bronze: 0,total: 6	},
      {Portfolio: 'Amazing Inc',Percentage: 25,risk: 'Critical',year: 2008,date: '24/08/2008',sport: 'Swimming',gold: 1,silver: 2,bronze: 3,total: 6	},
      {Portfolio: 'TT Mobile ',Percentage: 24,risk: 'High',year: 2000,date: '01/10/2000',sport: 'Gymnastics',gold: 2,silver: 1,bronze: 3,total: 6	},
      {Portfolio: 'Colgating',Percentage: 24,risk: 'Medium',year: 2012,date: '12/08/2012',sport: 'Swimming',gold: 1,silver: 3,bronze: 1,total: 5	}
    ]
    this.columnDefs = [
      {
        field: "Portfolio",
        rowDrag: true
      },
      { field: "risk" },
      { field: "year" },
      { field: "date" },
      { field: "sport" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" }
    ];
    this.defaultColDef = {
      width: 150,
      sortable: true,
      filter: true
    };
  }

  onGridReady(params) {
/*    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packPercentages/ag-grid-docs/src/olympicWinners.json")
      .subscribe(data => {
        //this.rowData = data;
        console.log(this.rowData);
      });
      */
  }

  ngOnInit() {
    console.log("in nginit");
  }

}
