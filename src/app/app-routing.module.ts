import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Create} from "./components/create/create";
import {HistoryComponent} from "./components/history/history.component";
import {LoginComponent} from "./components/login/login.component";
import {EditComponent} from "./components/edit/edit.component";
import {AuthGuard} from "./auth.guard";
import {EditGuard} from "./edit-guard.guard";
import {CreateGuard} from "./create.guard";
import {CreateMachinesComponent} from "./components/create-machines/create-machines.component";
import {MachinesComponent} from "./components/machines/machines.component";
import {ErrorHistoryComponent} from "./components/error-history/error-history.component";
import {CreateMachineGuard} from "./create-machine.guard";
import {SearchMachineGuard} from "./search-machine.guard";
import {ReservedComponent} from "./components/reserved/reserved.component";

const routes: Routes = [

  {
    path: "create",
    component: Create,
    canActivate: [CreateGuard],
  },
  {
    path: "history",
    component: HistoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "edit",
    component: EditComponent,
    canActivate: [EditGuard],
  },
  {
    path: "createMachine",
    component: CreateMachinesComponent,
    canActivate: [CreateMachineGuard]
  },
  {
    path: "machines",
    component: MachinesComponent,
    canActivate: [SearchMachineGuard]
  },
  {
    path: "error",
    component: ErrorHistoryComponent
  },
  {
    path: "reserved",
    component: ReservedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
