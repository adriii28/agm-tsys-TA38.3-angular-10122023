import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  myForm: FormGroup;
  id: number = 0;
  description: string ='';
  price : number = 0;
  articleService: ArticleService;

  constructor(private formBuilder: FormBuilder, private service: ArticleService) {
    this.myForm = this.formBuilder.group({
      id: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.articleService = this.service;
  }

  fillForm(){

  }

  onSubmit() : void {
    const articleData = this.myForm.value;  
    this.service.addArticle(articleData);
    this.myForm.reset();
  }
}
