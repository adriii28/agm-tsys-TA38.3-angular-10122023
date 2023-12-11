import { Component } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-list-article',
  standalone: true,
  imports: [],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent {
  articles: any[] = [];

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.getMail();
  }

  deleteArticle(id:number){
    this.articles =this.articles.filter(item => item.id !== id);
  }

  selectArticle(item:any){
    console.log(item);
  }
}
