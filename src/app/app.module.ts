import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { MensagensProvider } from '../providers/mensagens/mensagens';
import { ListaMensagens2Page } from '../pages/lista-mensagens2/lista-mensagens2';
import { VisitanteProvider } from '../providers/visitante/visitante';
import { NoticiaVisitantePage } from '../pages/noticia-visitante/noticia-visitante';
import { NoticiasProvider } from '../providers/noticias/noticias-visitante';
import { ListaVisitantePage } from '../pages/lista-visitante/lista-visitante';
import { AngularFireModule } from '@angular/fire';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireStorageModule } from '@angular/fire/storage/storage.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaMensagens2Page,
    ListaVisitantePage,
    NoticiaVisitantePage,
  ],
  imports: [ 
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireStorageModule,
    HttpClientModule, 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaMensagens2Page,
    ListaVisitantePage,
    NoticiaVisitantePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MensagensProvider,
    VisitanteProvider,
    NoticiasProvider,
  ]
})
export class AppModule {}
