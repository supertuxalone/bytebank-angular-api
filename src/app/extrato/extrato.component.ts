import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  //Estou pegando a propriedade transferencia, que está dentro de app.component
  transferencias: any[];

  constructor(private service: TransferenciaService) {}

  // método todas. Esse método me retorna observable. Logo, vou escutar, vou me inscrever na resposta desse método.
  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
    console.table(transferencias); this.transferencias = transferencias;
    });
  }
}
