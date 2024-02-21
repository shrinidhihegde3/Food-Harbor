import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuProfileCreditsComponent } from './menu-profile-credits/menu-profile-credits.component';
import { MenuProfileDonationHistoryComponent } from './menu-profile-donation-history/menu-profile-donation-history.component';
import { MenuProfileMyprofileComponent } from './menu-profile-myprofile/menu-profile-myprofile.component';
import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  
    {
      path: 'profile/credits' , component: MenuProfileCreditsComponent, canActivate: [AuthGuard]
    },

   {
    path: 'profile/myprofile' , component: MenuProfileMyprofileComponent, canActivate: [AuthGuard]
   },

   {
    path: 'profile/history' , component: MenuProfileDonationHistoryComponent, canActivate: [AuthGuard]
   }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuProfileRoutingModule { }
