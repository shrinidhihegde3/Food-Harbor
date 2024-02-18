import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuDonationRoutingModule } from './menu-donation-routing.module';
import { DonationComponent } from './donation/donation.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    DonationComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    MenuDonationRoutingModule
  ]
})
export class MenuDonationModule { }
