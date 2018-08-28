import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { PortafolioService } from './services/portafolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clovergraf';
  constructor(public _InfoPaginaService:InfoPaginaService,
              public _portafolio :PortafolioService ){

  }
}
 