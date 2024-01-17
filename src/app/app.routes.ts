import { Routes } from '@angular/router';
import { ProjCmpComponent } from './proj-cmp/proj-cmp.component';
import { RpCmpComponent } from './rp-cmp/rp-cmp.component';
import { HomeCmpComponent } from './home-cmp/home-cmp.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeCmpComponent },
  {
    path: 'rre',
    children: [
      // * NOTE: http://localhost:4200/rre/resource-pools
      { path: 'resource-pools', component: RpCmpComponent },
      { path: '', redirectTo: 'projects', pathMatch: 'full' },

      // * NOTE: http://localhost:4200/rre/projects
      { path: 'projects', component: ProjCmpComponent },
      { path: '**', component: RpCmpComponent },
    ],
  },
  { path: '**', component: HomeCmpComponent },
];
