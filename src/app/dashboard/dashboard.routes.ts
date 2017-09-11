import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';
import { SettingsComponent } from './settings/settings.component';
import { DocsComponent } from './docs/docs.component';
import { TrainingComponent } from './training/training.component';
import { TrainingCreateComponent } from './training/create/training.create.component';
import { TrainingDetailComponent } from './training/detail/training.detail.component';
import { StandardWorkComponent } from './standardwork/standardwork.component';
import { StandardWorkCreateComponent } from './standardwork/create/standardwork.create.component';
import { StandardWorkDetailComponent } from './standardwork/detail/standardwork.detail.component';
import { RootCauseComponent } from './rootcause/rootcause.component';
import { RootCauseCreateComponent } from './rootcause/create/rootcause.create.component';
import { RootCauseDetailComponent } from './rootcause/detail/rootcause.detail.component';
import { ResultComponent } from './result/result.component';
import { ResultCreateComponent } from './result/create/result.create.component';
import { ResultDetailComponent } from './result/detail/result.detail.component';


export const MODULE_ROUTES: Route[] = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'docs', component: DocsComponent },
    { path: 'training', component: TrainingComponent },
    { path: 'training/create', component: TrainingCreateComponent },
    { path: 'training/detail', component: TrainingDetailComponent },
    { path: 'standardwork', component: StandardWorkComponent },
    { path: 'standardwork/create', component: StandardWorkCreateComponent },
    { path: 'standardwork/detail', component: StandardWorkDetailComponent },
    { path: 'rootcause', component: RootCauseComponent },
    { path: 'rootcause/create', component: RootCauseCreateComponent },
    { path: 'rootcause/detail', component: RootCauseDetailComponent },
    { path: 'result', component: ResultComponent },
    { path: 'result/create', component: ResultCreateComponent },
    { path: 'result/detail', component: ResultDetailComponent },
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    SettingsComponent,
    DocsComponent,
    TrainingComponent,
    TrainingCreateComponent,
    TrainingDetailComponent,
    StandardWorkComponent,
    StandardWorkCreateComponent,
    StandardWorkDetailComponent,
    RootCauseComponent,
    RootCauseCreateComponent,
    RootCauseDetailComponent,
    ResultComponent,
    ResultCreateComponent,
    ResultDetailComponent
]
