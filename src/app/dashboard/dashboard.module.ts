import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AgGridModule } from 'ag-grid-angular';
// HttpClient
import { HttpClientModule } from "@angular/common/http";

//import { ChartModule } from 'angular2-highcharts';
//import * as highcharts from 'Highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular2-highcharts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { RiskComponent } from './risk/risk.component';

@NgModule({
  declarations: [HomeComponent, RiskComponent],
  imports: [
    
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
  //  ChartModule.forRoot(highcharts),
   HighchartsChartModule,
   HttpClientModule,
    AgGridModule.withComponents([])    
  ]
})
export class DashboardModule { }
