import { Component, OnInit} from '@angular/core';
import { SpotifyService } from "../services/spotify-service";
import { trigger, state, style, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'app-music',
  templateUrl: 'music.page.html',
  animations:[
    trigger('openCardMusic', [
      
      state('openCardanimationImgClose', style({
        float: 'unset',
        width: '100%',
        "text-align":'center'
      })),
      state('openCardanimationImgOpen', style({
        float:' left',
        width:' 35%',
        margin:' 0',
        height:' auto',
      })),
      state('animationContentClose', style({
        width: '100%',
        float: 'unset',
      })),
      state('animationContentOpen', style({
        width: '65%',
        float: 'right',
      })),
      state('imgCenter', style({
        width: '40%',
        margin: '0 auto'
      })),
      state('imgThumb', style({
        width: '100%',
        margin: '0'
      })),
      transition('*<=>*', animate('200ms'))      
    ])
  ]  
})
export class musicPage implements OnInit{
  constructor(private spotify:SpotifyService){}
  
  ngOnInit(){
    this.getMusic()
  }
  public inputOpen= {
    animationContent:'animationContentOpen',
    animationImg:'openCardanimationImgOpen',
    imgPosition:'imgThumb'
  };
  
  public musics:any = {
    tracks:[]
  };
  private async getMusic(){
    this.musics = await this.spotify.getAlbum()
    console.log(this.musics)
  }
  public openCardMusic(track:SpotifyApi.TrackObjectSimplified){
    if (this.inputOpen.imgPosition == 'imgCenter') {
      this.inputOpen = {
        animationContent:'animationContentOpen',
        animationImg:'openCardanimationImgOpen',
        imgPosition:'imgThumb'
      }
    }
    else{
      this.inputOpen = {
        animationImg:'openCardanimationImgClose',
        animationContent:'animationContentClose',
        imgPosition: 'imgCenter'
      }
    }
  }
}
