import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Noticia } from '../../models/noticia';
=======
import { Mensagem } from '../../models/mensagem';
>>>>>>> e26bd605655d4acccc8bbd88e21574931bebd33f


@Injectable()
export class FeedNoticiasProvider {
<<<<<<< HEAD

  private noticias;

  constructor(public http: HttpClient) {
    console.log('Hello FeedNoticiasProvider Provider');
  }

  listar() {
    return this.http.get('https://caps-ad.herokuapp.com/public/feed/listar').toPromise().then(
      data=>{
        this.noticias = data;
=======
  private feednoticia;

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosProvider Provider');
  }

  listar() {
    return this.http.get('https://caps-ad.herokuapp.com/public/feed/listar').toPromise()
    .then(
      data=>{
        this.feednoticia = data;
>>>>>>> e26bd605655d4acccc8bbd88e21574931bebd33f
        return data;
      }
    );
  }
<<<<<<< HEAD
}

=======

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
>>>>>>> e26bd605655d4acccc8bbd88e21574931bebd33f
