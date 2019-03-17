import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { ShareComponent } from './share/share.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavComponent } from './utils/nav/nav.component';
import { PillsComponent } from './utils/pills/pills.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material';
import { AcademicRecordsComponent } from './pages/academic-records/academic-records.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import Web3 from 'web3';
import { CourseDetailComponent } from './pages/search/course-detail/course-detail.component';

// Create an Injection Token with web3 inside
export const WEB3 = new InjectionToken<Web3>('web3');



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShareComponent,
    NavComponent,
    PillsComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    ScrollDispatchModule
  ],
  providers: [{
    provide: WEB3,
    useFactory: () => new Web3(Web3.givenProvider || "ws://localhost:8546"),
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
