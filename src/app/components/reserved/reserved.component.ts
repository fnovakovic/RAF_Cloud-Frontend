import { Component, OnInit } from '@angular/core';
import {id} from "../../model";
import {EditService} from "../../services/edit.service";
import {Router} from "@angular/router";
import {ReservedService} from "../../services/reserved.service";

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})
export class ReservedComponent implements OnInit {
  startMachine: string = "";
  stopMachine: string = "";
  restartMachine: string = "";
  dateAndTimeStart: string = "";
  dateAndTimeStop: string = "";
  dateAndTimeRestart: string = "";
  isDisabledStart: boolean = true;
  isDisabledStop: boolean = true;
  isDisabledRestart: boolean = true;
  idd: string = "";

  constructor(private reservedService: ReservedService,private router: Router) { }
  id: id ={
    jwt: ''
  };
  ngOnInit(): void {
    this.idd = history.state.machine.id;
    this.check();
  }

  check(){
      // @ts-ignore
      const base64Url = localStorage.getItem('token').split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      this.startMachine = JSON.parse(window.atob(base64)).StartMachinePermission;
      this.stopMachine = JSON.parse(window.atob(base64)).StopMachinePermission;
      this.restartMachine = JSON.parse(window.atob(base64)).RestartMachinePermission;


      if(this.startMachine == "0" || this.startMachine == "" || this.startMachine == null){
        this.isDisabledStart = !this.isDisabledStart;
      }

      if(this.stopMachine== "0" || this.stopMachine == "" || this.stopMachine == null){
        this.isDisabledStop = !this.isDisabledStop;
      }

      if(this.restartMachine == "0" || this.restartMachine == "" || this.restartMachine == null){
        this.isDisabledRestart = !this.isDisabledRestart;
      }
  }

  setStart() {
    this.reservedService.start(this.idd,this.dateAndTimeStart).subscribe((token) => {
      this.router.navigate(['/machines'])
    })
    this.dateAndTimeStart= "";
  }

  setStop() {
    this.reservedService.stop(this.idd,this.dateAndTimeStop).subscribe((token) => {
      this.router.navigate(['/machines'])
    })
    this.dateAndTimeStop = "";
  }

  setRestart() {
    this.reservedService.restart(this.idd,this.dateAndTimeRestart).subscribe((token) => {
      this.router.navigate(['/machines'])
    })
    this.dateAndTimeRestart = "";
  }
}
