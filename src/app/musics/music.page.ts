import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify-service';
import { IonicLoad } from '../services/ionLoading';

@Component({
  selector: 'app-music',
  templateUrl: 'music.page.html'
})
export class musicPage implements OnInit {
  constructor(private spotify: SpotifyService, private load: IonicLoad) {}
  ngOnInit() {
    this.getMusic();
  }
  public musics: any = {
    tracks: []
  };

  private async getMusic() {
    await this.load.openLoading();
    this.musics = await this.spotify.getAlbum();
    console.log(this.musics);
    await this.load.closeLoading();
  }
  public openCardMusic(track: SpotifyApi.TrackObjectSimplified) {
    if (
      document.getElementById(`${track.name}`).classList.contains('opened') ==
      false
    ) {
      document.getElementById(`${track.name}`).classList.add('opened');
    } else {
      document.getElementById(`${track.name}`).classList.remove('opened');
    }
  }
}
