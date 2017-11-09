import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SalesComponent } from './home/sales/sales.component';
import { EventsComponent } from './home/events/events.component';
import { NotesComponent } from './home/notes/notes.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {AppRoutingModule} from "./routing.module";
import { AddEventComponent } from './home/add-event/add-event.component';
import { AddSalesComponent } from './home/add-sales/add-sales.component';
import { AddNotesComponent } from './home/add-notes/add-notes.component';
import {SalesService} from "./sales.service";
import {NotesService} from "./notes.service";
import {EventsService} from "./events.service";
import { DropdownDirective } from './dropdown.directive';
import {SignupService} from "./signup.service";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {AuthGuard} from "./auth-guard.service";
import {AuthService} from "./auth.service";
import { OpenningComponent } from './home/openning/openning.component';
import {DataService} from "./dataService";


@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    EventsComponent,
    NotesComponent,
    NavigationBarComponent,
    AddEventComponent,
    AddSalesComponent,
    AddNotesComponent,
    NotesComponent,
    DropdownDirective,
    HomeComponent,
    OpenningComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule


  ],
  providers: [SalesService,
    NotesService,
    EventsService,
    SignupService,
    AuthGuard,
    AuthService,
    DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
