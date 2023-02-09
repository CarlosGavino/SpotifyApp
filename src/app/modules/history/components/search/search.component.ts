import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

@Output() callbackData: EventEmitter<any>= new EventEmitter();
  src: string = '';

  constructor(){}

  callSearch(text: string){
    if(text.length > 3){
      this.callbackData.emit(text);
    }
  }

}
