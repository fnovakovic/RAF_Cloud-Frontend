import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../model";

@Injectable({
  providedIn: 'root'
})
export class ReservedService {

  private readonly apiUrl = environment.postApi
  address: string = "";
  constructor(private httpClient: HttpClient) {
  }

  start(id: string,dateAndTime: string): Observable<any> {
    const body = { id: id, dateAndTime: dateAndTime};
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    return this.httpClient.patch<any>(`${this.apiUrl}/api/machines/reservedStart`,body,{headers: headers})
  }

  stop(id: string,dateAndTime: string): Observable<any> {
    const body = { id: id, dateAndTime: dateAndTime};
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    // localStorage.getItem('token').

    return this.httpClient.patch<any>(`${this.apiUrl}/api/machines/reservedStop`,body,{headers: headers})
  }

  restart(id: string,dateAndTime: string): Observable<any> {
    const body = { id: id, dateAndTime: dateAndTime};
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    return this.httpClient.patch<any>(`${this.apiUrl}/api/machines/reservedRestart`,body,{headers: headers})
  }

  check(name: string){
    const body = {name: "name"}; //OVO BRISI
    console.log("OVO JE NAMEEE " + name)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    // return this.httpClient.patch<any>(`${this.apiUrl}/api/machines/update/name=${name}`,body,{headers: headers})

    return this.httpClient.post<User>(`${this.apiUrl}/api/users/check`,body,{headers: headers})
  }
}
