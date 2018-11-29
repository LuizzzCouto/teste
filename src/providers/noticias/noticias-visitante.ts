import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Noticia } from '../../models/noticia';

/*
  Generated class for the MensagensProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticiasProvider {

  private Noticia = [
    {
        "id" : "1",
        "conteudo" : "TESTE"
    }
]

  constructor(public http: HttpClient) {
    console.log('Hello MensagensProvider Provider');
  }

  listar() {
    ///Mensagens/
    return this.Noticia;
  }
  
}

