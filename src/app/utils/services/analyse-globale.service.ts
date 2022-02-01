import { Originprospection } from './../../models/Originprospection';
import { Originprojet } from './../../models/Originprojet';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyseGlobaleService {
  ca:any=[];

  constructor(private http:HttpClient) { }
  apiUrl : string = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getOriginProjet():Observable<Originprojet[]>{
    return  this.http.get<Originprojet[]>(this.apiUrl + '/analyse/origine/projets' , this.httpOptions);
    
  
}
getOriginPros():Observable<Originprospection[]>{
  return  this.http.get<Originprospection[]>(this.apiUrl + '/analyse/origine/partSponsor' , this.httpOptions);
  
}
getCA():Observable<any>{
  return  this.http.get<any>(this.apiUrl + '/analyse/CA_global' , this.httpOptions);
  
}
}
