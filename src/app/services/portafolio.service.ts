import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  info: any = {};
  cargarda = true;
  port: any = {};

  constructor(private http: HttpClient) {
      this.cargarInformacion();
   }

   private cargarInformacion(){
      // Vamos a leer el Json
      // con esto podemos usar los datos de JSON
      this.http.get('https://clovergraf-49707.firebaseio.com/portafolio.json')
      .subscribe( resp => {
        this.cargarda = false;
        this.info = resp;
      });
      
   }
    getPortafolio( id: string){
    // Vamos a leer el Json
    // con esto podemos usar los datos de JSON
    return this.http.get(`https://clovergraf-49707.firebaseio.com/portafolio/${id}.json`);
    };   
}
