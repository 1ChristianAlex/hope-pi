import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Platform } from '@ionic/angular';
import { UtilitsMetods } from '../../../services/utilits';
import { ionicStorage } from '../../../services/ionic-storage';

@Component({
  selector: 'app-side-search',
  templateUrl: './side-search.component.html',
  animations: [
    trigger('toggleMenu', [
      state(
        'cloesedMenu',
        style({
          position: ' absolute',
          background: ' #01a6d0',
          width: ' 70%',
          right: '-100%',

          'z-index': ' 99'
        })
      ),
      state(
        'OpendMenu',
        style({
          position: ' absolute',
          background: ' #01a6d0',
          width: ' 70%',
          right: ' 0',
          'z-index': ' 99'
        })
      ),
      transition('cloesedMenu <=> OpendMenu', [animate('0.2s')])
    ])
  ]
})
export class SideSearchComponent implements OnInit {
  constructor(private plat: Platform, private storage: ionicStorage, private Utilits: UtilitsMetods) {}

  ngOnInit() {
    this.positionMenu();
    this.getUserInfo();
  }
  public toggleMenu = false;
  public userLocalSide = {};
  public toggleMenuE() {
    this.toggleMenu = !this.toggleMenu;
  }

  private positionMenu() {
    let plat = this.plat.platforms();
    let height = this.plat.height();

    if (plat.includes('ios') || plat.includes('iphone')) {
      (document.querySelector('.menu-content-icon') as HTMLElement).style.top = '-5px';
      (document.querySelector('.side-menu') as HTMLElement).style.top = '45px';
      (document.querySelector('.side-menu') as HTMLElement).style.height = `${height - 95}px`;
    } else {
      (document.querySelector('.menu-content-icon') as HTMLElement).style.top = '5px';
      (document.querySelector('.side-menu') as HTMLElement).style.top = '56px';
      (document.querySelector('.side-menu') as HTMLElement).style.height = `${height - 112}px`;
    }
  }
  public goEdit() {
    this.Utilits.navigateRouter('config/edit', false);
    this.toggleMenuE();
  }
  private async getUserInfo() {
    let { name, lastname, photoURL } = await this.storage.getStorage('userLocalInfo');
    console.log(photoURL);
    this.userLocalSide = {
      name,
      lastname,
      photoURL
    };
  }
}
