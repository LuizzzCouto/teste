import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedNoticiasProvider } from '../../providers/feed-noticias/feed-noticias';
import { NoticiaVisitantePage } from '../noticia-visitante/noticia-visitante';

@IonicPage()
@Component({
  selector: 'page-feed-noticias',
  templateUrl: 'feed-noticias.html',
})
export class FeedNoticiasPage {

  private lista: any = [];
  private noticias;
  cardnoticia:any;
  buscarcards:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private provedor: FeedNoticiasProvider){
       this.provedor.listar().then(
         conteudo => {
           this.lista = conteudo;
         }
       );
  }

  buscarCard (cardnoticia){
    this.navCtrl.push(NoticiaVisitantePage);
  }

  ionViewDidEnter(){
    this.provedor.listar().then(
      conteudo => {
        this.lista = conteudo;
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedNoticiasPage');
    
  }
}
