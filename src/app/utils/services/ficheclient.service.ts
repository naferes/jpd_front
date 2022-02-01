import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FicheClient } from 'src/app/models/FicheClient';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FicheclientService {

  constructor(private http:HttpClient) {}
  apiUrl : string = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAllFiches():Observable<FicheClient[]>{
    return  this.http.get<FicheClient[]>(this.apiUrl + '/ficheclient' , this.httpOptions);
  }

  addFiche(obj):Observable<FicheClient>{
    return this.http.post<any>(this.apiUrl+'/ficheclient',obj,this.httpOptions);
  }

  deleteFicheclinet(id):Observable<any>{
    return this.http.delete<any>(this.apiUrl + '/ficheclient/' + id , this.httpOptions);

  }
  getfiche(id):Observable<FicheClient>{
    return this.http.get<FicheClient>(this.apiUrl + '/ficheclient/'+ id,this.httpOptions);
  }
  editfiche(id,fiche:FicheClient):Observable<FicheClient>{
    return this.http.put<FicheClient>(this.apiUrl + '/ficheclient/'+ id,fiche,this.httpOptions);

  }
}
