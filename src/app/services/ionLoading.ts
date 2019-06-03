import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class IonicLoad {
  constructor(private ionLoad: LoadingController) {}

  public async openLoading(mensage: string = 'Carregando...') {
    const loading = this.ionLoad.create({
      spinner: 'circles',
      message: mensage,
      translucent: false,
      cssClass: 'ionicLoading'
    });
    const load = await loading;
    return load.present();
  }
  public async tostMensage(message) {
    const toast = await this.ionLoad.create({
      message,
      duration: 2000,
      spinner: 'dots',
      cssClass: 'ionic-message-pos-report'
    });
  }
  public closeLoading() {
    return this.ionLoad.dismiss();
  }
}
