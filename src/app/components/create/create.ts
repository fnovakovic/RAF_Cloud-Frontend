import { Component, OnInit } from '@angular/core';
import {CreateService} from "../../services/create.service";
import {id} from "../../model";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.html',
  styleUrls: ['./create.css']
})
export class Create implements OnInit {
  currEmail: string ="";
  email: string ="";
  password: string ="";
  firstName: string ="";
  lastName: string ="";
  createPermission: string ="";
  readPermission: string ="";
  deletePermission: string ="";
  updatePermission: string ="";
  createMachine:string ="";
  searchMachine:string ="";
  startMachine:string ="";
  stopMachine:string ="";
  restartMachine:string ="";
  destroyMachine:string ="";
  id: id ={
    jwt: ''
  };

  constructor(private textSimilarityService: CreateService, private tokenService:TokenService) { }

  ngOnInit(): void {

  }

  setText() {
    if (this.firstName == "" || this.lastName == "" || this.email == "" || this.password == "" || this.createPermission == "" || this.readPermission == "" || this.deletePermission == "" || this.updatePermission == "" || this.createMachine == "" || this.searchMachine == "" || this.startMachine == "" || this.stopMachine == "" || this.restartMachine == "" || this.destroyMachine == "") {
      alert("Neko polje je prazno!");
    } else {
      // @ts-ignore
      this.currEmail = localStorage.getItem('currUser');
      this.textSimilarityService.createUser(this.currEmail, this.firstName, this.lastName, this.email, this.password, this.createPermission, this.readPermission, this.deletePermission, this.updatePermission,this.createMachine,this.searchMachine,this.startMachine,this.stopMachine,this.restartMachine,this.destroyMachine).subscribe((token) => {

      })

      this.email = "";
      this.password = "";
      this.firstName = "";
      this.lastName = "";
      this.createPermission = "";
      this.readPermission = "";
      this.deletePermission = "";
      this.updatePermission = "";
      this.createMachine = "";
      this.searchMachine = "";
      this.startMachine = "";
      this.stopMachine = "";
      this.restartMachine = "";
      this.destroyMachine = "";
    }
  }

}
