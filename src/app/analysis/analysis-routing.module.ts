import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisDashComponent} from './analysis-dash/analysis-dash.component'

const routes: Routes = [
  {
    path: '',
    component: AnalysisDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule { }
