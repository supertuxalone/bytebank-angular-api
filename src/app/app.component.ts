import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  // Estou pegando a propriedade transferencia, que está dentro de app.component
  // transferencias: any [] = [];
  // Isso vai fazer com que eu injete uma instância válida desse service
  constructor(private service: TransferenciaService) {}

  // App.component.ts simplesmente recebe o evento e propaga para o service
  transferir($event) {
    this.service.adicionar($event);
  }
}
