import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortafolioService } from '../../services/portafolio.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  producto;

  constructor(private router: ActivatedRoute,
              public _servicioPortafolio: PortafolioService) { }

  ngOnInit() {
    //
    this.router.params
    .subscribe(parametros => {
      // console.log(parametros['id']);
        this._servicioPortafolio.getPortafolio(parametros['id'])
        .subscribe( producto => {
          this.producto = producto;
        });
    });
  }

}
