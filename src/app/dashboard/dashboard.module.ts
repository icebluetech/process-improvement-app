import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { Settings, Data } from '../services/data/data'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolKitModule } from '../toolkit/toolkit.module';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ToolKitModule
    ],
    declarations: [MODULE_COMPONENTS],
    providers: [Settings, Data]
})

export class DashboardModule { }
