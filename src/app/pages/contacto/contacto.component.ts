import { Component, OnInit } from '@angular/core';
import { Email } from '../email.model';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  model = new Email('','','','');
  constructor(public _servicio :InfoPaginaService) { }
  ngOnInit() {
  }
  get currentEmail(){
    return JSON.stringify(this.model);
  }
}
