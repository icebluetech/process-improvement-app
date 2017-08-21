import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'pe-7s-graph' },//0
    { path: 'user', title: 'User profile', menuType: MenuType.LEFT, icon:'pe-7s-user' },//1
    { path: 'innovation', title: 'Projects', menuType: MenuType.LEFT, icon:'fa fa-cube' },//2
    { path: 'reports', title: 'Reports', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },//3
    { path: 'docs', title: 'Docs', menuType: MenuType.LEFT, icon:'pe-7s-science' },//4
    { path: 'notifications', title: 'Notifications', menuType: MenuType.LEFT, icon:'pe-7s-bell' },//5
    { path: 'settings', title: 'settings', menuType: MenuType.LEFT, icon:'pe-7s-tools' },//6
    { path: 'rootcause', title: 'Gap Analysis', menuType: MenuType.LEFT, icon:'fa fa-line-chart' },//7
    { path: 'standardwork', title: 'Standard Work', menuType: MenuType.LEFT, icon:'fa fa-file-text-o' },//8
    { path: 'training', title: 'Training', menuType: MenuType.LEFT, icon:'pe-7s-study' },//9
    { path: 'brainstorm', title: 'Brainstorming', menuType: MenuType.LEFT, icon:'fa fa-lightbulb-o' },//10
    { path: 'experiment', title: 'Solution Approach', menuType: MenuType.LEFT, icon:'fa fa-flask' },//11
    { path: 'confirmed', title: 'Confirmed State', menuType: MenuType.LEFT, icon:'fa fa-gavel' },//12
    { path: 'reason', title: 'Reason for Action', menuType: MenuType.LEFT, icon:'fa fa-bullhorn' },//13
    { path: 'initial', title: 'Initial State', menuType: MenuType.LEFT, icon:'fa fa-bicycle' },//14
    { path: 'target', title: 'Target State', menuType: MenuType.LEFT, icon:'fa fa-rocket' },//15
    { path: 'gap', title: 'Gap Analaysis', menuType: MenuType.LEFT, icon:'fa fa-cogs' },//16
    { path: 'action', title: 'Completion Plan', menuType: MenuType.LEFT, icon:'fa fa-list-alt' },//17
    { path: 'insights', title: 'Insights', menuType: MenuType.LEFT, icon:'fa fa-eye' },//18
    { path: 'inno', title: 'Innovations', menuType: MenuType.LEFT, icon:'fa fa-bolt' }//18
    
];
