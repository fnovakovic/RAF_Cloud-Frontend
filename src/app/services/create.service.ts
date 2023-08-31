import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private readonly apiUrl = environment.postApi

  constructor(private httpClient: HttpClient) {
  }

  createUser(currEmail: string,firstName: string,lastName:string,email: string,password:string,createPermission: string,readPermission:string,deletePermission: string,updatePermission:string,createMachine: string,searchMachine: string,startMachine: string,stopMachine: string,restartMachine: string,destroyMachine: string): Observable<any> {
    const body = { first_name: firstName, last_name: lastName,
      email: email, password: password,
      createUser: createPermission, readUser: readPermission,
      deleteUser: deletePermission, updateUser: updatePermission,
      currEmail: currEmail,createMachine : createMachine,
      searchMachine : searchMachine,
      startMachine : startMachine,
      stopMachine : stopMachine,
      restartMachine : restartMachine,
      destroyMachine : destroyMachine
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    return this.httpClient.post<any>(`${this.apiUrl}/api/users/create`,body,{headers: headers})
  }




}
