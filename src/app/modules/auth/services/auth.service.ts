import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.API;

  constructor( private http: HttpClient) { }

  sendCredentials(email: string, password: string): Observable<any>{
    const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`, body)
  };


  suma(value1: number, value2: number): number{
    return value1 + value2;
  }
}
