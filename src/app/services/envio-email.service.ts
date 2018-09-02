import { Injectable } from '@angular/core';
	// importamos el servicio para enviar email
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvioEmailService {
  
  constructor( public http: HttpClient) { }
}
