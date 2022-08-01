import { Router } from '@angular/router';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  // NOVO COMPONENTE PRECISO DE PREFIXO SEGUINDO AS CONFIGURAÇÕES DO ARQUIVOS Angukar.json
  //"prefix": "app",
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  //É uma classe, então estou instanciando ela para dentro desse objeto, mas vou tipá-la do tipo "any"
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor (private service: TransferenciaService, private router: Router){

  }

  transferir() {
    console.log('Solicitada nova Transferencia');
    //que o valor vai receber o valor da minha propriedade,
    //do meu atributo valor e o destino vai receber o valor do atributo destino
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato')
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
    // throw new Error("Method not implemented.");
  }
}
