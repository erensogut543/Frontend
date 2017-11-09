import {Subject} from 'rxjs/Subject';
import {EventEmitter, Injectable, Output} from '@angular/core';
import {Sales} from "./sales.model";
import 'rxjs/Rx';
import {Notes} from "./notes.model";

@Injectable()
export class NotesService {
  noteAdded=new EventEmitter<Notes[]>();

  @Output() noteChanged = new Subject<Notes[]>();
  private note: Notes[] = [
    new Notes('Baslik_Test', 'Aciklama_Test', 'test' , null),
    new Notes('2.Test', '2.Test', 'test2', null)
  ];


constructor() {}
  addNotes(note: Notes) {
    this.note.push(note);
    this.noteAdded.emit(this.note.slice());
  }
  getNotes() {
    return this.note.slice();

  }
  displayNotes() {
    this.noteChanged.next(this.note.slice());
  }
}




