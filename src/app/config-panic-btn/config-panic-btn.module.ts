import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfigPanicBtnPage } from './config-panic-btn.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigPanicBtnPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfigPanicBtnPage]
})
export class ConfigPanicBtnPageModule {}
