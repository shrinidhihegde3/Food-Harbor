import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuArticleComponent } from './menu-article.component';



@NgModule({
  declarations: [
    MenuArticleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuArticleComponent
  ]
})
export class MenuArticleModule { }
