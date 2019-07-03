import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule,MatNativeDateModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { DigiFiltersComponent } from './shared/digi-filters/digi-filters.component';
 import { BackendApiService} from './services/backend-api.service'
 import { HttpClientModule } from '@angular/common/http';

 import { ChartsModule } from 'ng2-charts';
 
const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then(m => m.SummaryModule)
  },
  {
    path: 'analysis',
    loadChildren: () => import('./analysis/analysis.module').then(m => m.AnalysisModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DigiFiltersComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
     ReactiveFormsModule,
     MatDatepickerModule, MatNativeDateModule,
    MatAutocompleteModule,
    AppRoutingModule,BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatRadioModule,
    MatFormFieldModule,
    MatInputModule,MatExpansionModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
