import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
})
export class ArticlesComponent implements OnInit {
  constructor(private articles: ArticleService) {}

  public listArticles: any[] = [];
  ngOnInit(): void {
    this.showArticles();
  }

  showArticles() {
    this.articles.listArticles().subscribe((res: any) => {
      this.listArticles = res;
    });
  }
  deleteArticle(id: string) {
    this.articles.delete(id).subscribe((res: any) => {
      this.showArticles();
    });
  }
}
