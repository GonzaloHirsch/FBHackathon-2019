import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  {
    path : 'profile',
    loadChildren: './pages/profile/profile.module#ProfileModule'
  },
  {
    path : 'search',
    loadChildren: './pages/search/search.module#SearchModule'
  },
  {
    path : 'register',
    loadChildren: './pages/register/register.module#RegisterModule'
  },
  {
    path : 'academicRecords',
    loadChildren: './pages/academic-records/academic-records.module#AcademicRecordsModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
