import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuArticleComponent } from './menu-article.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuArticleService } from './services/menu-article.service';



@NgModule({
  declarations: [
    MenuArticleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [MenuArticleService],
  exports: [
    MenuArticleComponent
  ]
})
export class MenuArticleModule { }
