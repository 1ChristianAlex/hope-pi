import { Component } from '@angular/core';
import { FireBaseServiceService } from "../services/fire-base-service.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class homePage {
  constructor(public fb:FireBaseServiceService){}
  
  clickFB(){
    this.fb.getTeste().then(item =>{
      item.subscribe(i=>{
        console.log(i)
      })
    })
  }
}
