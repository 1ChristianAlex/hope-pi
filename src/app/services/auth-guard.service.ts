import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";

import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(private router: Router,private fBase:AngularFireAuth) { }
  
  
  canActivate():Promise<boolean>{
    return new Promise((res,rej)=>{
      try {
        this.fBase.authState.subscribe(user=>{
          if (user) {
            res(true)
          }
          else{
            res(false)
            this.router.navigate(['/login'])
          }
        })
      } catch (error) {
        rej(error)
      }
    })
  }
  
}
