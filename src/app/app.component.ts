import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {DataService} from "./dataService";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  providers: [DataService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public values: any[];
  constructor() { }

  ngOnInit() {

  }

}


