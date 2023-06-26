import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dados: any = {};
  pet = {
    nome: '',
    idade: '',
    foto: '',
  };

  constructor() {}

  cadastrar() {
    console.log(this.pet.nome);
    console.log(this.pet.idade);
  }
}
