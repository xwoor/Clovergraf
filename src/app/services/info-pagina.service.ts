import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: any = {};
  cargarda: boolean = false;
  port: any = {};

  constructor(private http: HttpClient) { 
    this.cargarInfo();
    this.cargarPortafolio();
  }
  private cargarInfo(){
    
    //Leer archivos JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe(resp => {
      this.cargarda = true;
      this.info = resp;
      //console.log(resp);
    });
     
  }
  private cargarPortafolio(){
      
    //Leer archivos JSON
    this.http.get('https://clovergraf-49707.firebaseio.com/portafolio.json')
    .subscribe(resp => {
      this.port = resp; 
      
    });
  
  }
}
