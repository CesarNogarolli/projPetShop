import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //!Trabalha com a API
import { Observable } from 'rxjs'; //!Trabalha com JSON

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public urlDog = 'https://dog.ceo/api/breeds/image/random';
  public imagem = '';
  dados: any = {};
  pet = {
    nome: '',
    idade: '',
    foto: '',
  };

  constructor(private http: HttpClient) {}

  cadastrar() {
    this.obterImagemAPI()
      .then((imagem) => {
        this.pet.foto = imagem;
        console.log(this.pet.nome);
        console.log(this.pet.idade);
        console.log(this.pet.foto);
      })
      .catch((error) => {});
  }

  buscarImagemApi() {
    return this.http.get(this.urlDog);
  }

  async obterImagemAPI() {
    try {
      const resp = await this.buscarImagemApi().toPromise();
      this.dados = resp;
      return this.dados.message;
    } catch (error) {
      throw error;
    }
  }

}
