import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AgGridModule } from 'ag-grid-angular';
// HttpClient
import { HttpClientModule } from "@angular/common/http";

//import { ChartModule } from 'angular2-highcharts';
//import * as highcharts from 'Highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisDashComponent } from './analysis-dash/analysis-dash.component';

@NgModule({
  declarations: [AnalysisDashComponent],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    FormsModule,
    //  ChartModule.forRoot(highcharts),
    HighchartsChartModule,
    HttpClientModule,
    AgGridModule.withComponents([])

  ]
})
export class AnalysisModule { }
