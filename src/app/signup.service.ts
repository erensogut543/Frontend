import {Users} from "./users.model";
import {EventEmitter} from "@angular/core";

export class SignupService{
  usersAdded=new EventEmitter<Users[]>();
  public users: Users[] =[
    new Users('131124@dogus.edu.tr','eren','asdasd','asdasd'),

  ];

  constructor(){}

  addUsers(users:Users){
    this.users.push(users);
    this.usersAdded.emit(this.users.slice());
  }
  getUsers(){
    return this.users.slice();
  }

}
