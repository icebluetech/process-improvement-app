import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './toolkit.routes';
import { Settings, Data } from '../services/data/data'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DialogComponent } from '../shared/dialog/dialog.component';

@NgModule({
  imports: [
    RouterModule.forChild(MODULE_ROUTES),
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [MODULE_COMPONENTS, DialogComponent],
  providers: [Settings, Data]
})

export class ToolKitModule { }
