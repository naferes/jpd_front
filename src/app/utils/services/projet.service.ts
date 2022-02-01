import { Projet } from './../../models/Projet';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http:HttpClient) { }
  apiUrl : string =  environment.apiUrl; 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAllprojet():Observable<Projet[]>{
    return  this.http.get<Projet[]>(this.apiUrl + '/projets' , this.httpOptions);
  }
  deleteact(id):Observable<any>{
    return this.http.delete<any>(this.apiUrl + '/projets/' + id , this.httpOptions);

  }
  addactprojet(obj):Observable<Projet>{
    return this.http.post<any>(this.apiUrl+'/projets',obj,this.httpOptions);
  }
}
