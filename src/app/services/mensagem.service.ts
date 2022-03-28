import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private http : HttpClient) { 
    console.log('Executando construtor do service da mensagem');
  }

  listarMensagens(idCliente : any) : Observable<any>{
    var requisicao = `https://mensseger.eox.com.br/messenger/inbox/atendente=17841452235830693/cliente=${idCliente}`;
    return this.http.get(requisicao);
  }

}
