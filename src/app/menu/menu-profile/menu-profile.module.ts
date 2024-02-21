import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuProfileRoutingModule } from './menu-profile-routing.module';
import { MenuProfileCreditsComponent } from './menu-profile-credits/menu-profile-credits.component';
import { MenuProfileDonationHistoryComponent } from './menu-profile-donation-history/menu-profile-donation-history.component';
import { MenuProfileMyprofileComponent } from './menu-profile-myprofile/menu-profile-myprofile.component';
import { ButtonModule } from 'primeng/button';
import { DonateCardModule } from '../components/donate-card/donate-card.module';
// import { MenuHeaderComponent } from './menu-header/menu-header.component';


@NgModule({
  declarations: [
    MenuProfileCreditsComponent,
    MenuProfileDonationHistoryComponent,
    MenuProfileMyprofileComponent,
    // MenuHeaderComponent
  ],
  imports: [
    CommonModule,
    MenuProfileRoutingModule,
    ButtonModule,
    DonateCardModule
  ]
})
export class MenuProfileModule { }
