import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import {clone} from 'lodash';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  userForm: boolean=false;
  isNewUser: boolean;
  newUser: any={};
  edituserForm: boolean;
  editUser: any={};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers=function(){
    this.users = this.userService.getUsersFromData();
  }

  showEditUserForm(user: User){
    if(!user){
      this.userForm = false;
      return ;
    }

    this.edituserForm = true;
    this.editUser = clone(user);
  }

  showAddUserForm(){
    // resets form if edited user
    if(this.users.length){
      this.newUser={};
    }
    this.userForm=true;
    this.isNewUser=true;

  }
  saveUser=function(user:User){
    if(this.isNewUser){
      //add a new user
      this.userService.addUser(user);
    }
    this.userForm=false;
  }
  
  updateUser(){
    this.userService.updateUser(this.editUser);
    this.edituserForm=false;
    this.editUser={};
  }

  removeUser(user:User){
    this.userService.deleteUser(user);
  }

  cancelEdits(){
    this.editUser={};
    this.edituserForm=false;
  }

  cancelNewUser(){
    this.newUser={};
    this.userForm=false;
  }

}
