import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedNoticiasProvider } from '../../providers/feed-noticias/feed-noticias';
import { NoticiasProvider } from '../../providers/noticias/noticias-visitante';

/**
 * Generated class for the FeedNoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed-noticias',
  templateUrl: 'feed-noticias.html',
})
export class FeedNoticiasPage {


  private lista;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provedor: FeedNoticiasProvider
    ) {
      this.provedor.listar().then( 
        data => {
          this.lista = data;
        }
      )
      ;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaUsuarioPage');
  }
}
