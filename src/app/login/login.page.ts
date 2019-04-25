import { Component, OnInit } from '@angular/core';
import { User } from "../services/interfaces";
import { AuthService } from "../services/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";
import { UtilitsMetods } from "../services/utilits";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html'
})
export class LoginPage implements OnInit {
  
  constructor(private authS:AuthService, private router:Router, private UtilitsMetods:UtilitsMetods) { }
  
  ngOnInit() {
  }
  public navigateRouter(path:string){
    this.router.navigate([`/${path}`])
  }
  public user:User={
    email:'',
    pass:''
  };
  public loginApp(user:User){
    const verifyStringAcess = () =>{
      let canSign = [];
      let mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (mailRegex.test(user.email) == false) {
        this.UtilitsMetods.UtilitsMetods('Formatação de email invalida')
        canSign.push(false)
      }
      else{
        canSign.push(true)
      }
      if (user.pass.length < 4) {
        this.UtilitsMetods.UtilitsMetods('Senha muito curta')
        canSign.push(false)
      }
      else{
        canSign.push(true)
      }
      if (canSign.includes(false)==false) {
        return true;
      }
      return false;
    }

    if (verifyStringAcess() == true) {
      this.authS.loginApp(user).then((response:auth.UserCredential)=>{
        if (response.user) {
          this.router.navigate(['/app'])
        }
      }).catch((err:auth.Error)=>{
        console.log(verifyStringAcess())
        console.log(err.message)
        this.UtilitsMetods.UtilitsMetods('Email ou senha invalidos')
      });
    }

  }
}
