import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppButtonComponent } from './main-app-button.component';

@NgModule({
  declarations: [MainAppButtonComponent],
  imports: [CommonModule],
  exports: [MainAppButtonComponent]
})
export class MainAppButtonModule {}
