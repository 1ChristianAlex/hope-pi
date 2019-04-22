import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { User,newUser } from './interfaces';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private fBase:AngularFireAuth) { }

  public loginApp(user:User):Promise<any>{
    return  this.fBase.auth.signInWithEmailAndPassword(user.email, user.pass)
  }
  public signOut(){
    return this.fBase.auth.signOut()
  }
  public newUser(user:newUser){
    return this.fBase.auth.createUserWithEmailAndPassword(user.email, user.pass)
  } 
}
