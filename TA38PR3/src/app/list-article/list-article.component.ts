import { Component } from '@angular/core';
import { ArticleService } from '../article.service';
import { AddArticleComponent } from '../add-article/add-article.component';
import { Article } from '../model/article';

@Component({
  selector: 'app-list-article',
  standalone: true,
  imports: [],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent {
  articles: Article[] = [];

  constructor(private articleService: ArticleService)   {
    this.articles = this.articleService.getArticles();
  }

  deleteArticle(id:number){
    this.articles =this.articles.filter(item => item.id !== id);
  }

  selectArticle(item:Article){
    console.log(item);
    //this.addArticle.fillForm(item);
  }
}
