
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackModel } from 'src/app/core/Models/track.model';
import { TrackService } from '../../services/track.service';


@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {

  dataTrending : Array<TrackModel> = [];
  dataRandom : Array<TrackModel> = [];

  constructor( private trackService: TrackService){}

  ngOnInit(): void {

    
    this.loadDataTrending();
    this.loadDataRandom();
  }

  async loadDataTrending(): Promise<any>{
    this.dataTrending = await this.trackService.getAllTracks$().toPromise();
  }
 
  loadDataRandom(){
    this.trackService.getTracksRandom$().subscribe(res =>{
      this.dataRandom = [...res]
    })
    }

}
