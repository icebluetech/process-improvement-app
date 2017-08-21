import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'pe-7s-graph' },//0
    { path: 'user', title: 'User profile', menuType: MenuType.LEFT, icon:'pe-7s-user' },//1
    { path: 'innovation', title: 'Projects', menuType: MenuType.LEFT, icon:'fa fa-cube' },//2
    { path: 'reports', title: 'Reports', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },//3
    { path: 'docs', title: 'Docs', menuType: MenuType.LEFT, icon:'pe-7s-science' },//4
    { path: 'notifications', title: 'Notifications', menuType: MenuType.LEFT, icon:'pe-7s-bell' },//5
    { path: 'settings', title: 'settings', menuType: MenuType.LEFT, icon:'pe-7s-tools' },//6
    { path: 'rootcause', title: 'Gap Analysis', menuType: MenuType.LEFT, icon:'fa fa-code-fork' },//7
    { path: 'standardwork', title: 'Standard Work', menuType: MenuType.LEFT, icon:'fa fa-file-text-o' },//8
    { path: 'training', title: 'Training', menuType: MenuType.LEFT, icon:'pe-7s-study' },//9
    { path: 'brainstorm', title: 'Brainstorming', menuType: MenuType.LEFT, icon:'fa fa-lightbulb-o' },//10
    { path: 'experiment', title: 'Experiments', menuType: MenuType.LEFT, icon:'fa fa-flask' },//11
    { path: 'result', title: 'Results', menuType: MenuType.LEFT, icon:'fa fa-gavel' },//12
    { path: 'why', title: 'Why Change', menuType: MenuType.LEFT, icon:'fa fa-question' },//13
    { path: 'current', title: 'Current State', menuType: MenuType.LEFT, icon:'fa fa-area-chart' },//14
    { path: 'future', title: 'Future State', menuType: MenuType.LEFT, icon:'fa fa-line-chart' },//15
    { path: 'gap', title: 'Gap Analaysis', menuType: MenuType.LEFT, icon:'fa fa-cogs' },//16
    { path: 'action', title: 'Action Plan', menuType: MenuType.LEFT, icon:'fa fa-list-alt' },//17
    { path: 'insights', title: 'Insights', menuType: MenuType.LEFT, icon:'fa fa-eye' }//18
    
];
