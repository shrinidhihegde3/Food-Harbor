import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateCardComponent } from './donate-card.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    DonateCardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    DonateCardComponent,
  ]
})
export class DonateCardModule { }
