import { Component, OnInit } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  model = new Email('','','','');
  constructor() { }

  ngOnInit() {
  }
  get currentEmail(){
    return JSON.stringify(this.model);
  }
}
