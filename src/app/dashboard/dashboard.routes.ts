import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';
import { SettingsComponent } from './settings/settings.component';
import { TrainingComponent } from './training/training.component';
import { TrainingCreateComponent } from './training/create/training.create.component';
import { TrainingDetailComponent } from './training/detail/training.detail.component';
import { StandardWorkComponent } from './standardwork/standardwork.component';
import { StandardWorkCreateComponent } from './standardwork/create/standardwork.create.component';
import { StandardWorkDetailComponent } from './standardwork/detail/standardwork.detail.component';
import { InnovationComponent } from './innovation/innovation.component';
import { InnovationCreateComponent } from './innovation/create/innovation.create.component';
import { UserSearchComponent } from './user/search/user.search.component';
import { UserDetailComponent } from './user/detail/user.detail.component';


export const MODULE_ROUTES: Route[] = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'training', component: TrainingComponent },
    { path: 'training/create', component: TrainingCreateComponent },
    { path: 'training/detail', component: TrainingDetailComponent },
    { path: 'standardwork', component: StandardWorkComponent },
    { path: 'standardwork/create', component: StandardWorkCreateComponent },
    { path: 'standardwork/detail', component: StandardWorkDetailComponent },
    { path: 'innovation', component: InnovationComponent },
    { path: 'innovation/create', component: InnovationCreateComponent }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    SettingsComponent,
    TrainingComponent,
    TrainingCreateComponent,
    TrainingDetailComponent,
    StandardWorkComponent,
    StandardWorkCreateComponent,
    StandardWorkDetailComponent,
    InnovationComponent,
    InnovationCreateComponent,
    UserSearchComponent,
    UserDetailComponent
]
