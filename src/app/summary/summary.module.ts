import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryHomeComponent } from './summary-home/summary-home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [SummaryHomeComponent],
  imports: [
    CommonModule,
    MatTabsModule,ChartsModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
