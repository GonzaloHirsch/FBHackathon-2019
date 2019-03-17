import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicRecordsComponent } from './academic-records.component';

const routes: Routes = [
  {
    path:'',
    component:AcademicRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicRecordsRoutingModule { }
