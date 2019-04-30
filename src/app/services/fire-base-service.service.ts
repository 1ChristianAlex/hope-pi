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
  public getFiles():Promise<any>{
    return new Promise((res,rej)=>{
      try {
        let filesA = []
        this.fBase.list('articles/articlesFiles').snapshotChanges().subscribe(item=>{
          item.map((map)=>{
            filesA.push(this.fStorage.ref(`articleFiles/${map.payload.val()}`).getMetadata())
          })
        });
        res(filesA)
      } catch (error) {
        rej(error)
      }
    })
    
  }
}
