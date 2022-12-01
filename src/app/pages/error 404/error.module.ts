import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErroPageRoutingModule } from './error-routing.module';

import { ErroPage } from './error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErroPageRoutingModule
  ],
  declarations: [ErroPage]
})
export class ErroPageModule {}
