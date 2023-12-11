import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  myForm: FormGroup;
  articleService: ArticleService;

  constructor(private formBuilder: FormBuilder, private service: ArticleService) {
    this.myForm = this.formBuilder.group({
      id: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.articleService = this.service;
  }

  fillForm(item : Article){
    console.log(item);
    this.myForm.patchValue(item);
  }

  onSubmit() : void {
    const newArticle: Article = this.myForm.value as Article;
    this.service.addArticle(newArticle);
    this.myForm.reset();
  }
}
