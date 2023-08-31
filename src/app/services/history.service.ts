import { Injectable } from '@angular/core';
import { User} from "../model";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  users: User[] = [];

  private readonly apiUrl = environment.postApi

  constructor(private httpClient: HttpClient) {
  }


  addUser(user: User) {
    this.users.push(user);
  }

  getList(): User[] {
    console.log('TRENUTNO STANJE LISTE PRI DOHVATANJU JE ' + this.users);
    return this.users;

  }

  findUsers(currUser:string){//OVO U ZAGRADAMA BRISI
    this.users.forEach(value => {
      this.users.pop();
    })
    const body = {currEmail: currUser}; //OVO BRISI

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

     this.httpClient.post<User[]>(`${this.apiUrl}/api/users/all`,body,{headers: headers}).subscribe(value => {

       this.users.forEach(value => {
         this.users.pop();
       })

       value.forEach(value1 => {
         this.addUser(value1);
       })

     })
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
