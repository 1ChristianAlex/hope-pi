import { Component, OnInit } from '@angular/core';
import { FireBaseServiceService } from '../services/fire-base-service.service';
import { ionicStorage } from '../services/ionic-storage';
import { User, Post, News } from '../services/interfaces';
import { Router } from '@angular/router';
import { IonicLoad } from '../services/ionLoading';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class homePage implements OnInit {
  constructor(public fb: FireBaseServiceService, private ionStorage: ionicStorage, private router: Router, private load: IonicLoad) {}
  ngOnInit() {
    //    this.verifyAlertButon();
    this.getNews();
    this.getPhraseHome();
  }
  public valueBtnAlert: boolean = true;
  public newsHome: Array<any> = [];
  public phrase: any = '';
  public slideHome = [];

  public async getNews() {
    await this.load.openLoading();
    let news = await this.fb.getNews();

    let postComplet = news.map(async (ePost, i) => {
      let newThumb = await this.fb.getPostThumb(ePost.thumb);
      if (i <= 3) {
        this.slideHome.push({ ...ePost, thumb: newThumb });
      }
      return { ...ePost, thumb: newThumb };
    });
    this.newsHome = await Promise.all(postComplet);
    await this.load.closeLoading();
  }

  public openNews(news: News) {
    this.router.navigate(['app/home/singleNews'], {
      queryParams: news
    });
  }
  public async getPhraseHome() {
    let phrase = await this.fb.getRandomPhrase();
    this.phrase = phrase;
  }
}
