import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CreateMachineService {
  private readonly apiUrl = environment.postApi

  constructor(private httpClient: HttpClient) {
  }
  createMachine(Name: string): Observable<any> {
    const body = { name: Name };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    return this.httpClient.post<any>(`${this.apiUrl}/api/machines/create`,body,{headers: headers})
  }
}
