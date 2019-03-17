import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [

  {
    path:'',
    component: SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
