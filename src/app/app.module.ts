import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    SidebarModule,
    NavbarModule,
    DashboardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
