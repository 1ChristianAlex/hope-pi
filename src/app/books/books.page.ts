import { Component, OnInit } from '@angular/core';
import { FireBaseServiceService } from "../services/fire-base-service.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: 'books.page.html'
})
export class booksPage implements OnInit{
  constructor(private fireBase:FireBaseServiceService){}
  
  ngOnInit(){
    this.getArticles();
  }
  public files:Observable<any>;
  
  private async getArticles(){
    
  }
}
