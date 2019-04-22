import { Component, OnInit } from '@angular/core';
import { newUser } from '../services/interfaces';
import { AuthService } from "../services/auth";
import { Router } from "@angular/router";
import { UtilitsMetods } from "../services/utilits"

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html'
})
export class SigninPage implements OnInit {
  
  constructor(private auth:AuthService, private router:Router, private toast:UtilitsMetods) { }
  
  ngOnInit() {
  }
  public userSignin:newUser = {
    email:'',
    pass:'',
    emailC:'',
    passC:'',
    name:''
  }; 
  public newUser(user:newUser){

    const validateFilds = (userV:newUser):newUser =>{
      let matchs:Array<boolean> = [];
      let mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (userV.email.length > 5 && userV.email == userV.emailC) {
        matchs.push(true)
      }
      else{
        matchs.push(false)
        this.toast.UtilitsMetods('Email não confere')
      }
      if (userV.pass.length > 5 && userV.pass == userV.passC) {
        matchs.push(true)
      }
      else{
        matchs.push(false)
        this.toast.UtilitsMetods('Senha não confere')
      }
      if (mailRegex.test(userV.email)) {
        matchs.push(true)
      }
      else{
        matchs.push(false)
        this.toast.UtilitsMetods('Formatação de email inválida')
      }
      if (matchs.includes(false)==false) {
        return userV;
      }
    }

    this.auth.newUser(validateFilds(user)).then(()=>{
      this.router.navigate(['/app']);
    }).catch(err =>{
      this.toast.UtilitsMetods(err)
    })
  }
  public navigateRouter(path:string){
    this.router.navigate([`/${path}`])
  }
}
