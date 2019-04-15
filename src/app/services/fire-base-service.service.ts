import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class FireBaseServiceService {

  constructor(private fBase:AngularFireDatabase) { }

  public async getTeste(){
    return await this.fBase.list('firebase').snapshotChanges();
  }
  public async getAgain(){
    return await this.fBase.object('firebase').update({testez:{testea:123,firefromIonic:true}})
  }
}
