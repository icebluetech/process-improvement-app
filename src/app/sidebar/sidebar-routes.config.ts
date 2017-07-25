import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'pe-7s-graph' },//0
    { path: 'user', title: 'User profile', menuType: MenuType.LEFT, icon:'pe-7s-user' },//1
    { path: 'innovation', title: 'Innovations', menuType: MenuType.LEFT, icon:'fa fa-flask' },//2
    { path: 'reports', title: 'Reports', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },//3
    { path: 'docs', title: 'Docs', menuType: MenuType.LEFT, icon:'pe-7s-science' },//4
    { path: 'notifications', title: 'Notifications', menuType: MenuType.LEFT, icon:'pe-7s-bell' },//5
    { path: 'settings', title: 'settings', menuType: MenuType.LEFT, icon:'pe-7s-tools' },//6
    { path: 'innovation/rootCause', title: 'Root Cause Analysis', menuType: MenuType.LEFT, icon:'fa fa-flask' },//7
    { path: 'innovation/standardWork', title: 'Standard Work', menuType: MenuType.LEFT, icon:'fa fa-flask' },//8
    { path: 'training', title: 'Training', menuType: MenuType.LEFT, icon:'pe-7s-study' },//9
    { path: 'brainstorm', title: 'Brainstorming', menuType: MenuType.LEFT, icon:'fa fa-flask' },//10
    { path: 'experiment', title: 'Experiments', menuType: MenuType.LEFT, icon:'fa fa-flask' },//11
    { path: 'innovation/results', title: 'Results', menuType: MenuType.LEFT, icon:'fa fa-flask' }//12
    
];
