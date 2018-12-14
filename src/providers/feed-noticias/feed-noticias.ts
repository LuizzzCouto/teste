import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Noticia } from '../../models/noticia';


@Injectable()
export class FeedNoticiasProvider {

  private noticias;

  constructor(public http: HttpClient) {
    console.log('Hello FeedNoticiasProvider Provider');
  }

  listar() {
    return this.http.get('https://caps-ad.herokuapp.com/public/feed/listar').toPromise().then(
      data=>{
        this.noticias = data;
        return data;
      }
    );
  }
}

