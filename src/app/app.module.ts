import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MenuHomeComponent } from './menu/menu-home/menu-home.component';
import { MenuOrganisationsComponent } from './menu/menu-organisations/menu-organisations.component';
import { MenuArticleComponent } from './menu/menu-article/menu-article.component';
import { MenuProfileComponent } from './menu/menu-profile/menu-profile.component';
import { MenuNgosComponent } from '../menu-ngos/menu-ngos.component';
import { MenuProfileDonationHistoryComponent } from './menu/menu-profile/menu-profile-donation-history/menu-profile-donation-history.component';
import { MenuProfileCreditsComponent } from './menu/menu-profile/menu-profile-credits/menu-profile-credits.component';
import { MenuProfileMyprofileComponent } from './menu/menu-profile/menu-profile-myprofile/menu-profile-myprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuUserComponent,
    LoginComponent,
    MenuHomeComponent,
    MenuOrganisationsComponent,
    MenuArticleComponent,
    MenuProfileComponent,
    MenuNgosComponent,
    MenuProfileDonationHistoryComponent,
    MenuProfileCreditsComponent,
    MenuProfileMyprofileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
