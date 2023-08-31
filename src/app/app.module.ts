import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./components/app/app.component";
import { HistoryComponent } from './components/history/history.component';
import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './components/edit/edit.component';
import {Create} from "./components/create/create";
import { MachinesComponent } from './components/machines/machines.component';
import { CreateMachinesComponent } from './components/create-machines/create-machines.component';
import { ErrorHistoryComponent } from './components/error-history/error-history.component';
import { ReservedComponent } from './components/reserved/reserved.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    Create,
    LoginComponent,
    EditComponent,
    MachinesComponent,
    CreateMachinesComponent,
    ErrorHistoryComponent,
    ReservedComponent,
  ],

    imports: [
      BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
      FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
