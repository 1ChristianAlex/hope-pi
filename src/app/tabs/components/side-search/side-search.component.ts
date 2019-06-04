import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-side-search',
  templateUrl: './side-search.component.html',
  animations: [
    trigger('toggleMenu', [
      state(
        'cloesedMenu',
        style({
          position: ' absolute',
          top: '9%',
          background: ' #01a6d0',
          width: ' 70%',
          right: '-100%',
          height: ' 82%',
          'z-index': ' 99'
        })
      ),
      state(
        'OpendMenu',
        style({
          position: ' absolute',
          top: '9%',
          background: ' #01a6d0',
          width: ' 70%',
          right: ' 0',
          height: ' 82%',
          'z-index': ' 99'
        })
      ),
      transition('cloesedMenu <=> OpendMenu', [animate('0.2s')])
    ])
  ]
})
export class SideSearchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  public toggleMenu = false;
  public toggleMenuE() {
    this.toggleMenu = !this.toggleMenu;
  }
}
