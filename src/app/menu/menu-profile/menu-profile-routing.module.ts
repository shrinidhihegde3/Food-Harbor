import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuProfileCreditsComponent } from './menu-profile-credits/menu-profile-credits.component';
import { MenuProfileDonationHistoryComponent } from './menu-profile-donation-history/menu-profile-donation-history.component';
import { MenuProfileMyprofileComponent } from './menu-profile-myprofile/menu-profile-myprofile.component';

const routes: Routes = [
  
    {
      path: 'credits' , component: MenuProfileCreditsComponent
    },

   {
    path: 'profile' , component: MenuProfileMyprofileComponent
   },

   {
    path: 'history' , component: MenuProfileDonationHistoryComponent
   }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuProfileRoutingModule { }
