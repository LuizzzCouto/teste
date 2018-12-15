import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedNoticiasProvider } from '../../providers/feed-noticias/feed-noticias';

@IonicPage()
@Component({
  selector: 'page-noticia-visitante',
  templateUrl: 'noticia-visitante.html',
})
export class NoticiaVisitantePage {
  
  private lista: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private provedor: FeedNoticiasProvider){
      this.provedor.listar().then(
        noticias => {
          this.lista = noticias;
        }
      );
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiaVisitantePage');
  }

}
