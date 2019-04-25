import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
import { ionicStorage } from "./ionic-storage";
import { User,newUser } from './interfaces';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private fBase:AngularFireAuth, private fData:AngularFireDatabase, private ionicS:ionicStorage) { }
  
  public loginApp(user:User):Promise<any>{
    return  this.fBase.auth.signInWithEmailAndPassword(user.email, user.pass);
  }
  public signOut(){
    return this.fBase.auth.signOut()
  }
  public newUser(user:newUser){
    return this.fBase.auth.createUserWithEmailAndPassword(user.email, user.pass).then((userC:auth.UserCredential)=>{
      console.log(userC)
      this.fData.object(`users/${userC.user.uid}`).set({
        uid:userC.user.uid,
        name:user.name,
        lastname:user.lastname,
        email:user.email,
        pass:user.pass,
        photoURL:'defaultPhoto',
        bornDate:user.bornDate,
        btnConfig:user.btnConfig
      })
    })
  } 
}
