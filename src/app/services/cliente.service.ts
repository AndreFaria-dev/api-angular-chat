import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http : HttpClient) { }

  buscarClientes() : Observable<any>{
    return this.http.get('https://mensseger.eox.com.br/messenger/clientes');
  }
}
