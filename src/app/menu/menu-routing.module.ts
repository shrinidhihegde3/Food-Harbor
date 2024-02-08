import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuArticleComponent } from './menu-article/menu-article.component';
import { MenuDonationComponent } from './menu-donation/menu-donation.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MenuOrganisationComponent } from './menu-organisation/menu-organisation.component';

const routes: Routes = [

  {
    path: 'article', component: MenuArticleComponent
  },


  {
    path: 'donation', component: MenuDonationComponent
  },


  {
    path: 'home', component: MenuHomeComponent
  },


  {
    path: 'organisation', component: MenuOrganisationComponent
  },


  {
    path: 'profile', loadChildren: () => import('./menu-profile/menu-profile.module').then(m => m.MenuProfileModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
