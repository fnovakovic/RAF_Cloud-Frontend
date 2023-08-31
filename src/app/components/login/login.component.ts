import { Component, OnInit } from '@angular/core';
import {id} from "../../model";
import {LoginService} from "../../services/login.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string ="";
  password: string ="";

  id: id ={
    jwt: ''
  };

  constructor(private loginService: LoginService,private tokenService:TokenService,private router: Router) { }

  ngOnInit(): void {
  }


  Login() {
    this.loginService.findUser(this.email,this.password).subscribe((token) => {

      this.id.jwt = token.jwt;

      this.loginService.findUser2(this.email,token.jwt).subscribe((usr) => {

        if((usr.createUser == "0" || usr.createUser == "" || usr.createUser == null ) &&
          (usr.deleteUser == "0" || usr.deleteUser == "" || usr.deleteUser == null ) &&
          (usr.readUser == "0" || usr.readUser == "" || usr.readUser == null) &&
          (usr.updateUser == "0" || usr.updateUser == "" || usr.updateUser == null)&&
          (usr.createMachine == "0" || usr.createMachine == "" || usr.createMachine == null)&&
          (usr.searchMachine == "0" || usr.searchMachine == "" || usr.searchMachine == null)&&
          (usr.startMachine == "0" || usr.startMachine == "" || usr.startMachine == null)&&
          (usr.stopMachine == "0" || usr.stopMachine == "" || usr.stopMachine == null)&&
          (usr.restartMachine == "0" || usr.restartMachine == "" || usr.restartMachine == null)&&
          (usr.destroyMachine == "0" || usr.destroyMachine == "" || usr.destroyMachine == null)){

          alert("Nemate ni jednu permisiju !!!");

        }

      })


      this.tokenService.setToken(this.id.jwt);
      this.email = "";
      this.password = "";

    })
    // this.router.navigate(['/'])
  }

}
