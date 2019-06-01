import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, Observer } from 'rxjs';
import { Post, userCaseForm } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class FireBaseServiceService {
  constructor(
    private fBase: AngularFireDatabase,
    private fStorage: AngularFireStorage
  ) {}
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
  public getNews(): Promise<Array<Post>> {
    return new Promise((res, rej) => {
      this.fBase
        .list('News/posts')
        .valueChanges()
        .subscribe((item: Array<Post>) => {
          res(item);
        });
    });
  }
  public getRandomPhrase() {
    return new Promise((res, rej) => {
      this.fBase
        .list('MotivacialPhrases')
        .valueChanges()
        .forEach(phrase => {
          let random = Math.floor(Math.random() * phrase.length);

          res(phrase[random]);
        });
    });
  }
  public sendUserDataSitualtion(userSituaiton: userCaseForm, uid: string) {
    let date = new Date();
    this.fBase
      .list(
        `users/${uid}/${date.getDate()}-${date.getMonth() +
          1}-${date.getFullYear()}}`
      )
      .push(userSituaiton);
  }
}
