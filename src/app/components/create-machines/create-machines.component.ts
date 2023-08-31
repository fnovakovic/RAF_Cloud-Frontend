import { Component, OnInit } from '@angular/core';
import {CreateMachineService} from "../../services/create-machine.service";
import {TokenService} from "../../services/token.service";
// import {CreateService} from "../../services/create.service";
// import {id} from "../../model";
// import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-create-machines',
  templateUrl: './create-machines.component.html',
  styleUrls: ['./create-machines.component.css']
})
export class CreateMachinesComponent implements OnInit {
  Name: string ="";
  constructor(private createMachineService: CreateMachineService) { }

  ngOnInit(): void {
  }

  setText() {
    if (this.Name == "" ) {
      alert("Neko polje je prazno!");
    } else {
      // @ts-ignore
      this.createMachineService.createMachine(this.Name).subscribe((token) => {
      })
      this.Name = "";

    }
  }

}
