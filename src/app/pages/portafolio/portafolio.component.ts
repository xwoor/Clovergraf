import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../../services/portafolio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public _portafolio :PortafolioService ) { }

  ngOnInit() {
  }

}
