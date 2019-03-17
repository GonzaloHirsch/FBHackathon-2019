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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShareComponent,
    NavComponent,
    PillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    ScrollDispatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
