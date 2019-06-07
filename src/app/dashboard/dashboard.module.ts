import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AgGridModule } from 'ag-grid-angular';

import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartModule.forRoot(highcharts),
    AgGridModule.withComponents([])    
  ]
})
export class DashboardModule { }
