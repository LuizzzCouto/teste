import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedNoticiasProvider } from '../../providers/feed-noticias/feed-noticias';

@IonicPage()
@Component({
  selector: 'page-feed-noticias',
  templateUrl: 'feed-noticias.html',
})
export class FeedNoticiasPage {

  private lista: any = [];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private provedor: FeedNoticiasProvider){
       this.provedor.listar().then(
         conteudo => {
           this.lista = conteudo;
         }
       );
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
