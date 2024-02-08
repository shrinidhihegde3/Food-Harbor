import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { MenuUserModule } from './menu-user/menu-user.module';
import { LoginModule } from './login/login.module';
import { MenuNgosModule } from 'src/app/menu-ngos/menu-ngos.module';
import { MenuArticleModule } from './menu/menu-article/menu-article.module';
import { MenuDonationModule } from './menu/menu-donation/menu-donation.module';
import { MenuHomeModule } from './menu/menu-home/menu-home.module';
import { MenuOrganisationsModule } from './menu/menu-organisations/menu-organisations.module';
import { MenuProfileModule } from './menu/menu-profile/menu-profile.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    CommonModule,
    HeaderModule,
    FooterModule,
    MenuUserModule,
    LoginModule,
    MenuNgosModule,
    MenuArticleModule,
    MenuDonationModule,
    MenuHomeModule,
    MenuOrganisationsModule,
    MenuProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
