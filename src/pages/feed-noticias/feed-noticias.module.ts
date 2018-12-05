import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedNoticiasPage } from './feed-noticias';

@NgModule({
  declarations: [
    FeedNoticiasPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedNoticiasPage),
  ],
})
export class FeedNoticiasPageModule {}
