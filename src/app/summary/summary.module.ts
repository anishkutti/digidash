import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryHomeComponent } from './summary-home/summary-home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ChartsModule } from 'ng2-charts';
import { SummaryGridComponent } from './summary-grid/summary-grid.component';

import { AgGridModule } from 'ag-grid-angular';


// HttpClient
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [SummaryHomeComponent, SummaryGridComponent],
  imports: [
    FormsModule, CommonModule,
    MatTabsModule,ChartsModule,
    SummaryRoutingModule,
    HttpClientModule,ReactiveFormsModule,
    AgGridModule.withComponents([]),

  ]
})
export class SummaryModule { }
