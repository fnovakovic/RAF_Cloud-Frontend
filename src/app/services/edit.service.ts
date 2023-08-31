import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EditService {

  private readonly apiUrl = environment.postApi
  address: string = "";
  constructor(private httpClient: HttpClient) {
  }



  findPost(firstName: string,lastName:string,email: string,createPermission: string,readPermission:string,deletePermission: string,updatePermission:string): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    return this.httpClient.delete<any>(`${this.apiUrl}/api/users/delete/email=${email}`,{headers: headers})
  }

  findPost2(email: string): Observable<any> {
    const body = { email: email};
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    return this.httpClient.post<any>(`${this.apiUrl}/api/users/search`,body,{headers: headers})
  }


  update(currEmail: string,password: string,userEmail:string,firstName: string,lastName:string,email: string,createPermission: string,readPermission:string,deletePermission: string,updatePermission:string,createMachine: string,searchMachine: string,startMachine: string,stopMachine: string,restartMachine: string,destroyMachine: string): Observable<any> {
    const body = { first_name: firstName, last_name: lastName,
      email: email,currEmail:userEmail,password: password,
      createUser: createPermission, readUser: readPermission,
      deleteUser: deletePermission, updateUser: updatePermission,
      currUser: currEmail,createMachine : createMachine,
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

    return this.httpClient.patch<any>(`${this.apiUrl}/api/users/update`,body,{headers: headers})
  }

  tkn(currEmail: string): Observable<any> {

    const body = { first_name: currEmail};
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    return this.httpClient.post<any>(`${this.apiUrl}/api/users/tkn`,body,{headers: headers})
  }

  setToken(token: string): void {
    try {
      localStorage.removeItem('token');
    }catch (e) {
      console.log(e);
    }

    localStorage.setItem('token',token);
  }

}
