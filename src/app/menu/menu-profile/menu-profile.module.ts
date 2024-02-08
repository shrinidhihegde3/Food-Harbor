import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuProfileComponent } from './menu-profile.component';
import { MenuProfileCreditsComponent } from './menu-profile-credits/menu-profile-credits.component';
import { MenuProfileDonationHistoryComponent } from './menu-profile-donation-history/menu-profile-donation-history.component';
import { MenuProfileMyprofileComponent } from './menu-profile-myprofile/menu-profile-myprofile.component';
import { MenuProfileCreditsModule } from './menu-profile-credits/menu-profile-credits.module';
import { MenuProfileDonationHistoryModule } from './menu-profile-donation-history/menu-profile-donation-history.module';
import { MenuProfileMyprofileModule } from './menu-profile-myprofile/menu-profile-myprofile.module';

@NgModule({
  declarations: [
    MenuProfileComponent,
    MenuProfileCreditsComponent,
    MenuProfileDonationHistoryComponent,
    MenuProfileMyprofileComponent,
  ],
  imports: [
    CommonModule,
    MenuProfileCreditsModule,
    MenuProfileDonationHistoryModule,
    MenuProfileMyprofileModule
  ],
  exports: [
    MenuProfileComponent,
    MenuProfileCreditsComponent,
    MenuProfileDonationHistoryComponent,
    MenuProfileMyprofileComponent,
  ],
})
export class MenuProfileModule {

}
