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
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'searcher',
    loadChildren: './searcher/searcher.module#SearcherModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
     ReactiveFormsModule,
    MatAutocompleteModule,
    AppRoutingModule,BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatRadioModule,
    MatFormFieldModule,
    MatInputModule,MatExpansionModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
