import { Component, OnInit } from '@angular/core';
import {id} from "../../model";
import {Router} from "@angular/router";
import {EditService} from "../../services/edit.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userEmail: string = "";
  currEmail: string = "";
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

  constructor(private textSimilarityService: EditService,private router: Router) { }

  ngOnInit(): void {

    console.log(history.state.user);
    // this.currEmail = history.state.user.email
    this.userEmail = history.state.user.email;
    this.email = history.state.user.email;
    this.firstName = history.state.user.firstName;
    this.lastName = history.state.user.lastName;
    this.createPermission = history.state.user.createPermission;
    this.readPermission = history.state.user.readPermission;
    this.deletePermission = history.state.user.deletePermission;
    this.updatePermission = history.state.user.updatePermission;
    this.password = history.state.user.password;
    this.createMachine = history.state.user.createMachine;
    this.searchMachine = history.state.user.searchMachine;
    this.startMachine = history.state.user.startMachine;
    this.stopMachine = history.state.user.stopMachine;
    this.restartMachine = history.state.user.restartMachine;
    this.destroyMachine = history.state.user.destroyMachine;

  }

  setText() {

    // @ts-ignore
    // this.currEmail = localStorage.getItem('currUser');


    this.textSimilarityService.update(this.currEmail,this.password,this.userEmail,this.firstName,this.lastName,this.email,this.createPermission,this.readPermission,this.deletePermission,this.updatePermission,this.createMachine,this.searchMachine,this.startMachine,this.stopMachine,this.restartMachine,this.destroyMachine).subscribe((token) => {


      this.textSimilarityService.tkn(this.currEmail).subscribe((token) => {

        this.id.jwt = token.jwt;
        this.textSimilarityService.setToken(this.id.jwt);

      })
      this.router.navigate(['/history'])
    })


  }

}
