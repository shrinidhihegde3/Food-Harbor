import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MenuProfileModule } from './menu-profile/menu-profile.module';
import { ComponentsModule } from './components/components.module';
import { MenuDonationModule } from './menu-donation/menu-donation.module';
import { MenuArticleModule } from './menu-article/menu-article.module';
import { MenuOrganisationModule } from './menu-organisation/menu-organisation.module';


@NgModule({
  declarations: [
    MenuHomeComponent,
    
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MenuProfileModule,
    ComponentsModule,
    MenuDonationModule,
    MenuArticleModule,
    MenuOrganisationModule
  ]
})
export class MenuModule { }
