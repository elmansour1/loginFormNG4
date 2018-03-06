import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../user/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  constructor(private router: Router) { }
  

  ngOnInit() {
  }

  loginUser(user: User){
  
    if(user.email == 'admin@faouzi.cm' && user.password == '1234'){
      console.log("lol");
      alert("lol");
     this.router.navigate(['/dashbord']);
    }else{
      this.router.navigate(['/enregistrement']);
    }
    return false;
  }

}
