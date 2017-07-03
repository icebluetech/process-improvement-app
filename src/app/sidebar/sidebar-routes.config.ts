import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'pe-7s-graph' },
    { path: 'user', title: 'User profile', menuType: MenuType.LEFT, icon:'pe-7s-user' },
    { path: 'innovation', title: 'Innovations', menuType: MenuType.LEFT, icon:'fa fa-flask' },
    { path: 'reports', title: 'Reports', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    { path: 'docs', title: 'Docs', menuType: MenuType.LEFT, icon:'pe-7s-science' },
    { path: 'notifications', title: 'Notifications', menuType: MenuType.LEFT, icon:'pe-7s-bell' }
    
];
