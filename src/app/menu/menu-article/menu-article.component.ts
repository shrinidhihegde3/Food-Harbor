import { Component } from '@angular/core';
import { MenuArticleService } from './services/menu-article.service';

@Component({
  selector: 'app-menu-article',
  templateUrl: './menu-article.component.html',
  styleUrls: ['./menu-article.component.css']
})
export class MenuArticleComponent {
    constructor(private _articleService:MenuArticleService) { }

    articles:any = [];
    realArticles:any = [];
    
    ngOnInit() {
      this._articleService.getArticles().subscribe((data: any) => {
        console.log(data);
        this.articles = data.articles;
        this.realArticles = this.articles.filter((article: any) => {
          return article.description !== null && article.urlToImage !== null;
        });
      });
    }
   
}
