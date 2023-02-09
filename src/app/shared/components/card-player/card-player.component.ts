import { Component, Input } from '@angular/core';
import { TrackModel } from 'src/app/core/Models/track.model';
import { MultimediService } from '../../services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };
  @Input() mode :string = 'big';

  constructor( private multimediaService: MultimediService){}

  sendPlay(track: TrackModel){
    this.multimediaService.trackInfo$.next(track);
   
  }
}
