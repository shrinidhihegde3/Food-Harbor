import { Component } from '@angular/core';
import { MenuArticleService } from './services/menu-article.service';

@Component({
  selector: 'app-menu-article',
  templateUrl: './menu-article.component.html',
  styleUrls: ['./menu-article.component.css']
})
export class MenuArticleComponent {
    constructor(private service:MenuArticleService) { }

    articles:any = [];
    
    ngOnInit() {
      this.service.getArticles().subscribe((data: any) => {
        console.log(data);
        this.articles = data.articles;
      });
    }
}
