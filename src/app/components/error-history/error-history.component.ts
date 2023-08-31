import { Component, OnInit } from '@angular/core';
import {ErrorService} from "../../services/error.service";
import {Error} from "../../model";
@Component({
  selector: 'app-error-history',
  templateUrl: './error-history.component.html',
  styleUrls: ['./error-history.component.css']
})
export class ErrorHistoryComponent implements OnInit {
  currEmail: string ="";
  err: Error[] = [];
  // name:string ="";
  // status:string ="";
  // readPermission:string ="";
  // deletePermission:string ="";
  // updatePermission:string ="";
  // permission: string ="auto";
  // color: string = "black"

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.getUsers();

  }

  getUsers(){

    this.err.forEach(value => {
      this.err.pop();
    })

    this.errorService.findUsers(this.currEmail); //OVO U ZAGRADAMA BRISI
    this.err = this.errorService.getList();

  }


}
