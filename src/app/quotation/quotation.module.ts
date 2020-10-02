import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationRoutingModule } from './quotation-routing.module';
import { ManagementComponent } from './management/management.component';


@NgModule({
  declarations: [ManagementComponent],
  imports: [
    CommonModule,
    QuotationRoutingModule
  ]
})
export class QuotationModule { }
