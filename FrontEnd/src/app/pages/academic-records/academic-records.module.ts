import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicRecordsRoutingModule } from './academic-records-routing.module';
import { AcademicRecordsComponent } from './academic-records.component';

@NgModule({
  declarations: [AcademicRecordsComponent],
  imports: [
    CommonModule,
    AcademicRecordsRoutingModule
  ]
})
export class AcademicRecordsModule { }
