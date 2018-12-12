import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensagem } from '../../models/mensagem';


@Injectable()
export class FeedNoticiasProvider {
  private feednoticia;

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosProvider Provider');
  }

  listar() {
    return this.http.get('https://caps-ad.herokuapp.com/public/feed/listar').toPromise()
    .then(
      data=>{
        this.feednoticia = data;
        return data;
      }
    );
  }

  listarPorId(id){
    let feednoticia = this.feednoticia
    .filter(
      function(elemento) {
        return elemento.id == id
      }
    )
    return feednoticia[0];
  }

}
