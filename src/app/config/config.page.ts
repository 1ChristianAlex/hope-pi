import { Component, OnInit } from '@angular/core';
import { UtilitsMetods } from "../services/utilits";
import { AuthService } from "../services/auth";

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html'
})
export class ConfigPage implements OnInit {
  
  constructor(private ultilit:UtilitsMetods, private auth:AuthService) { }
  
  ngOnInit() {
  }
  public navigate(path:string){
    this.ultilit.navigateRouter(path);
  }
  public signOut(){
    this.auth.signOut().then(()=>{
      this.ultilit.navigateRouter('login');
    })
  }
}
