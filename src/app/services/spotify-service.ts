import { Injectable } from "@angular/core";
import SpotifyWebApi from 'spotify-web-api-js';
import { Http } from "@angular/http";
import * as Q from 'q';
import { ionicStorage } from "./ionic-storage";
import { Token, storageToken } from "./interfaces";

@Injectable({
    providedIn:'root'
})
export class SpotifyService{
    constructor(private http:Http,private ionStorage:ionicStorage){ 
    }
    private spotify = new SpotifyWebApi();
    
    private async getToken(){
        try {
            let storageToken:storageToken = await this.ionStorage.getStorage('spotifyToken');
            if (storageToken == null ||storageToken.isOn == null || storageToken.isOn == undefined) {
                let tokenResponse:any = await this.http.get('https://us-central1-una-projects.cloudfunctions.net/getSpotifyTokenF/').toPromise()
                let token:Token = JSON.parse(tokenResponse._body);
                console.log('from api')
                this.ionStorage.setStorage('spotifyToken',{token:token, isOn:true})
                this.spotify.setAccessToken(token.access_token);
                this.spotify.setPromiseImplementation(Q);
                return this.spotify
                
            }
            else{                    
                console.log('from storage')
                this.spotify.setAccessToken(storageToken.token.access_token);
                this.spotify.setPromiseImplementation(Q);
                return this.spotify
            }
            
            
        } catch (error) {
            return error;
        }
        
    }
    private async refreshToken():Promise<any>{
        await this.http.get('https://us-central1-una-projects.cloudfunctions.net/getSpotifyTokenF/').toPromise().then((response:any)=>{
        let token:Token = JSON.parse(response._body);
        console.log('refresh token')
        this.ionStorage.setStorage('spotifyToken',{token:token, isOn:true})
        this.spotify.setAccessToken(token.access_token);
    })
}
public async getAlbum(){
    
    await this.getToken();
    let album:any  = await this.spotify.getAlbum('4Carzsnpd6yvuHZ49I0oz8').
    catch(err=>{
        if (err.status == 401) {
            this.refreshToken().then(()=>{
                this.getAlbum();
            })
        }
    })

    let returnAlbum = {
        tracks:album.tracks.items,
        albumName:album.name,
        albumImage:album.images[1]
    }
    
    return returnAlbum;
}    

}
