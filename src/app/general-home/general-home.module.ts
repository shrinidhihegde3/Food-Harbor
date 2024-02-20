import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { GeneralHomeComponent } from './general-home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';



@NgModule({
  declarations: [
    GeneralHomeComponent,
    //HeaderComponent,
    //FooterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ImageModule
  ],
  exports:[GeneralHomeComponent]
})
export class GeneralHomeModule { }
