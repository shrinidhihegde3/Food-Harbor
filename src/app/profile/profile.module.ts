import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from '../shared/header/header.module';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    HeaderModule,
    ImageModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
