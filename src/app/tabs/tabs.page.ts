import { Component } from '@angular/core';
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
        'false',
        style({
          display: 'none'
        })
      ),
      state(
        'true',
        style({
          display: 'block'
        })
      ),
      transition('false <=> true', [animate('1s')])
    ])
  ]
})
export class TabsPage {
  public toggleMainBox: boolean = false;

  public toggleBox() {
    this.toggleMainBox = !this.toggleMainBox;
  }
}
