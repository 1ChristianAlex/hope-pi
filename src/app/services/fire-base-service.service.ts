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
    console.log('click')
    let files= [];
    await this.fBase.list('articles/articlesFiles').snapshotChanges().subscribe(item=>{
      item.map(map=>{
         files.push({
           names:map.payload.val()
         });
      })
    })
    await files;
    //let filesStorage = await this.fStorage.ref(`articleFiles/${files[0]}`).getMetadata().toPromise();
    console.log(typeof files)
    files.forEach(item=>{
      console.log(item)
    })
    return files;
  }
}
