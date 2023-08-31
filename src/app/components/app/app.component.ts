import { Component } from '@angular/core';
import {HistoryService} from "../../services/history.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisabledCreate: boolean = true;
  createUser: string ="";
  constructor() {
    this.check();
  }

  check(){
      // @ts-ignore
      const base64Url = localStorage.getItem('token').split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      this.createUser = JSON.parse(window.atob(base64)).CreateUserPermission;
      if (this.createUser == "0" || this.createUser == "" || this.createUser == null) {
        this.isDisabledCreate = !this.isDisabledCreate;
      }

  }

}
