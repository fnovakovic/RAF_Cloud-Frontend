import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {GuardService} from "./services/guard.service";

@Injectable({
  providedIn: 'root'
})
export class CreateMachineGuard  {
  createMachine: string = "";
  constructor(private guardService: GuardService) { }
  // @ts-ignore
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree> {

    // @ts-ignore
    const base64Url = localStorage.getItem('token').split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    this.createMachine = JSON.parse(window.atob(base64)).CreateMachinePermission;



    if (this.createMachine == null || this.createMachine == "0" || this.createMachine == "") {
      return false;
    } else {
      return true;
    }

  }

}
