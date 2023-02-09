import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environments';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TrackModel } from 'src/app/core/Models/track.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.API;

  constructor(
    private http: HttpClient
  ){  }

  private skipId(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  getAllTracks$(): Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map((dataRaw: any)=> dataRaw.data)
    )
  }

  getTracksRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipId(data, 3)),
        catchError((err) => {
          const { status, statusText } = err;
          console.warn('error en el servicio', status, statusText)
          return of([])
        })
      )
  };
}
