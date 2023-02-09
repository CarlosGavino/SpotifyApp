import { Component, Input } from '@angular/core';
import { TrackModel } from 'src/app/core/Models/track.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent {
  @Input() title : string =''
  @Input() mode : 'small' | 'big' = 'big'
  @Input() dataTracks : Array<TrackModel>= []
}
