import {
  AfterViewInit, Component,  OnInit
} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import 'rxjs/Rx';
import {Notes} from '../../notes.model';
import {NotesService} from "../../notes.service";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit,AfterViewInit {
  subscription: Subscription;
  note: Notes[];



  constructor(private notesService: NotesService ) { }

  ngOnInit() {
    this.note = this.notesService.getNotes();
    this.notesService.noteAdded
      .subscribe(
      (note:Notes[])=>{
        this.note=note;
      }
    );
    this.notesService.getNotes();
    this.notesService.displayNotes();

  }

  ngAfterViewInit() {
    // $(document).ready(function(){
    //   setInterval($("button").click(function(){
    //     $('input[type=hidden]').attr({type:"text"});
    //   })), 3000 } );
    $(document).ready(function() {
      $('#eklebutton').click(function () {
        alert("İlanınız baş bir şekilde eklendi.");
      });
    })

  }
}
