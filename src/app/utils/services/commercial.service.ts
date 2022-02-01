import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  constructor(private http:HttpClient) { }
  apiUrl : string = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getprojet(id):Observable<any>{
    return this.http.get<any>(this.apiUrl + '/analyse/origine/projets/'+ id,this.httpOptions);
  }
  getspon(id):Observable<any>{
    return this.http.get<any>(this.apiUrl + '/analyse/origine/partSponsor/'+ id,this.httpOptions);
  }
  getstatprojet(id):Observable<any>{
    return this.http.get<any>(this.apiUrl + '/analyse/statut/projets/'+ id,this.httpOptions);
  }
  getstatspon(id):Observable<any>{
    return this.http.get<any>(this.apiUrl + '/analyse/statut/partSponsor/'+ id,this.httpOptions);
  }
}