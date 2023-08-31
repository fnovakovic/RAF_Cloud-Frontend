import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {GuardService} from "./services/guard.service";

@Injectable({
  providedIn: 'root'
})
export class SearchMachineGuard implements CanActivate {
  searchMachine: string = "";
  constructor(private guardService: GuardService) { }
  // @ts-ignore
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree> {

    // @ts-ignore
    const base64Url = localStorage.getItem('token').split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    this.searchMachine = JSON.parse(window.atob(base64)).SearchMachinePermission;

    if (this.searchMachine == null || this.searchMachine == "0" || this.searchMachine == "") {
      return false;
    } else {
      return true;
    }

  }
}
