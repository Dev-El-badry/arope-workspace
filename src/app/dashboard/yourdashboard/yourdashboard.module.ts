import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourdashboardPageRoutingModule } from './yourdashboard-routing.module';

import { YourdashboardPage } from './yourdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourdashboardPageRoutingModule
  ],
  declarations: [YourdashboardPage]
})
export class YourdashboardPageModule {}
