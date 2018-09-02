import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public _servicios: ServiciosService) { }

  ngOnInit() {
  }

}
