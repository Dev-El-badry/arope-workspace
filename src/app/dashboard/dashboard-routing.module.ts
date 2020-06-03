import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [


  {
    path: 'tabs',
    component: DashboardPage,
    children: [

      {
        path: 'yourdashboard',
        loadChildren: () => import('./yourdashboard/yourdashboard.module').then( m => m.YourdashboardPageModule)
      },
      {
        path: 'quotation',
        loadChildren: () => import('./quotation/quotation.module').then( m => m.QuotationPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard/tabs/yourdashboard',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
