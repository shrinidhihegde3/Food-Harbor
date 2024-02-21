import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationComponent } from './donation/donation.component';
import { ChatComponent } from './chat/chat.component';
import { ButtonModule } from 'primeng/button';
import { MenuDonationComponent } from './menu-donation.component';
import { DonateCardComponent } from '../components/donate-card/donate-card.component';
import { DonateFormComponent } from './donation/donate-form/donate-form.component';
import { DialogModule } from 'primeng/dialog';
import { ChipsModule } from 'primeng/chips';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { DonateCardModule } from '../components/donate-card/donate-card.module';

@NgModule({
  declarations: [
    DonationComponent,
    ChatComponent,
    MenuDonationComponent,
    DonateFormComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    ChipsModule,
    FormsModule,
    FileUploadModule,
    CalendarModule,
    MessagesModule,
    ReactiveFormsModule,
    DonateCardModule
  ],
  exports: [
    MenuDonationComponent
  ]
})
export class MenuDonationModule { }
