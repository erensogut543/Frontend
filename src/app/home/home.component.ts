import {Component, HostListener, Input, OnInit} from '@angular/core';
import {getHtmlTagDefinition} from "@angular/compiler";
import {DataService} from "../dataService";
import {Users} from "../../../ClassifiedsProject/src/app/users.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DataService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userMenu: boolean = false;
  sideMenu: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onUser($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    if(!this.userMenu) {
      this.userMenu = true;
    }
    else {
      this.userMenu = false;
    }
  }
  @HostListener('document:click', ['$event']) ofUser($event) {
    this.userMenu = false;
    }

  sideBarToggle() {

    if(!this.sideMenu) {
      this.sideMenu = true;
    }
    else {
      this.sideMenu = false;
    }
  }




}
