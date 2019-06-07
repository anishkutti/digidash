import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearcherRoutingModule } from './searcher-routing.module';
import { SearchCustomerComponent } from './search-customer/search-customer.component';

@NgModule({
  declarations: [SearchCustomerComponent],
  imports: [
    CommonModule,
    SearcherRoutingModule
  ]
})
export class SearcherModule { }
