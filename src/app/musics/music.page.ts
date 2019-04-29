import { Component, OnInit} from '@angular/core';
import { SpotifyService } from "../services/spotify-service";

@Component({
  selector: 'app-music',
  templateUrl: 'music.page.html'
})
export class musicPage implements OnInit{
  constructor(private spotify:SpotifyService){}
  ngOnInit(){
    this.getMusic()
  }
  public musics:any = {
    tracks:[]
  };
  
  private async getMusic(){
    this.musics = await this.spotify.getAlbum()
    console.log(this.musics)
  }
  public openCardMusic(track:SpotifyApi.TrackObjectSimplified){
    if (document.getElementById(`${track.name}`).classList.contains('opened') ==false) {
      document.getElementById(`${track.name}`).classList.add('opened');
    }
    else{
      document.getElementById(`${track.name}`).classList.remove('opened');
    }
  }
}
