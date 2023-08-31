import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {id, User} from "../model";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly apiUrl = environment.postApi

  constructor(private httpClient: HttpClient) {
  }

  findUser(email: string,password:string): Observable<id> {
    const body = { email: email, password: password };
    return this.httpClient.post<id>(`${this.apiUrl}/auth/login`,body)
  }

  findUser2(email: string,token: string): Observable<User> {
    const body = { email: email};
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    return this.httpClient.post<User>(`${this.apiUrl}/api/users/check`,body,{headers: headers})
  }


}
