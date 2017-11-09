import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotesService} from "../../notes.service";
import {Notes} from "../../notes.model";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {
  noteForm: FormGroup;
  note: Notes[];

  notlar = '';
  konu = '';
  aciklama = '';
  bolum = '';

  constructor(
              private notesService: NotesService,
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
    this.note= this.notesService.getNotes();
    this.notesService.noteAdded.subscribe(
      (note:Notes[])=>{
        this.note=note;
      }
    );

    this.notesService.getNotes();
    this.notesService.displayNotes();




  }
  public initForm(){

    this.noteForm = new FormGroup({
      'noteData': new FormGroup({
        'file': new FormControl(null),
        'description': new FormControl(null, Validators.maxLength(10)),
        'department': new FormControl(null , [Validators.required, Validators.max(9999)]),
        'subject': new FormControl( null, Validators.required),
      })
    });
  }


  onSubmit() {

    this.notesService.addNotes(this.noteForm.value.noteData);
    console.log(this.noteForm.value);

    console.log(this.notesService.getNotes());
    // this.serverService.storeServers(this.soruService.getSoru());


    this.notesService.getNotes();
    this.notesService.displayNotes();
    // this.router.navigate(['/home/notes'], {relativeTo: this.route});

  }

  onCancel() {
    this.router.navigate(['/home'], {relativeTo: this.route});
  }
  onClear() {
    this.noteForm.reset();
}


}

