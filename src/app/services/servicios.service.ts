import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  info: any = {};
  cargarda = true;
  serv: any = {};

  constructor(private http: HttpClient) {
      this.cargarServicios();
   }
   private cargarServicios(){
    // Vamos a leer el Json
    // con esto podemos usar los datos de JSON
    this.http.get('https://clovergraf-49707.firebaseio.com/servicios.json')
    .subscribe( resp => {
      this.cargarda = false;
      this.info = resp;
    });
  }
    getServicios( id: string){
      // Vamos a leer el Json
      // con esto podemos usar los datos de JSON
      return this.http.get(`https://clovergraf-49707.firebaseio.com/servicios/${id}.json`);
      };   
}
