import { Component, OnInit } from '@angular/core';
import { Email } from '../email.model';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { EnvioEmailService } from '../../services/envio-email.service';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  model = new Email('','','','');
  submitted  = false;
  onSubmit() { this.submitted = true; }
  formatoJson: string =""; 
  constructor(public _servicio :InfoPaginaService,
              public _email: EnvioEmailService) { }             
  ngOnInit() {
  }
  
  envioEmail(){
    console.log(this.model);
    this._email.enviandoDaros(this.model);
    }
}


