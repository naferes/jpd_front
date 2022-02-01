import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dispatching } from './../../models/Dispatching';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DispatchingService {

  constructor(private http:HttpClient) { }
  apiUrl : string = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    getAllDispatching():Observable<Dispatching[]>{
      return  this.http.get<Dispatching[]>(this.apiUrl + '/dispatching' , this.httpOptions);
      
    
  }
  adddispatching(obj):Observable<Dispatching>{
    return this.http.post<any>(this.apiUrl+'/dispatching',obj,this.httpOptions);
  }

  deletedispatching(id):Observable<any>{
    return this.http.delete<any>(this.apiUrl + '/dispatching/' + id , this.httpOptions);

  }
  getDispatching(id):Observable<Dispatching>{
    return this.http.get<Dispatching>(this.apiUrl + '/dispatching/'+ id,this.httpOptions);
  }
  editdispatching(id,dispatching:Dispatching):Observable<Dispatching>{
    return this.http.put<Dispatching>(this.apiUrl + '/dispatching/'+ id,dispatching,this.httpOptions);

  }

}
