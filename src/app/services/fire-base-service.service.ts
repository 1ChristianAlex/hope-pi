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
    try {
      let nameArrayPromise = new Promise((res,rej)=>{
        this.fBase.list('articles/articlesFiles').snapshotChanges().subscribe(names=>{
          let namesSub = []
          names.map(nome=>{
            namesSub.push(nome.payload.val())
          });
          res(namesSub)
        });
      })
      
      let arrayName:Array<any> = (await nameArrayPromise as Array<any>);
      let filesArrayPromise = new Promise((res,rej)=>{
        let filesArray = []
        arrayName.forEach(name=>{
          this.fStorage.ref(`articleFiles/${name}`).getMetadata().subscribe(file=>{
            console.log(file)
          })
        })
        res(filesArray)
      })
      
    } catch (error) {
      
    }
  }
}
