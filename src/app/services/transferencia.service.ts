import { Transferencia } from './../models/transferencia.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private HttpClient: HttpClient) {
    this.listaTransferencia = [];

  }

  get transferencias() {
    return this.listaTransferencia;
  }
  // observable, na verdade, implementa aquele padrão de observador, então esse método pode retornar a
  // resposta em algum futuro, e quando eu quiser escutar o que veio dessa resposta eu vou me inscrever e vou escutar.
  todas(): Observable<Transferencia[]>{
    return this.HttpClient.get<Transferencia[]>(this.url);
  }

  // eu também posso dizer que o retorno dessa função vai ser um observable,
  // ou desse método, de transferência. Http.post feito
  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.HttpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
