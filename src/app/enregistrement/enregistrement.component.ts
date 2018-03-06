import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.css']
})
export class EnregistrementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    jQuery('.ui.dropdown')
      .dropdown();
  }

registerUser(){
  
  this.router.navigate(['login']);

}


}
