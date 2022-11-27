import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  articleId: any;
  article: any;
  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap;
    this.articleId = Number(param.get('id'));
    console.log(this.articleId);
    this.articleService.find(this.articleId).subscribe(
      (res: any) => {
        this.article = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  update(articleTitle: string, articleBody: string, articleAuthor: string) {
    this.articleService
      .update(this.articleId, this.article)
      .subscribe((res: any) => {
        this.router.navigateByUrl('/');
      });
  }
}
