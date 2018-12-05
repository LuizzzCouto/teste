import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListaMensagens2Page } from '../pages/lista-mensagens2/lista-mensagens2';
import { ListaVisitantePage } from '../pages/lista-visitante/lista-visitante';
import { NoticiaVisitantePage } from '../pages/noticia-visitante/noticia-visitante';
import { FeedNoticiasPage } from '../pages/feed-noticias/feed-noticias';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Notícias', component: NoticiaVisitantePage },
      { title: 'Listar Mensagens 2', component: ListaMensagens2Page},
      { title: 'Visitantes', component: ListaVisitantePage },
      { title: 'Feed Teste', component: FeedNoticiasPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
