import { Component, OnInit } from '@angular/core';
import { FireBaseServiceService } from '../services/fire-base-service.service';
import { ionicStorage } from '../services/ionic-storage';
import { User } from '../services/interfaces';
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
    this.verifyAlertButon();
  }
  public valueBtnAlert: boolean = true;
  private async verifyAlertButon() {
    let userLocal: User = await this.ionStorage.getStorage('userLocalInfo');
    userLocal ? (this.valueBtnAlert = userLocal.btnConfig) : true;
  }
  public configureBtnAlert(path: string) {
    this.router.navigate(['/app/config/alertConfig']);
  }
  public async clickFB() {
    this.load.openLoading();
  }
}
