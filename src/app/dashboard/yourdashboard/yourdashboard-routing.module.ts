import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourdashboardPage } from './yourdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: YourdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourdashboardPageRoutingModule {}
