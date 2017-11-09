import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Events} from "../../events.model";
import {EventsService} from "../../events.service";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;
  event: Events[];

  afis = '';
  etkinlikAdi = '';
  aciklama = '';
  tarih = null;

  constructor(private eventsService: EventsService,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit() {

    this.initForm();
    // let subscription = this.salesService.saleChanged
    //   .subscribe(
    //     (sale: Sales[]) => {
    //       this.sale = sale;
    //     });
    // this.sale = this.salesService.getSales();
    this.event= this.eventsService.getEvents();
    this.eventsService.eventAdded.subscribe(
      (event:Events[])=>{
        this.event=event;
      }
    );

    this.eventsService.getEvents();
    this.eventsService.displayEvents();




  }
  public initForm(){

    this.eventForm = new FormGroup({
      'eventData': new FormGroup({
        'file': new FormControl(null),
        'header': new FormControl(null),
        'description': new FormControl(null , [Validators.required, Validators.max(9999)]),
        'date': new FormControl( null, Validators.required),
      })
    });
  }


  onSubmit() {

    this.eventsService.addEvents(this.eventForm.value.eventData);
    console.log(this.eventForm);

    console.log(this.eventsService.getEvents());
    // this.serverService.storeServers(this.soruService.getSoru());

    this.eventsService.getEvents();
    this.eventsService.displayEvents();

  }


  onCancel() {
    this.router.navigate(['/home'], {relativeTo: this.route});
  }
  onClear() {
    this.eventForm.reset();
  }

}
