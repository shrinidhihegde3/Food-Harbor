import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MenuArticleService {
  constructor(private _http: HttpClient) {}

  newsApiUrl =
    'https://newsapi.org/v2/everything?q=food&apiKey=db20ce91c53541ec87f8e282274bad7a';

  getArticles() { 
    return this._http.get(this.newsApiUrl);
  }
}
