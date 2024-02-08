import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuProfileRoutingModule } from './menu-profile-routing.module';
import { MenuProfileCreditsComponent } from './menu-profile-credits/menu-profile-credits.component';
import { MenuProfileDonationHistoryComponent } from './menu-profile-donation-history/menu-profile-donation-history.component';
import { MenuProfileMyprofileComponent } from './menu-profile-myprofile/menu-profile-myprofile.component';


@NgModule({
  declarations: [
    MenuProfileCreditsComponent,
    MenuProfileDonationHistoryComponent,
    MenuProfileMyprofileComponent
  ],
  imports: [
    CommonModule,
    MenuProfileRoutingModule
  ]
})
export class MenuProfileModule { }
