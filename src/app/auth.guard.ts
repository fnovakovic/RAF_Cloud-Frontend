import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {GuardService} from "./services/guard.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  readUser: string = "";
  constructor(private guardService: GuardService) { }
  // @ts-ignore
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree> {

    // @ts-ignore
    const base64Url = localStorage.getItem('token').split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    this.readUser = JSON.parse(window.atob(base64)).ReadUserPermission;


    if (this.readUser == null || this.readUser == "0" || this.readUser == "") {
      return false;
    } else {
      return true;
    }

  }

}
