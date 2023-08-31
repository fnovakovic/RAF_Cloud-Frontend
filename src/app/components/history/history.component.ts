import { Component, OnInit } from '@angular/core';
import {User} from "../../model";
import {HistoryService} from "../../services/history.service";
import {Router} from "@angular/router";
import { NavigationExtras } from "@angular/router";
import {EditService} from "../../services/edit.service";
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  currEmail: string ="";
  users: User[] = [];

  email:string ="";
  firstName:string ="";
  lastName:string ="";
  createPermission:string ="";
  readPermission:string ="";
  deletePermission:string ="";
  updatePermission:string ="";
  createMachine:string ="";
  searchMachine:string ="";
  startMachine:string ="";
  stopMachine:string ="";
  restartMachine:string ="";
  destroyMachine:string ="";

  createUser: string = "";
  deleteUser: string = "";
  updateUser: string = "";
  readUser: string = "";

  isDisabled: boolean = true;
  permission: string ="auto";
  color: string = "black"

  constructor(private historyService: HistoryService,private router: Router,private textSimilarityService: EditService) { }

  ngOnInit(): void {
     this.getUsers();
     this.check();
  }

  check(){
      // @ts-ignore
      const base64Url = localStorage.getItem('token').split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      this.createUser = JSON.parse(window.atob(base64)).CreateUserPermission;
      this.deleteUser = JSON.parse(window.atob(base64)).DeleteUserPermission;
      this.updateUser = JSON.parse(window.atob(base64)).UpdateUserPermission;

      if(this.deleteUser == "0" || this.deleteUser == "" || this.deleteUser == null){
        this.isDisabled = !this.isDisabled;
      }

  }
  checkPermission(): string{

    if(this.updateUser == "0" || this.updateUser == "" || this.updateUser == null){
      return this.permission = "none";
    }else {
      return this.permission = "auto";
    }

  }
  colorr():string{
    if(this.updateUser == "0" || this.updateUser == "" || this.updateUser == null){
      return this.permission = "gray";
    }else{
      return this.permission = "black";
    }

  }

  getUsers(){

    this.users.forEach(value => {
      this.users.pop();
    })

    this.historyService.findUsers(this.currEmail); //OVO U ZAGRADAMA BRISI
    this.users = this.historyService.getList();
  }

  change(email:string,firstName:string,lastName:string,createPermission:string,readPermission:string,deletePermission:string,updatePermission:string,password: string,createMachine: string,searchMachine: string,startMachine: string,stopMachine: string,restartMachine: string,destroyMachine: string){

    let user = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      createPermission: createPermission,
      readPermission: readPermission,
      deletePermission: deletePermission,
      updatePermission: updatePermission,
      password : password,
      createMachine : createMachine,
      searchMachine : searchMachine,
      startMachine : startMachine,
      stopMachine : stopMachine,
      restartMachine : restartMachine,
      destroyMachine : destroyMachine};

    let navigation: NavigationExtras = {
      state: {
        user: user,
      },
    };


    this.router.navigate(['/edit'],navigation)

  }

  delete(email:string){
    this.textSimilarityService.findPost(this.firstName,this.lastName,email,this.createPermission,this.readPermission,this.deletePermission,this.updatePermission).subscribe((token) => {
      //this.router.navigate(['/history'],)
    })

    }

}
