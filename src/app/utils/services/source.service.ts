import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Source } from 'src/app/models/Source';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  constructor(private http:HttpClient) { }
  apiUrl : string = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getSourceProjet():Observable<Source[]>{
    return  this.http.get<Source[]>(this.apiUrl + '/analyse/statut/projets' , this.httpOptions);
    
  
}
getSourcePros():Observable<Source[]>{
  return  this.http.get<Source[]>(this.apiUrl + '/analyse/statut/partSponsor' , this.httpOptions);
  
}
getstaut():Observable<any>{
  return  this.http.get<any>(this.apiUrl + '/analyse/statut' , this.httpOptions);
  

}
}
