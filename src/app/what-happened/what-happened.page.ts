import { Component, OnInit } from '@angular/core';
import { ionicStorage } from '../services/ionic-storage';
import { userCaseForm } from '../services/interfaces';
import { UtilitsMetods } from '../services/utilits';

@Component({
  selector: 'app-what-happened',
  templateUrl: './what-happened.page.html'
})
export class WhatHappenedPage implements OnInit {
  constructor(private ionicSto: ionicStorage, private util: UtilitsMetods) {}

  ngOnInit() {
    this.getUserName();
  }
  public userName = {};
  public emotionsImage = [
    { type: 'happy', path: '../../assets/emotionsFaces/happy.png' },
    { type: 'neutral', path: '../../assets/emotionsFaces/neutral.png' },
    { type: 'angry', path: '../../assets/emotionsFaces/angry.png' },
    { type: 'sad', path: '../../assets/emotionsFaces/sad.png' }
  ];
  public checkBoxEmotion = [
    { type: 'afraid', name: 'Medo' },
    { type: 'anxious', name: 'Ansioso' },
    { type: 'calm', name: 'Calmo' },
    { type: 'ashamed', name: 'Envergonhado' },
    { type: 'indifferent', name: 'Indiferente' },
    { type: 'embarassed', name: 'Embarassado' },
    { type: 'insecure', name: 'Inseguro' },
    { type: 'annoyed', name: 'Entediado' },
    { type: 'scared', name: 'Assustado' },
    { type: 'frustrated', name: 'Frustrado' }
  ];
  public userCaseModal: userCaseForm = {
    feeling: '',
    emotion: [],
    situation: '',
    thoughts: '',
    action: ''
  };
  private async getUserName() {
    let { name, lastname } = await this.ionicSto.getStorage('userLocalInfo');
    this.userName = {
      name,
      lastname
    };
    console.log(this.userName);
  }
  public setEmotionType(feeling) {
    this.userCaseModal.feeling = feeling;
    console.log(this.userCaseModal);
  }
  public setBoxEmotion(emotion) {
    this.userCaseModal.emotion.push(emotion);
    console.log(this.userCaseModal);
  }
  public getUserCase() {
    console.log(this.userCaseModal);
    this.userCaseModal = {
      feeling: '',
      emotion: [],
      situation: '',
      thoughts: '',
      action: ''
    };
    this.util.navigateRouter('home', false);
  }
}
