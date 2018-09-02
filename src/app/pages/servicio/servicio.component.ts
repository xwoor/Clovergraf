import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  producto;

  constructor(private router: ActivatedRoute,
              public _servicioServicio: ServiciosService) { }

  ngOnInit() {
    //
    this.router.params
    .subscribe(parametros => {
      // console.log(parametros['id']);
        this._servicioServicio.getServicios(parametros['id'])
        .subscribe( producto => {
          this.producto = producto;
        });
    });
  }

}
