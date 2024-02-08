import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHomeComponent } from './menu-home.component';



@NgModule({
  declarations: [
    MenuHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuHomeComponent
  ]
})
export class MenuHomeModule { }
