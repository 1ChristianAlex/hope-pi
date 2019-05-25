import { Component, OnInit } from '@angular/core';
import { ionicStorage } from '../services/ionic-storage';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { UtilitsMetods } from '../services/utilits';
import { FireBaseServiceService } from '../services/fire-base-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  animations: [
    trigger('toggleBox', [
      state(
        'cloesedBox',
        style({
          display: 'block',
          position: 'absolute',
          bottom: '-50%',
          right: '0',
          left: '0',
          'z-index': 0,
          opacity: '0.2'
        })
      ),
      state(
        'OpendBox',
        style({
          display: 'block',
          position: 'absolute',
          bottom: '10%',
          right: '0',
          left: '0',
          'z-index': 22,
          opacity: '1'
        })
      ),
      transition('cloesedBox <=> OpendBox', [animate('0.5s')])
    ])
  ]
})
export class TabsPage implements OnInit {
  constructor(
    private ioStorage: ionicStorage,
    private util: UtilitsMetods,
    private fb: FireBaseServiceService
  ) {}

  ngOnInit() {
    this.getUser();
    this.getPhraseTab();
  }
  public toggleMainBox: boolean = false;
  public userLocal = {};
  public BoxHelpItem = this.getBoxHelp();
  public phraseTab: any = '';

  public toggleBox() {
    this.toggleMainBox = !this.toggleMainBox;
  }
  public async getUser() {
    let { name, lastname, photoURL } = await this.ioStorage.getStorage(
      'userLocalInfo'
    );
    this.userLocal = {
      name,
      lastname,
      photoURL
    };
  }
  private getBoxHelp() {
    let arrUrl = [
      { name: 'Desacelera', url: 'https://www.eurekka.me/desacelera.html' },
      { name: 'Durmazen', url: 'https://www.eurekka.me/durmazen.html' },
      { name: 'Não Esquenta', url: 'https://www.eurekka.me/naoesquenta.html' }
    ];
    return arrUrl;
  }
  public goBoxHelp(boxitem: any) {
    window.open(boxitem.url, '_blank');
  }
  public navWhatHappened() {
    this.toggleBox();
    this.util.navigateRouter('what-happened', false);
  }
  public async getPhraseTab() {
    let phrase = await this.fb.getRandomPhrase();
    this.phraseTab = phrase;
  }
}
