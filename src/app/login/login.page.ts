import { Component, OnInit } from '@angular/core';
import { User } from "../services/interfaces";
import { AuthService } from "../services/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html'
})
export class LoginPage implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  public user:User={
    email:'',
    pass:''
  };
  public loginApp(user:User){
    this.auth.loginApp(user);
  }
}
