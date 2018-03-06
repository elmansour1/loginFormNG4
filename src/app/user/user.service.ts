import { Injectable } from '@angular/core';
import { User } from './user';
//import {findIndex} from 'lodash';

@Injectable()
export class UserService {

 private use : User[];
  constructor() { }

  getUsersFromData(): User[]{
    console.log(this.use);
    return this.use;
  }

  addUser(user: User): void{

    this.use.push(user);
    console.log(this.use);
  }

  updateUser(user: User){
   // let index = findIndex(this.use,(u: User) =>{
   //   return u.id === user.id;
    //})
   // this.use[index]=user;
  }

  deleteUser(user: User){
    this.use.splice(this.use.indexOf(user),1);
    console.log(this.use);
  }
}
