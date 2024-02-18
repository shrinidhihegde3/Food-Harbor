import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuArticleComponent } from './menu-article/menu-article.component';
import { MenuDonationComponent } from './menu-donation/menu-donation.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MenuOrganisationComponent } from './menu-organisation/menu-organisation.component';
import { MenuProfileModule } from './menu-profile/menu-profile.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    MenuArticleComponent,
    MenuDonationComponent,
    MenuHomeComponent,
    MenuOrganisationComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MenuProfileModule,
    ComponentsModule
  ]
})
export class MenuModule { }
