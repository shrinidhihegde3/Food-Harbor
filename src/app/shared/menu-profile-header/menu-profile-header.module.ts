import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuProfileHeaderComponent } from './menu-profile-header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MenuProfileHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuProfileHeaderComponent
  ]
})
export class MenuProfileHeaderModule { }
