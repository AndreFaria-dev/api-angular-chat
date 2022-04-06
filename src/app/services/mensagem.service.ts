import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { interval, Observable } from 'rxjs';
import { delay, tap} from 'rxjs/operators';
import { Mensagem } from '../components/mensagem/mensagem';
import { Socket } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class MensagemService {


  constructor(private http : HttpClient) { 
    console.log('Executando construtor do service da mensagem');
  }

  buscarCaixaEntrada(idCliente : any, idAtendente : any) :Observable<any>{

    idAtendente = '101277585817128';
    /* Parametrizar o ID do atendente */
    /* Como há apenas facebook e instagram, existem 2 id's de atendentes */
    var requisicao = `https://mensseger.eox.com.br/messenger/inbox/atendente=${idAtendente}/cliente=${idCliente}`;
    


    return this.http.get<Mensagem[]>(requisicao).pipe(

      tap(console.log),

    );
  }
}