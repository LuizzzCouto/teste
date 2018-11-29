import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiaVisitantePage } from './noticia-visitante';

@NgModule({
  declarations: [
    NoticiaVisitantePage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiaVisitantePage),
  ],
})
export class NoticiaVisitantePageModule {}
