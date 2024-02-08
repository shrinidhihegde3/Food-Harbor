import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { MenuModule } from './menu/menu.module';
import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MenuModule,
    HeaderModule,
    FooterModule,
    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ],
    providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
