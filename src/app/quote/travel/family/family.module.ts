import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilyPageRoutingModule } from './family-routing.module';

import { FamilyPage } from './family.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { TravelersPageModule } from './travelers/travelers.module';
import { QuotePageModule } from './quote/quote.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamilyPageRoutingModule,
    SuperTabsModule,
    TravelersPageModule,
    QuotePageModule
  ],
  declarations: [FamilyPage]
})
export class FamilyPageModule {}
