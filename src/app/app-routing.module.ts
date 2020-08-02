
import { Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule)
  }]},
  {
    path: '**',
    redirectTo: 'User'
  }
];
