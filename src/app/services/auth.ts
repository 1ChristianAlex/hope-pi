import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { User } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fBase:AngularFireAuth) { }
public loginApp(user:User){
this.fBase.auth.signInWithEmailAndPassword(user.email, user.pass).then(response=>{
    console.log(response)
}).catch(err=>console.log(err))
}

}
