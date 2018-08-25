import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: any = {};
  cargarda: boolean = false;


  constructor(private http: HttpClient) { 

    console.log("Mensaje en la consola");
    //Leer archivos JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe(resp => {
      this.cargarda = true;
      this.info = resp;
      console.log(resp);
    });
  }
}
