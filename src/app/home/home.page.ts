import { Component, OnInit } from '@angular/core';
import { FireBaseServiceService } from "../services/fire-base-service.service";
import { ionicStorage } from "../services/ionic-storage";
import { User } from "../services/interfaces";
import { UtilitsMetods } from "../services/utilits";
import { Router } from "@angular/router";
import { SpotifyService } from "../services/spotify-service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class homePage implements OnInit{
  constructor(public fb:FireBaseServiceService, private ionStorage:ionicStorage, private util:UtilitsMetods
    , private router:Router, private spotify:SpotifyService){}
  ngOnInit(){
    this.verifyAlertButon();
    
  }
  public valueBtnAlert:boolean = true;
  private verifyAlertButon(){
    
    this.ionStorage.getStorage('userLocalInfo').then((resultStorage:User)=>{
      this.valueBtnAlert = resultStorage.btnConfig;
    })
    
  }
  public configureBtnAlert(path:string){
    this.router.navigate(['/app/config/alertConfig'])
  }
  clickFB(){
    this.spotify.serachTrack();
  }
}
