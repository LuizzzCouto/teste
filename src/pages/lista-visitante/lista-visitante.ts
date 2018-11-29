import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisitanteProvider } from '../../providers/visitante/visitante';

/**
 * Generated class for the ListaVisitantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-visitante',
  templateUrl: 'lista-visitante.html',
})
export class ListaVisitantePage {

  private lista;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provedor: VisitanteProvider
  ) {
    this.provedor.listar().then( 
      data => {
        this.lista = data;
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaVisitantePage');
  }



}
