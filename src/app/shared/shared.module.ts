import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBardComponent } from './components/side-bard/side-bard.component';
import { MediaPlayerComponent } from './components/media-player/medi-player.component';
import { RouterModule } from '@angular/router';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { ImgBrokenDirective } from './directive/img-broken.directive';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { OrderListPipe } from './pipes/order-list.pipe';



@NgModule({
  declarations: [
    SideBardComponent,
    MediaPlayerComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    ImgBrokenDirective,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBardComponent,
    MediaPlayerComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent
  ]
})
export class SharedModule { }
