import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { GeneralHomeComponent } from './general-home/general-home.component';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    GeneralHomeComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ImageModule,
    CardModule
  ],
  exports: [GeneralHomeComponent]
})
export class GeneralHomeModule { }
