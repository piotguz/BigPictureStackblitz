import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'*',
      'Access-Control-Allow-Headers': '*'
    })
  };
  
  constructor(private http: HttpClient) { }

  getResultsForLocation(streetName: string,streetNumber: string, categories: string):Observable<any>{
    return this.http.get(`https://hackyeah2021.herokuapp.com/scoring/location/personal?streetName=${streetName}&streetNumber=${streetNumber}&radius=100&keywords=${categories}`,  this.httpOptions);
  }
}
