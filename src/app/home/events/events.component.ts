import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Events} from "../../events.model";
import {EventsService} from "../../events.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  subscription: Subscription;
  event: Events[];



  constructor(private eventsService: EventsService ) { }

  ngOnInit() {
    this.event= this.eventsService.getEvents();
    this.eventsService.eventAdded.subscribe(
      (event:Events[])=>{
        this.event=event;
      }
    );
    this.eventsService.getEvents();
    this.eventsService.displayEvents();

  }


  onGet() {
  }
}
