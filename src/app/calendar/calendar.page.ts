import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth";
import { Router } from "@angular/router";
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html'
})
export class CalendarPage implements OnInit {
  
  constructor(private fAuth:AuthService, private router:Router) { }
  
  ngOnInit() {
  }
  public signOut(){
    this.fAuth.signOut().then(()=>{
      this.router.navigate(['']);
      console.log('sign out');
    })
  }
}
