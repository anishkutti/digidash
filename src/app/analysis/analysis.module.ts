import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisDashComponent } from './analysis-dash/analysis-dash.component';

@NgModule({
  declarations: [AnalysisDashComponent],
  imports: [
    CommonModule,
    AnalysisRoutingModule
  ]
})
export class AnalysisModule { }
