import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { io, Socket } from 'socket.io-client';
import { Cliente } from '../components/cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlCliente = 'https://mensseger.eox.com.br/messenger/clientes';


  constructor(private http : HttpClient) {
    //this.socket = io(this.urlCliente, {transports: ['websocket', 'polling', 'flashsocket']});
  }

  

  buscarClientes() {
    return this.http.get<Cliente[]>(this.urlCliente)
    .pipe(tap(console.log),
      delay(0),
    );
  }
  //Teste com websocket
/*   getCliente() : Observable<Cliente[]>{

    return new Observable<Cliente[]>(observer => {
      this.socket.on('new message', (data) => {
        observer.next(data)
      });
      return () => {
        this.socket.disconnect();
      }
    });
  } */
}
