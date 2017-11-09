import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router} from "@angular/router";
import {SignupService} from "../signup.service";
import {Users} from "../users.model";
import {AuthService} from "../auth.service";
import {validateConfig} from "@angular/router/src/config";
import {DataService} from "../dataService";
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  // template: `My Val: <ul><li>
  //       <span *ngFor="let x of values">{{values}} </span>
  //     </li></ul>`,
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit,AfterViewInit,OnChanges {
  dogrumu : boolean = false;
  newUser:any[];
  deneme = {
    "name" : "fatih",
    "surname" : "kucuk",
    "username" : "fatihkucuk",
    "password" : "123456"
  };
  public values: any[];
  user = {
  "Name": "",
  "Surname": "",
  "Username": ""
  };

  signupForm: FormGroup;
  signinForm: FormGroup;
  val = "";
  panelVisibleKayitOl = false;
  panelVisibleGirisYap = false;
  constructor(public signUp:SignupService,
              private router:Router,
              public authService:AuthService,
              private dataService: DataService) {

  }
  ngOnChanges() {

  }
  ngOnInit() {

    this.dataService.getUserWithId()
      .subscribe(
        (data: any) => this.values = data,
        (error) => console.log(error));

    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'Username': new FormControl( null, [Validators.required, Validators.pattern(/@dogus.edu.tr/)]),
        'Password': new FormControl( null , [Validators.required, Validators.minLength(6)]),
        'Name': new FormControl(null , [Validators.required]),
        'Surname': new FormControl(null , [Validators.required]),
        // 'Username': new FormControl(null , [Validators.required]),
        'confirmpassword': new FormControl( null , [Validators.required, Validators.minLength(6)] ),
      }, this.passwordControl)

    });

    this.signinForm = new FormGroup({
      'userData': new FormGroup({
        'emaill': new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/@dogus.edu.tr/)]),
        'passwordd': new FormControl( null , [Validators.required, Validators.minLength(6)]),
      })

    });


  }
  ngAfterViewInit(){
    // $(document).ready(function(){
    //   $("nav").attr({class:"navbar navbar-light hidden"});


    }


  onSignup() {
    this.panelVisibleKayitOl = true;

  }
  onSignin(){
    this.panelVisibleKayitOl = false;

  }
  onSubmit(){
    const errorSignupMessage='Kaydınız alınamadı.Lütfen girilen bilgileri kontrol ediniz';

    if(!this.signupForm.valid  ){
      alert(errorSignupMessage);
    }
    else {
      this.signUp.addUsers(this.signupForm.value.userData);
      this.newUser = this.signUp.getUsers();
      this.signUp.usersAdded.subscribe(
        (newuser: Users[]) => {
          this.newUser = newuser;
        });
      console.log(this.newUser);

      for(let x of this.newUser) {
        var arr = x;
      }
        this.dataService.post(arr)
          .subscribe(
            (response) => {
              console.log(response)
            },
            (error) => {
              console.log(error)
            },
          );

    }
  }

  onSubmitt(){
    const errorLoginMessage='Giriş yapılamadı lütfen tekrar deneyiniz';

    if(!this.signinForm.valid){
      alert(errorLoginMessage);
    }
    else{
      for(let users of this.newUser){
        if(users.email===this.signinForm.value.emaill && users.password===this.signinForm.value.passwordd){
          this.authService.login();
          this.router.navigate(['/home/openning'] );
        }
      }
    }
  }
  passwordControl(g : FormGroup) {
    return g.get('Password').value === g.get('confirmpassword').value
      ? null : {'confirmpassword': true};
  }

  ekle() {
    if(!this.dogrumu) {
      this.dogrumu = true;
    }
  }



}








