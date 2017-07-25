import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { InnovationComponent } from './innovation/innovation.component';
import { InnovationCreateComponent } from './innovation/create/innovation.create.component';
import { InnovationDetailComponent } from './innovation/detail/innovation.detail.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';
import { SettingsComponent } from './settings/settings.component';
import { DocsComponent } from './docs/docs.component';
import { TrainingComponent } from './training/training.component';
import { BrainstormComponent } from './brainstorm/brainstorm.component';
import { BrainstormCreateComponent } from './brainstorm/create/brainstorm.create.component';
import { BrainstormDetailComponent } from './brainstorm/detail/brainstorm.detail.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { ExperimentCreateComponent } from './experiment/create/experiment.create.component';
import { ExperimentDetailComponent } from './experiment/detail/experiment.detail.component';
import { StandardWorkComponent } from './standardwork/standardwork.component';
import { StandardWorkCreateComponent } from './standardwork/create/standardwork.create.component';
import { StandardWorkDetailComponent } from './standardwork/detail/standardwork.detail.component';


export const MODULE_ROUTES: Route[] = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },
    { path: 'innovation', component: InnovationComponent },
    { path: 'innovation/create', component: InnovationCreateComponent },
    { path: 'innovation/list', component: InnovationComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'docs', component: DocsComponent },
    { path: 'training', component: TrainingComponent },
    { path: 'innovation/detail/:id', component: InnovationDetailComponent },
    { path: 'brainstorm', component: BrainstormComponent },
    { path: 'brainstorm/create', component: BrainstormCreateComponent },
    { path: 'brainstorm/detail', component: BrainstormDetailComponent },
    { path: 'experiment', component: ExperimentComponent },
    { path: 'experiment/create', component: ExperimentCreateComponent },
    { path: 'experiment/detail', component: ExperimentDetailComponent },
    { path: 'standardwork', component: StandardWorkComponent },
    { path: 'standardwork/create', component: StandardWorkCreateComponent },
    { path: 'standardwork/detail', component: StandardWorkDetailComponent },
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    InnovationComponent,
    SettingsComponent,
    InnovationCreateComponent,
    DocsComponent,
    TrainingComponent,
    InnovationDetailComponent,
    BrainstormComponent,
    BrainstormCreateComponent,
    BrainstormDetailComponent,
    ExperimentComponent,
    ExperimentCreateComponent,
    ExperimentDetailComponent,
    StandardWorkComponent,
    StandardWorkCreateComponent,
    StandardWorkDetailComponent
]
