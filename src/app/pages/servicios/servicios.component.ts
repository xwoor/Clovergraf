import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor( public _servicios: ServiciosService ) { }

  ngOnInit() {
  }

}
