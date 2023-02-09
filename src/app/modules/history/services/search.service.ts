import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private  readonly URL = environment.API;

  constructor( private http: HttpClient) { }

  searchTracks(ter: string): Observable<any>{
    return this.http.get(`${this.URL}/tracks?src=${ter}`)
    .pipe(
      map((x: any)=> x.data)
    )
  }
}
