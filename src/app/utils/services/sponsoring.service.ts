import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sponsoring } from 'src/app/models/Sponsoring';

@Injectable({
  providedIn: 'root'
})
export class SponsoringService {

  constructor(private http:HttpClient) { }
  apiUrl : string =  environment.apiUrl; 
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAllSponsoring():Observable<Sponsoring[]>{
    return  this.http.get<Sponsoring[]>(this.apiUrl + '/partenaire_sponsor' , this.httpOptions);
  }
  deleteact(id):Observable<any>{
    return this.http.delete<any>(this.apiUrl + '/partenaire_sponsor/' + id , this.httpOptions);

  }
  addact(obj):Observable<Sponsoring>{
    return this.http.post<any>(this.apiUrl+'/partenaire_sponsor',obj,this.httpOptions);
  }
  
}
