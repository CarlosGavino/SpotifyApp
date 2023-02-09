import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {

  listTracks$: Observable<any> = of([]);

  constructor( private searchService: SearchService){}

  receivData(data: string){
    this.listTracks$ = this.searchService.searchTracks(data)

  }

}
