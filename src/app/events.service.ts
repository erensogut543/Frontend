import {Subject} from 'rxjs/Subject';
import {EventEmitter, Injectable, Output} from '@angular/core';
import {Sales} from "./sales.model";
import 'rxjs/Rx';
import {Notes} from "./notes.model";
import {Events} from "./events.model";

@Injectable()
export class EventsService {
  eventAdded=new EventEmitter<Events[]>();

  @Output() eventChanged = new Subject<Events[]>();
  private event: Events[] = [
    new Events('Baslik_Test', 'Aciklama_Test', 2017 , null),
    new Events('2.Test', '2.Test', 1995 , null)
  ];



  addEvents(event: Events) {
    this.event.push(event);
    this.eventAdded.emit(this.event.slice());
  }
  getEvents() {
    return this.event.slice();

  }
  displayEvents() {
    this.eventChanged.next(this.event.slice());
  }
}




