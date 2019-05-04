import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root"
})
export class ionicStorage {
  constructor(private ionStorage: Storage) {}

  public setStorage(key: string, object: object) {
    console.log(`${key} storaged`);
    return this.ionStorage.set(key, { ...object });
  }
  public getStorage(key: string) {
    return this.ionStorage.get(key);
  }
  public clearStorage() {
    return this.ionStorage
      .clear()
      .then(() => console.log("Ionic Storage was clear"));
  }
}
