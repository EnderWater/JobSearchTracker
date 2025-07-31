import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'application-list',
    loadComponent: () => import('./pages/application-list/application-list.page').then( m => m.ApplicationListPage)
  },
    {
    path: '',
    component: LoginComponent
  },
];
