import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToolkitComponent } from './toolkit.component';
import { ActionComponent } from './action/action.component';
import { StateComponent } from './state/state.component';
import { CurrentStateComponent } from './state/current/current.component';
import { FutureStateComponent } from './state/future/future.component';
import { AnalysisComponent } from './analysis/analysis.component';


export const MODULE_ROUTES: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'toolkit/:id', component: HomeComponent }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    ToolkitComponent,
    ActionComponent,
    StateComponent,
    CurrentStateComponent,
    FutureStateComponent,
    AnalysisComponent
]
