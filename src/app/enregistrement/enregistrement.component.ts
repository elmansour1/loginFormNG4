import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.css']
})
export class EnregistrementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gender(): void{
     $('select.dropdown')
    .dropdown();
  }

}
