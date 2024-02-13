import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuArticleComponent } from './menu-article/menu-article.component';
import { MenuDonationComponent } from './menu-donation/menu-donation.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MenuOrganisationComponent } from './menu-organisation/menu-organisation.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [

  {
    path: 'article', component: MenuArticleComponent, canActivate: [AuthGuard]
  },


  {
    path: 'donation', component: MenuDonationComponent, canActivate: [AuthGuard]
  },


  {
    path: 'home', component: MenuHomeComponent, canActivate: [AuthGuard]
  },


  {
    path: 'organisation', component: MenuOrganisationComponent, canActivate: [AuthGuard]
  },


  {
    path: 'profile', loadChildren: () => import('./menu-profile/menu-profile.module').then(m => m.MenuProfileModule) , canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
