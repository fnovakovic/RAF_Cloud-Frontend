import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {GuardService} from "./services/guard.service";

@Injectable({
  providedIn: 'root'
})
export class AllGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //
  //   if((localStorage.getItem('createPermission') == null || localStorage.getItem('createPermission') == "0" || localStorage.getItem('createPermission') == "") &&
  //     (localStorage.getItem('deletePermission') == null || localStorage.getItem('deletePermission') == "0" || localStorage.getItem('deletePermission') == "" )&&
  //       (localStorage.getItem('readPermission') == null || localStorage.getItem('readPermission') == "0" || localStorage.getItem('readPermission') == "" )&&
  //         (localStorage.getItem('updatePermission') == null || localStorage.getItem('updatePermission') == "0" || localStorage.getItem('updatePermission') == "")){
  //
  //     alert("Nemate ni jednu permisiju !!!");
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }

  createUser: string = "";
  deleteUser: string = "";
  readUser: string = "";
  updateUser: string = "";
  createMachine: string = "";
  searchMachine: string = "";
  startMachine: string = "";
  stopMachine: string = "";
  restartMachine: string = "";
  destroyMachine: string = "";
  constructor(private guardService: GuardService) { }
  // @ts-ignore
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree> {

    // @ts-ignore
    const base64Url = localStorage.getItem('token').split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    this.createUser = JSON.parse(window.atob(base64)).CreateUserPermission;
    this.deleteUser = JSON.parse(window.atob(base64)).DeleteUserPermission;
    this.readUser = JSON.parse(window.atob(base64)).ReadUserPermission;
    this.updateUser = JSON.parse(window.atob(base64)).UpdateUserPermission;
    this.createMachine = JSON.parse(window.atob(base64)).CreateMachinePermission;
    this.searchMachine = JSON.parse(window.atob(base64)).SearchMachinePermission;
    this.startMachine = JSON.parse(window.atob(base64)).StartMachinePermission;
    this.stopMachine = JSON.parse(window.atob(base64)).StopMachinePermission;
    this.restartMachine = JSON.parse(window.atob(base64)).RestartMachinePermission;
    this.destroyMachine = JSON.parse(window.atob(base64)).DestroyMachinePermission;


    if ((this.createUser == null || this.createUser == "0" || this.createUser == "") &&
      (this.deleteUser == null || this.deleteUser == "0" || this.deleteUser == "") &&
      (this.readUser == null || this.readUser == "0" || this.readUser == "") &&
      (this.updateUser == null || this.updateUser == "0" || this.updateUser == "")&&
      (this.createMachine == null || this.createMachine == "0" || this.createMachine == "")&&
      (this.searchMachine == null || this.searchMachine == "0" || this.searchMachine == "")&&
      (this.startMachine == null || this.startMachine == "0" || this.startMachine == "")&&
      (this.stopMachine == null || this.stopMachine == "0" || this.stopMachine == "")&&
      (this.restartMachine == null || this.restartMachine == "0" || this.restartMachine == "")&&
      (this.destroyMachine == null || this.destroyMachine == "0" || this.destroyMachine == "")) {
      alert("Nemate ni jednu permisijuuu !!!");
      return false;
    } else {
      return true;
    }

  }

}
