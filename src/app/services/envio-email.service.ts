import { Injectable } from '@angular/core';
	// importamos el servicio para enviar email
import {HttpClient} from '@angular/common/http';
import { Email } from '../pages/email.model';



@Injectable({
  providedIn: 'root'
})
export class EnvioEmailService {
  rutafinal:string ='../../assets/email.php';
  constructor( public http: HttpClient) { }

  enviandoDaros(email: Email){
    if(this.http.post(this.rutafinal, email)){
      console.log("Señor " + email.name + " su mensaje con asunto "+ email.asunto + 
      "se ha enviado correctamente, enviaremos una respuesta los mas pronto posible a "+ email.email 
      + " "+ email.mensaje );
      
    };

  }

}
