import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {GuardService} from "./services/guard.service";

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //
  //   if(localStorage.getItem('updatePermission') == null || localStorage.getItem('updatePermission') == "0" || localStorage.getItem('updatePermission') == ""){
  //     return false;
  //   }else{
  //     return true;
  //   }
  //
  // }

  updateUser: string = "";
  constructor(private guardService: GuardService) { }
  // @ts-ignore
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree> {

    // @ts-ignore
    const base64Url = localStorage.getItem('token').split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    this.updateUser = JSON.parse(window.atob(base64)).UpdateUserPermission;

    if (this.updateUser == null || this.updateUser == "0" || this.updateUser == "") {
      return false;
    } else {
      return true;
    }

  }

}
