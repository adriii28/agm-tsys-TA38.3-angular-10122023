import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: any[] = [{"id":1,"description":"papas","price":10.55},{"id":2,"description":"manzanas","price":12.1}];

  addArticle(newArticle: any) {
    this.articles.push(newArticle);
    console.log(this.articles);
  }

  getMail() {
    return this.articles;
  }
}
