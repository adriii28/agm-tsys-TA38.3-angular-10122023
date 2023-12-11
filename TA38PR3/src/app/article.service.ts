import { Injectable } from '@angular/core';
import { Article } from './model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [
    new Article(1, 'papas', 10.55),
  new Article(2, 'manzanas', 12.1)];

  addArticle(newArticle: Article) {
    this.articles.push(newArticle);
    console.log(this.articles);
  }

  getArticles() {
    return this.articles;
  }
}
