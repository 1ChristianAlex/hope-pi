import { Component, OnInit } from '@angular/core';
import { ionicStorage } from '../services/ionic-storage';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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
  constructor(private ioStorage: ionicStorage) {}

  ngOnInit() {
    this.getUser();
  }
  public toggleMainBox: boolean = false;
  public userLocal = {};
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
    console.log(this.userLocal);
  }
}
