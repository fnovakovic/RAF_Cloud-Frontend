import { Injectable } from '@angular/core';
import {Error, Machines, User} from "../model";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  err: Error[] = [];

  private readonly apiUrl = environment.postApi

  constructor(private httpClient: HttpClient) {
  }


  addUser(err: Error) {
    this.err.push(err);
  }

  getList(): Error[] {
    console.log('TRENUTNO STANJE LISTE PRI DOHVATANJU JE ' + this.err);
    return this.err;

  }

  findUsers(currUser:string){//OVO U ZAGRADAMA BRISI
    this.err.forEach(value => {
      this.err.pop();
    })
    const body = {currEmail: currUser}; //OVO BRISI

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    this.httpClient.post<Error[]>(`${this.apiUrl}/api/machines/allErrors`,body,{headers: headers}).subscribe(value => {

      this.err.forEach(value => {
        this.err.pop();
      })

      value.forEach(value1 => {
        this.addUser(value1);
      })

    })
  }

  // destroy(name:string){//OVO U ZAGRADAMA BRISI
  //
  //   const body = {name: name}; //OVO BRISI
  //   console.log("OVO JE NAMEEE " + name)
  //
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`
  //   })
  //
  //   // return this.httpClient.patch<any>(`${this.apiUrl}/api/machines/update/name=${name}`,body,{headers: headers})
  //
  //   return this.httpClient.patch<any>(`${this.apiUrl}/api/machines/update`,body,{headers: headers})
  //
  //
  //
  // }
  //
  // check(name: string){
  //   const body = {name: "name"}; //OVO BRISI
  //   console.log("OVO JE NAMEEE " + name)
  //
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`
  //   })
  //
  //   // return this.httpClient.patch<any>(`${this.apiUrl}/api/machines/update/name=${name}`,body,{headers: headers})
  //
  //   return this.httpClient.post<User>(`${this.apiUrl}/api/users/check`,body,{headers: headers})
  // }
  //
  // start(name:string){//OVO U ZAGRADAMA BRISI
  //
  //   const body = {name: name}; //OVO BRISI
  //   console.log("OVO JE NAMEEE " + name)
  //
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`
  //   })
  //
  //   // return this.httpClient.patch<any>(`${this.apiUrl}/api/machines/update/name=${name}`,body,{headers: headers})
  //
  //   return this.httpClient.patch<any>(`${this.apiUrl}/api/machines/start`,body,{headers: headers})
  //
  //
  //
  // }
  //
  // stop(name:string){//OVO U ZAGRADAMA BRISI
  //
  //   const body = {name: name}; //OVO BRISI
  //   // console.log("OVO JE NAMEEE " + name)
  //
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`
  //   })
  //
  //   // return this.httpClient.patch<any>(`${this.apiUrl}/api/machines/update/name=${name}`,body,{headers: headers})
  //
  //   return this.httpClient.patch<any>(`${this.apiUrl}/api/machines/stop`,body,{headers: headers})
  //
  //
  //
  // }
  //
  //
  // restart(name:string){//OVO U ZAGRADAMA BRISI
  //
  //   const body = {name: name}; //OVO BRISI
  //   // console.log("OVO JE NAMEEE " + name)
  //
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`
  //   })
  //
  //   // return this.httpClient.patch<any>(`${this.apiUrl}/api/machines/update/name=${name}`,body,{headers: headers})
  //
  //   return this.httpClient.patch<any>(`${this.apiUrl}/api/machines/restart`,body,{headers: headers})
  //
  //
  //
  // }
  //
  // search(name: string, status: string,dateFrom: string,dateTo: string){
  //
  //   this.machines.forEach(value => {
  //     this.machines.pop();
  //   })
  //   const body = { name: name, status: status,dateFrom: dateFrom,dateTo: dateTo};
  //
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`
  //   })
  //
  //   this.httpClient.post<any>(`${this.apiUrl}/api/machines/search`,body,{headers: headers}).subscribe(value => {
  //
  //     this.machines.forEach(value => {
  //       this.machines.pop();
  //     })
  //
  //     value.forEach((d: Machines) => {
  //       this.addUser(d);
  //     })
  //
  //   })
  //
  //   // return this.httpClient.post<any>(`${this.apiUrl}/api/machines/search`,body,{headers: headers})
  // }


}
