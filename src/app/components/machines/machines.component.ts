import { Component, OnInit } from '@angular/core';
import {Machines} from "../../model";
import {MachinesService} from "../../services/machines.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  currEmail: string ="";
  machines: Machines[] = [];
  id:string ="";
  name:string ="";
  status:string ="";
  dateFrom:string ="";
  dateTo:string ="";
  readPermission:string ="";
  deletePermission:string ="";
  updatePermission:string ="";
  destroyMachine:string ="";
  startMachine:string ="";
  stopMachine:string ="";
  restartMachine:string ="";
  isDisabledDestroy: boolean = true;
  isDisabledStart: boolean = true;
  isDisabledStop: boolean = true;
  isDisabledRestart: boolean = true;
  permission: string ="auto";
  color: string = "black"

  constructor(private machinesService: MachinesService,private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
    this.check();
  }

  check(){
      // @ts-ignore
      const base64Url = localStorage.getItem('token').split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      this.destroyMachine = JSON.parse(window.atob(base64)).DestroyMachinePermission;
      this.startMachine = JSON.parse(window.atob(base64)).StartMachinePermission;
      this.stopMachine = JSON.parse(window.atob(base64)).StopMachinePermission;
      this.restartMachine = JSON.parse(window.atob(base64)).RestartMachinePermission;

      if(this.destroyMachine == "0" || this.destroyMachine == "" || this.destroyMachine == null){
        this.isDisabledDestroy = !this.isDisabledDestroy;
      }
      if(this.startMachine == "0" || this.startMachine == "" || this.startMachine == null){
        this.isDisabledStart = !this.isDisabledStart;
      }

      if(this.stopMachine == "0" || this.stopMachine == "" || this.stopMachine == null){
        this.isDisabledStop = !this.isDisabledStop;
      }

      if(this.restartMachine == "0" || this.restartMachine == "" || this.restartMachine == null){
        this.isDisabledRestart = !this.isDisabledRestart;
      }
  }

  getUsers(){

    this.machines.forEach(value => {
      this.machines.pop();
    })
    this.machinesService.findUsers(this.currEmail);
    this.machines = this.machinesService.getList();
  }

  destroy(id: string){
    this.machinesService.destroy(id).subscribe((token) => {
    })
  }

  start(id: string){
    this.machinesService.start(id).subscribe((token) => {
    })
  }

  stop(id: string){
    this.machinesService.stop(id).subscribe((token) => {
    })


  }

  restart(id: string){
    this.machinesService.restart(id).subscribe((token) => {
    })

  }


  search(name: string, status: string,dateFrom: string,dateTo: string){
    this.machines.forEach(value => {
      this.machines.pop();
    })
    this.machinesService.search(name,status,dateFrom,dateTo);
    this.machines = this.machinesService.getList();
  }

  change(id:string){

    let machine = {id: id};

    let navigation: NavigationExtras = {
      state: {
        machine: machine,
      },
    };


    this.router.navigate(['/reserved'],navigation)

  }

}
