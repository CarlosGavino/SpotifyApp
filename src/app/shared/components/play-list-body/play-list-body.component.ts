import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/Models/track.model';
import { TrackService } from 'src/app/modules/tracks/services/track.service';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {

  @Input() tracks: Array<TrackModel>=[];
  optionSort: {property: string , order: string} = {property: '', order: 'asc'}

  constructor(){

  }

  ngOnInit(): void {

  }

  changeSort(property: string){
    const {order}= this.optionSort;
    this.optionSort = {
      property : property,
      order: order === 'asc'? 'desc': 'asc'
    }
  }

}
