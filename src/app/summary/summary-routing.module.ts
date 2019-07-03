import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SummaryHomeComponent} from './summary-home/summary-home.component'

const routes: Routes = [
  {
    path: '',
    component: SummaryHomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
