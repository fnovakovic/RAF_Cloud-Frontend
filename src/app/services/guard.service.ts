import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model";

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  private readonly apiUrl = environment.postApi

  constructor(private httpClient: HttpClient) {
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
