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
  constructor(
    public fb: FireBaseServiceService,
    private ionStorage: ionicStorage,
    private router: Router,
    private load: IonicLoad
  ) {}
  ngOnInit() {
    //    this.verifyAlertButon();
    this.getNews();
    this.getPhraseHome();
  }
  public valueBtnAlert: boolean = true;
  public newsHome: Array<Post> = [];
  public phrase: any = '';
  private async verifyAlertButon() {
    let userLocal: User = await this.ionStorage.getStorage('userLocalInfo');
    userLocal ? (this.valueBtnAlert = userLocal.btnConfig) : true;
  }
  public async getNews() {
    await this.load.openLoading();
    let news = await this.fb.getNews();
    this.newsHome = news;
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
