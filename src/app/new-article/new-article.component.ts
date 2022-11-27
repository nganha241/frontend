import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit {
  articles: any;
  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {}
  add(articleTitle: any, articleBody: any, articleAuthor: any) {
    this.articles = {
      title: articleTitle,
      body: articleBody,
      author: articleAuthor,
    };
    this.articleService.addArticle(this.articles as any).subscribe((res) => {
      this.articles = res;
      this.router.navigateByUrl('/');
    });
  }
}
