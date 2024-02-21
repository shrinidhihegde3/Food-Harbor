import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOrganisationComponent } from './menu-organisation.component';
import { OrganisationCardComponent } from './organisation-card/organisation-card.component';



@NgModule({
  declarations: [
    MenuOrganisationComponent,
    OrganisationCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuOrganisationComponent
  ]
})
export class MenuOrganisationModule { }
