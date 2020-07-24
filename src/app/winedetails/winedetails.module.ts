import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinedetailsPageRoutingModule } from './winedetails-routing.module';

import { WinedetailsPage } from './winedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinedetailsPageRoutingModule
  ],
  declarations: [WinedetailsPage]
})
export class WinedetailsPageModule {}
