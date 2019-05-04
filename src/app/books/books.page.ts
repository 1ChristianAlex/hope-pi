import { Component, OnInit } from '@angular/core';
import { FireBaseServiceService } from '../services/fire-base-service.service';
import { storage } from 'firebase';
import { docFile } from '../services/interfaces';

@Component({
  selector: 'app-books',
  templateUrl: 'books.page.html'
})
export class booksPage implements OnInit {
  constructor(private fireBase: FireBaseServiceService) {}

  ngOnInit() {
    this.getArticles();
  }
  public files: Array<docFile> = [];

  private async getArticles() {
    const obs = await this.fireBase.getFiles();
    obs.subscribe(async (item: storage.FullMetadata) => {
      this.files.push({
        name: item.name,
        size: item.size,
        path: await this.fireBase.getSingleArticle(item.name),
        contentType: item.contentType.replace('application/', ''),
        img: false
      });
    });
  }
}
