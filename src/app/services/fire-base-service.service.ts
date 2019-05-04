import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireBaseServiceService {
  constructor(
    private fBase: AngularFireDatabase,
    private fStorage: AngularFireStorage
  ) {}

  public async getTeste() {
    return await this.fBase.list('firebase').snapshotChanges();
  }
  public async getAgain() {
    return await this.fBase
      .object('firebase')
      .update({ testez: { testea: 123, firefromIonic: true } });
  }
  public async getFiles(): Promise<Observable<any>> {
    try {
      const nameArrayPromise = new Promise((res, rej) => {
        this.fBase
          // tslint:disable-next-line: quotemark
          .list('articles/articlesFiles')
          .snapshotChanges()
          .subscribe(names => {
            const namesSub = [];
            names.map(nome => {
              namesSub.push(nome.payload.val());
            });
            res(namesSub);
          });
      });

      const arrayName: Array<any> = (await nameArrayPromise) as Array<any>;
      const obsDoc = Observable.create((observe: Observer<any>) => {
        arrayName.forEach(name => {
          this.fStorage
            .ref(`articleFiles/${name}`)
            .getMetadata()
            .subscribe(doc => {
              observe.next(doc);
            });
        });
      });
      return obsDoc;
    } catch (error) {}
  }
  public getSingleArticle(name: string) {
    return this.fStorage
      .ref(`articleFiles/${name}`)
      .getDownloadURL()
      .toPromise();
  }
}
