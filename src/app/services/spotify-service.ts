import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import { Http } from '@angular/http';
import * as Q from 'q';
import { ionicStorage } from './ionic-storage';
import { Token, storageToken } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: Http, private ionStorage: ionicStorage) {}
  private spotify = new SpotifyWebApi();

  private async getToken() {
    try {
      let tokenResponse: any = await this.http
        .get('http://localhost:3000/spotify')
        .toPromise();
      let token: Token = JSON.parse(tokenResponse._body);

      // this.ionStorage.setStorage('spotifyToken', {
      //   token: token,
      //   isOn: true
      // });
      // this.spotify.setAccessToken(token.access_token);
      // this.spotify.setPromiseImplementation(Q);
      // return this.spotify;
      this.spotify.setAccessToken(token.access_token);
      this.spotify.setPromiseImplementation(Q);
      return this.spotify;
    } catch (error) {
      return error;
    }
  }
  private async refreshToken(): Promise<any> {
    await this.http
      .get('http://localhost:3000/spotify')
      .toPromise()
      .then((response: any) => {
        let token: Token = JSON.parse(response._body);
        console.log('refresh token');
        this.ionStorage.setStorage('spotifyToken', {
          token,
          isOn: true
        });
        this.spotify.setAccessToken(token.access_token);
      });
  }
  public async getAlbum() {
    await this.getToken();

    let album: any = await this.spotify
      .getAlbum('06IKD4hvarANlm2BJMzsSq')
      .catch(err => {
        console.log(err);
      });

    let returnAlbum = {
      tracks: album.tracks.items,
      albumName: album.name,
      albumImage: album.images[1]
    };

    return returnAlbum;
  }
  public async getMusicByUser() {
    await this.getToken();
    this.spotify.getCategory('rock').then(response => {
      console.log(response);
    });
  }
}
