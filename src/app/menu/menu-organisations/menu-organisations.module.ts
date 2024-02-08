import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOrganisationsComponent } from './menu-organisations.component';



@NgModule({
  declarations: [
    MenuOrganisationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuOrganisationsComponent
  ]
})
export class MenuOrganisationsModule { }
