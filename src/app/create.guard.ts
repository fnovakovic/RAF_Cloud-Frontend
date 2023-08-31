import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {HistoryService} from "./services/history.service";
import {EditService} from "./services/edit.service";
import {GuardService} from "./services/guard.service";
import {LoginComponent} from "./components/login/login.component";
import {AppComponent} from "./components/app/app.component";

@Injectable({
  providedIn: 'root'
})
export class CreateGuard implements CanActivate {
  createUser: string = "";

  constructor(private guardService: GuardService) { }//, private comp: AppComponent
  // @ts-ignore
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree> {

    // @ts-ignore
    const base64Url = localStorage.getItem('token').split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    this.createUser = JSON.parse(window.atob(base64)).CreateUserPermission;


    if (this.createUser == null || this.createUser == "0" || this.createUser == "") {
      return false;
    } else {
      return true;
    }



  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //
  //   if (this.comp.createUser == null || this.comp.createUser == "0" || this.comp.createUser == "") {
  //     return false;
  //   } else {
  //     return true;
  //   }
  //
  // }

}
