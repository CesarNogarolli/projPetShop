import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemDogsPageRoutingModule } from './listagem-dogs-routing.module';

import { ListagemDogsPage } from './listagem-dogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemDogsPageRoutingModule
  ],
  declarations: [ListagemDogsPage]
})
export class ListagemDogsPageModule {}
