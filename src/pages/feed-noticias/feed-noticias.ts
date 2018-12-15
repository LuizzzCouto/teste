import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedNoticiasProvider } from '../../providers/feed-noticias/feed-noticias';
<<<<<<< HEAD
=======
import { NoticiasProvider } from '../../providers/noticias/noticias-visitante';

/**
 * Generated class for the FeedNoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
>>>>>>> e26bd605655d4acccc8bbd88e21574931bebd33f

@IonicPage()
@Component({
  selector: 'page-feed-noticias',
  templateUrl: 'feed-noticias.html',
})
export class FeedNoticiasPage {

<<<<<<< HEAD
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
=======

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
>>>>>>> e26bd605655d4acccc8bbd88e21574931bebd33f

  ionViewDidEnter(){
    this.provedor.listar().then(
      conteudo => {
        this.lista = conteudo;
      }
    );
  }


  ionViewDidLoad() {
<<<<<<< HEAD
    console.log('ionViewDidLoad FeedNoticiasPage');
    
=======
    console.log('ionViewDidLoad ListaUsuarioPage');
>>>>>>> e26bd605655d4acccc8bbd88e21574931bebd33f
  }
}
