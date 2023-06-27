import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemDogsPage } from './listagem-dogs.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemDogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemDogsPageRoutingModule {}
