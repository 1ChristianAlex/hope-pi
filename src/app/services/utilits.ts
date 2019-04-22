import { Injectable } from "@angular/core";
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
export class UtilitsMetods{
    constructor(private toastController:ToastController, private router:Router){}
    
    public async UtilitsMetods(mensage:string, timer:number = 1500){
        const toast = await this.toastController.create({
            message:mensage,
            position:'bottom',
            duration:timer
        })
        toast.present();
    }
    public navigateRouter(path:string){
        this.router.navigate([`/${path}`])
      }
}