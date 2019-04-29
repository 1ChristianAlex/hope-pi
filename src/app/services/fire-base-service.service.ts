import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class FireBaseServiceService {

  constructor(private fBase:AngularFireDatabase, private fStorage:AngularFireStorage) { }

  public async getTeste(){
    return await this.fBase.list('firebase').snapshotChanges();
  }
  public async getAgain(){
    return await this.fBase.object('firebase').update({testez:{testea:123,firefromIonic:true}})
  }
  public async getFiles(){
    let files = await this.fStorage.ref('articleFiles/Depressão - Corpo, Mente e Alma.pdf');
    let a = files.getDownloadURL().toPromise()
    let b = files.getMetadata().toPromise()

    console.log(Promise.all([a,b]))
  }
}
