import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    DataViewModule
  ],
  exports:[
    FooterComponent,
    
  ]
})
export class FooterModule { }
