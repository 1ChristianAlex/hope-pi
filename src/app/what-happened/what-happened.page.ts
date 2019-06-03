import { Component, OnInit } from '@angular/core';
import { ionicStorage } from '../services/ionic-storage';
import { userCaseForm } from '../services/interfaces';
import { UtilitsMetods } from '../services/utilits';
import { FireBaseServiceService } from '../services/fire-base-service.service';

@Component({
  selector: 'app-what-happened',
  templateUrl: './what-happened.page.html'
})
export class WhatHappenedPage implements OnInit {
  constructor(
    private ionicSto: ionicStorage,
    private util: UtilitsMetods,
    private fb: FireBaseServiceService
  ) {}

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
  }
  public setEmotionType(feeling) {
    this.userCaseModal.feeling = feeling;
    document.querySelectorAll('.img-emotion-item').forEach(item => {
      item.classList.remove('active-emotion');
    });
    document.getElementById(feeling).classList.add('active-emotion');
  }
  public setBoxEmotion(emotion) {
    if (!this.userCaseModal.emotion.includes(emotion)) {
      this.userCaseModal.emotion.push(emotion);
    } else {
      let newEmotion = this.userCaseModal.emotion.filter(emo => {
        if (emo != emotion) {
          return emo;
        }
      });
      this.userCaseModal.emotion = newEmotion;
    }
  }
  public async getUserCase() {
    let { emotion, feeling } = this.userCaseModal;
    await this.sendSituation();
    this.util.navigateRouter('home', false);
    if (emotion.length > 0 && feeling != '') {
      this.userCaseModal = {
        feeling: '',
        emotion: [],
        situation: '',
        thoughts: '',
        action: ''
      };
    }
  }
  private async sendSituation() {
    let { uid } = await this.ionicSto.getStorage('userLocalInfo');
    this.fb.sendUserDataSitualtion(this.userCaseModal, uid);
  }
  private getMenssage;
}
