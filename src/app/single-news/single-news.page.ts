import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../services/interfaces';
import { IonicLoad } from '../services/ionLoading';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.page.html'
})
export class SingleNewsPage implements OnInit {
  constructor(private routerP: ActivatedRoute, private loader: IonicLoad) {}

  ngOnInit() {
    this.getSinglePost();
  }
  public singleNews: Post;

  private async getSinglePost() {
    await this.loader.openLoading();
    let parm = this.routerP.snapshot.queryParams;
    this.singleNews = {
      ...parm
    };
    await this.loader.closeLoading();
  }
}
